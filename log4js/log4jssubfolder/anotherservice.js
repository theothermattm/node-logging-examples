import { createModuleLogger } from '../log4jslogger.js';
const logger = createModuleLogger(import.meta.url);

async function doSomethingAwesome() {
  logger.debug('Doing something really fun!');
  return;
}

export { doSomethingAwesome }