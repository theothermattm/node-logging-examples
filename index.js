import { program } from "commander";

import { syncClients as syncClientsBunyan } from "./bunyan/example-bunyan.js";
import { syncClients as syncClientsConsole } from "./console/example-console.js";
import { syncClients as syncClientsLog4js } from "./log4js/example-log4js.js";
import { syncClients as syncClientsLogLevel } from "./loglevel/example-loglevel.js";
import { syncClients as syncClientsPino } from "./pino/example-pino.js";
import { syncClients as syncClientsWinston } from "./winston/example-winston.js";

import { runPerfTest as runPerfTestBunyan } from "./bunyan/bunyan-perf.js";
import { runPerfTest as runPerfTestConsole } from "./console/console-perf.js";
import { runPerfTest as runPerfTestLog4js } from "./log4js/log4js-perf.js";
import { runPerfTest as runPerfTestLoglevel } from "./loglevel/loglevel-perf.js";
import { runPerfTest as runPerfTestPino } from "./pino/pino-perf.js";
import { runPerfTest as runPerfTestWinston } from "./winston/winston-perf.js";

async function run() {
  program 
    .on("--help", () => {
      console.log(
        "Example command: node index.js -f pino \n\n" +
          "Available frameworks: pino, winston, log4js, loglevel, console \n \n" +
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
      case "bunyan":
        await syncClientsBunyan();
        break;
      case "console":
        await syncClientsConsole();
        break;
      case "log4js":
        await syncClientsLog4js();
        break;
      case "loglevel":
        await syncClientsLogLevel();
        break;
      case "pino":
        await syncClientsPino();
        break;
      case "winston":
        await syncClientsWinston();
        break;
      default:
        console.log("Unsupported framework option.");
        break;
    }
  } else {
    switch (options.framework) {
      case "bunyan":
        runPerfTestConsole();
        break;
      case "console":
        runPerfTestConsole();
        break;
      case "log4js":
        runPerfTestLog4js();
        break;
      case "loglevel":
        runPerfTestLoglevel();
        break;
      case "pino":
        runPerfTestPino();
        break;
      case "winston":
        runPerfTestWinston();
        break;
      default:
        console.log("Unsupported framework option.");
        break;
    }

    process.exit(0);
  }
}

run();
