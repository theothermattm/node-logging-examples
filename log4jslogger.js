import log4js from 'log4js';
import path from 'path';
import { fileURLToPath } from 'url';

log4js.configure({
  appenders: { standard: { type: "stdout" }, },
  categories: {
    default: { appenders: ["standard"], level: "info" },
    'log4jsubfolder/clientservice.js': { appenders: ["standard"], level: "debug" },
    perf: { appenders: ["standard"], level: "warn" }
  },
});


/**
 * call like this with es modules:  const logger = createModuleLogger(import.meta.url) 
 **/
function createModuleLogger(fileName) {
  // fun trick https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
  // you can just use __filename if using commonjs modules! (eg require() format)
  const __filename = fileURLToPath(fileName);
  const relativeModuleName = path.relative('', __filename);
  return log4js.getLogger(relativeModuleName);
}

export { createModuleLogger, log4js }