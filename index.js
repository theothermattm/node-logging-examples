import { program } from "commander";

import { syncClients as syncClientsConsole } from "./console/example-console.js";
import { syncClients as syncClientsPino } from "./pino/example-pino.js";
import { syncClients as syncClientsWinston } from "./winston/example-winston.js";
import { syncClients as syncClientsLog4js } from "./log4js/example-log4js.js";

import { runPerfTest as runPerfTestWinston } from "./winston/winston-perf.js";
import { runPerfTest as runPerfTestPino } from "./pino/pino-perf.js";
import { runPerfTest as runPerfTestLog4js } from "./log4js/log4js-perf.js";
import { runPerfTest as runPerfTestConsole } from "./console/console-perf.js";

async function run() {
  program 
    .on("--help", () => {
      console.log(
        "Example command: node index.js -f pino \n\n" +
          "Available frameworks: pino, winston, log4js, console \n \n" +
          "You can set NODE_ENV=development or production, LOG_LEVEL, LOG_TO_FILENAME " +
          "as environment variables to see different behavior"
      );
    })
    .requiredOption("-f --framework <framework>", "logging framework name: pino, winston, console or log4js")
    .option("-p --perfTest [perfTest]", "Run A Perf Test");

  await program.parseAsync(process.argv);
  const options = program.opts();


  if (!options.perfTest) {
    switch (options.framework) {
      case "pino":
        await syncClientsPino();
        break;
      case "log4js":
        await syncClientsLog4js();
        break;
      case "winston":
        await syncClientsWinston();
        break;
      case "console":
        await syncClientsConsole();
        break;
      default:
        console.log("Unsupported framework option.");
        break;
    }
  } else {
    switch (options.framework) {
      case "pino":
        runPerfTestPino();
        break;
      case "log4js":
        runPerfTestLog4js();
        break;
      case "winston":
        runPerfTestWinston();
        break;
      case "console":
        runPerfTestConsole();
        break;
      default:
        console.log("Unsupported framework option.");
        break;
    }

    process.exit(0);
  }
}

run();
