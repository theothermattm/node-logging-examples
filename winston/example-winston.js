import moment from 'moment';
import logger from './winstonlogger.js';
import { clientsUpdatedSince, setLastRun, getLastRun, doSomethingReallyComplicatedInAnotherService } from './clientservice.js';

const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss'

const syncClients = async function() {
  logger.info('Syncing clients...');
  const lastRun = await getLastRun();
  const from = lastRun || moment().subtract(3, 'days').format(DATE_FORMAT);
  const timeOfLastFetch = moment().format(DATE_FORMAT)
  const clients = await clientsUpdatedSince(timeOfLastFetch);

  logger.info("Fetching clients updated since %s", timeOfLastFetch);
  logger.silly("Fetching clients with parameters from: %s and timeOfLastFetch: %s", from, timeOfLastFetch);
  if (clients.length === 0) {
    logger.warn('No updated clients.')
    return;
  }

  logger.debug("Calling out to another service to do some really complicated business logic");
  const modifiedClients = await doSomethingReallyComplicatedInAnotherService(clients);
  if ( modifiedClients < 1 || (modifiedClients.errors && modifiedClients.errors.length > 0) ) {
    logger.error('ERROR Calling Remote Service')
    logger.error(`Service Call Result ${JSON.stringify(modifiedClients, null, 2)}`)
  }
  logger.silly("Done calling out and doing important things.");

  logger.debug("Setting last run date so we know where to pick up next time.")
  await setLastRun(moment())
  return modifiedClients;
}

export { syncClients }