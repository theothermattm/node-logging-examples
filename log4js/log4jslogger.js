import log4js from 'log4js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import getGlobbedFiles from './categoryglobber.js';

/* eslint-disable no-underscore-dangle */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let configFileName = 'log4jsconfig-development.json';

if (process.env.NODE_ENV) {
  const envFileName = `log4jsconfig-${process.env.NODE_ENV}.json`;
  if (fs.existsSync(envFileName)) {
    configFileName = envFileName;
  }
}

const globbedOptions = JSON.parse(fs.readFileSync(`${__dirname}/${configFileName}`));
const unglobbedOptions = getGlobbedFiles(globbedOptions);

// configuration comes from json files
// you can add different configurations for different environments this way.
log4js.configure(unglobbedOptions);

/**
 * call like this with es modules:  const logger = createModuleLogger(import.meta.url)
 * */
function createModuleLogger(fileName) {
  let relativeModuleName;
  if (import.meta) {
    // fun trick https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
    const moduleFilePath = fileURLToPath(fileName);
    relativeModuleName = path.relative('', moduleFilePath);
  } else {
    relativeModuleName = path.relative('', __filename);
  }

  return log4js.getLogger(relativeModuleName);
}

/* eslint-enableno-underscore-dangle */

export { createModuleLogger, log4js };
