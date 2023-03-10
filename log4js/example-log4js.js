import moment from 'moment';
import { createModuleLogger, log4js } from './log4jslogger.js';
import {
  clientsUpdatedSince, setLastRun, getLastRun, doSomethingReallyComplicatedInAnotherService,
} from './log4jssubfolder/clientservice.js';
import { doSomethingAwesome } from './log4jssubfolder/anotherservice.js';

// for commonjs, you can just use __filename
const logger = createModuleLogger(import.meta.url);
const perfLogger = log4js.getLogger('perf');

const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

async function syncClients() {
  let startTime; let
    endTime;
  if (perfLogger.isTraceEnabled()) {
    startTime = new Date();
  }
  logger.info('Syncing clients...');
  const lastRun = await getLastRun();
  const from = lastRun || moment(lastRun).subtract(3, 'days').format(DATE_FORMAT);
  const timeOfLastFetch = moment().format(DATE_FORMAT);
  const clients = await clientsUpdatedSince(timeOfLastFetch);

  logger.info('Fetching clients updated since %s', timeOfLastFetch);
  logger.trace('Fetching clients with parameters from: %s and timeOfLastFetch: %s', from, timeOfLastFetch);
  if (clients.length === 0) {
    logger.warn('No updated clients.');
    return [];
  }

  logger.debug('Calling out to another service to do some really complicated business logic');
  const modifiedClients = await doSomethingReallyComplicatedInAnotherService(clients);
  if (modifiedClients < 1 || (modifiedClients.errors && modifiedClients.errors.length > 0)) {
    logger.error('ERROR Calling Remote Service');
    logger.error(`Service Call Result ${JSON.stringify(modifiedClients, null, 2)}`);
  }
  logger.trace('Done calling out and doing important things.');

  logger.trace('About to do something cool');
  await doSomethingAwesome();

  logger.trace('Setting last run date so we know where to pick up next time.');
  await setLastRun(moment());

  if (perfLogger.isTraceEnabled()) {
    endTime = new Date();
    perfLogger.trace(`Time to execute: ${endTime - startTime}ms`);
  }
  return modifiedClients;
}

export default syncClients;
