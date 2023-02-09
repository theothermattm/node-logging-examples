import { createLogger, transports } from 'winston';
import { format } from 'logform';

let logLevel = process.env.LOG_LEVEL || 'silly'
let fileLog = process.env.LOG_TO_FILENAME || false

/* This blog post has some good information on configuring winston if you want to customize it.
 * https://thisdavej.com/using-winston-a-versatile-logging-library-for-node-js
 */
let appFormat = format.json();

if ( process.env.NODE_ENV === 'development' ) {
  appFormat = format.combine(
    format.timestamp(),
    format.splat(),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`))
}

let appTransports = []
appTransports.push(new transports.Console())
if (fileLog) appTransports.push(new transports.File({ filename: fileLog }))

const logger = createLogger({
  level: logLevel,
  format: appFormat,
  transports: appTransports
})

export default logger;