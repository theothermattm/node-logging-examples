import bunyan from 'bunyan';
import path from 'path';
import { fileURLToPath } from 'url';


const logger = bunyan.createLogger({name: 'default', 
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info'
})

const createLogger = (opts) => {

  let relativeModuleName;

  if( import.meta ) {
    // fun trick https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
    const __filename = fileURLToPath(opts.fileName);
    relativeModuleName = path.relative('', __filename);
  }
  else {
    relativeModuleName = path.relative('', __filename);
  }
  
  return bunyan.createLogger({
    name: relativeModuleName, 
    level: opts.level || 'info'
  }) 
}

export { logger, createLogger }