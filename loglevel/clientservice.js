import log from 'loglevel';

const logger = log.getLogger('clientservice');

async function clientsUpdatedSince(dateSince) {
  logger.debug('Clients updated since');
  // just a stub
  return [{
    id: 1,
    name: 'Client1'
  },
  {
    id: 2,
    name: 'Client2'

  }]
}

async function doSomethingReallyComplicatedInAnotherService(object) {
  logger.debug('Doing something really complicated');
  // just a stub
  return [];
}

async function getLastRun(dateRun) {
  // just a stub
  return '2023-01-19T12:02:22';
}

async function setLastRun(dateRun) {
  // just a stub
  return;
}

export { clientsUpdatedSince, doSomethingReallyComplicatedInAnotherService, getLastRun, setLastRun }