import logger from './winstonlogger.js';

async function clientsUpdatedSince(dateSince) {
  logger.debug('Getting clients updated since %s', dateSince);
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
  logger.debug('Getting last run');
  // just a stub
  return '2023-01-19T12:02:22';
}

async function setLastRun(dateRun) {
  logger.debug('Setting last run');
  // just a stub
  return;
}

export { clientsUpdatedSince, doSomethingReallyComplicatedInAnotherService, getLastRun, setLastRun }