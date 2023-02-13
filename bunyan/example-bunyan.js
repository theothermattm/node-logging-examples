import moment from 'moment';
import {
  clientsUpdatedSince, setLastRun, getLastRun, doSomethingReallyComplicatedInAnotherService,
} from './clientservice.js';
import { createLogger } from './bunyanlogger.js';
// with commonjs, can just use __filename as name
const logger = createLogger({ fileName: import.meta.url, level: 'debug' });

const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

async function syncClients() {
  logger.info('Syncing clients...');
  const lastRun = await getLastRun();
  const timeOfLastFetch = moment(lastRun).format(DATE_FORMAT);
  const clients = await clientsUpdatedSince(timeOfLastFetch);

  logger.info(`Fetching clients updated since ${timeOfLastFetch}`);
  if (clients.length === 0) {
    logger.info('No updated clients.');
    return [];
  }

  // call out to another service to modify the clients list
  // with some _really important business logic_
  const modifiedClients = await doSomethingReallyComplicatedInAnotherService(clients);
  if (modifiedClients < 1 || (modifiedClients.errors && modifiedClients.errors.length > 0)) {
    logger.error('ERROR Calling Remote Service');
    logger.error(`Service Call Result ${JSON.stringify(modifiedClients, null, 2)}`);
  }

  // Store the last time we updated the clients.
  await setLastRun(moment());
  return modifiedClients;
}

export default syncClients;
