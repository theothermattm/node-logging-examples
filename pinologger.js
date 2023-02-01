import pino from 'pino';

let logger;

/* note in replit, you can set the NODE_ENV in the secrets section, or you can just do this:
process.env.NODE_ENV = 'development' */
if ( process.env.NODE_ENV === 'development' ) {
   // "default" production configuration for ease of use in log ingestion tools
   console.log('Setting up logger for development...');
   logger = pino(
    {
    level : 'trace',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
  });
}
else {
  logger = pino();
}

export default logger;