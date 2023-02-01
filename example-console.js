import moment from 'moment';
import { clientsUpdatedSince, setLastRun, getLastRun, doSomethingReallyComplicatedInAnotherService } from './clientservice.js';


const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss'

const syncClients = async function() {
  console.log('Syncing clients...');
  const CLIENT_LAST_RUN_KEY = 'CLIENT_LAST_RUN_DATE';
  const lastRun = await getLastRun();
  const from = lastRun || moment().subtract(3, 'days').format(DATE_FORMAT);
  const timeOfLastFetch = moment().format(DATE_FORMAT)
  const clients = await clientsUpdatedSince(timeOfLastFetch);

  console.log(`Fetching clients updated since ${timeOfLastFetch}`);
  if (clients.length === 0) {
    console.log('No updated clients.')
    return;
  }

  // call out to another service to modify the clients list
  // with some _really important business logic_
  const modifiedClients = await doSomethingReallyComplicatedInAnotherService(clients);
  if ( modifiedClients < 1 || (modifiedClients.errors && modifiedClients.errors.length > 0) ) {
    console.error('ERROR Calling Remote Service')
    console.error(`Service Call Result ${JSON.stringify(modifiedClients, null, 2)}`)
  }

  // Store the last time we updated the clients.
  await setLastRun(moment())
  return modifiedClients;
}

export { syncClients }