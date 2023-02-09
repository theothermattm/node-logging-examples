
const runPerfTest = () => {
  const numberOfLoops = 100000
  let startTime = new Date();
  for(let i = 0; i <= numberOfLoops ; i++) {
    console.info(`Test Log Message ${i}`)
  }
  let endTime = new Date();

  console.info(`Time to execute ${numberOfLoops} log messages: ${(endTime-startTime) } ms`);
}

export { runPerfTest };