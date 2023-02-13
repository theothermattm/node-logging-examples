import log from 'loglevel';

const runPerfTest = () => {
  const numberOfLoops = 100000;
  const startTime = new Date();
  for (let i = 0; i <= numberOfLoops; i++) {
    log.info(`Test Log Message ${i}`);
  }
  const endTime = new Date();

  log.info(`Time to execute ${numberOfLoops} log messages: ${(endTime - startTime)} ms`);
};

export default runPerfTest;
