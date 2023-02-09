import pino from 'pino';
import fs from 'fs';

let logger;

/* note in replit, you can set the NODE_ENV in the secrets section, or you can just do this:
process.env.NODE_ENV = 'development' */
if ( process.env.NODE_ENV === 'development' ) {
   console.log('Setting up logger for development...');
   logger = pino(
    {
    level : 'trace',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: false,
        // can make this false for non blocking calls, but for local dev
        // I find it's better to have the real time calls to the logger.
        sync: true 
      }
    }
  });
}
else {

  const multistream = pino.multistream;
  const level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info';

  let streams = [ {stream: process.stdout}]

  if( process.env.LOG_FILENAME ) {
    streams.push({stream: fs.createWriteStream(process.env.LOG_FILENAME)})
  }
  // can also turn on sync: false
  logger = pino({level: level}, multistream(streams));
  console.log('returning logger')
}

export default logger;