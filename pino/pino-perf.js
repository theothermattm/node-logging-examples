import logger from './pinologger.js';

const runPerfTest = () => {
  const numberOfLoops = 100000
  let startTime = new Date();
  for(let i = 0; i <= numberOfLoops ; i++) {
    logger.info(`Test Log Message ${i}`)
  }
  let endTime = new Date();

  logger.info(`Time to execute ${numberOfLoops} log messages: ${(endTime-startTime)} ms`);
}

export { runPerfTest };