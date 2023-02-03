// try them all below!

/**
 * You can set
 * NODE_ENV=development or production
 * LOG_LEVEL
 * LOG_TO_FILENAME
 * 
 * To see different behaviors
 */

// import { syncClients } from './console/example-console.js'

// import { syncClients } from './pino/example-pino.js'

//import { syncClients } from './winston/example-winston.js'

import { syncClients } from './log4js/example-log4js.js'

syncClients();