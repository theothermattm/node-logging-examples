
async function clientsUpdatedSince(dateSince) {
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