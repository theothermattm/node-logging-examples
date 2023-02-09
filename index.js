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

// import { syncClients } from './winston/example-winston.js'

// import { syncClients } from './log4js/example-log4js.js'

// await syncClients();


// see perf test results

// import { runPerfTest } from './winston/winston-perf.js';

import { runPerfTest } from './pino/pino-perf.js';

// import { runPerfTest } from './log4js/log4js-perf.js';

// import { runPerfTest } from './console/console-perf.js';

runPerfTest();