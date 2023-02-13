import log from 'loglevel';

log.setDefaultLevel('info');
log.getLogger('clientservice').setLevel('debug');

const loggers = [log];

const loggerNames = Object.keys(log.getLoggers());

loggerNames.forEach((logName) => {
  loggers.push(log.getLogger(logName));
});

/* eslint-disable */
loggers.forEach((log) => {
  const originalFactory = log.methodFactory;
  log.methodFactory = function(methodName, logLevel, loggerName) {
    const rawMethod = originalFactory(methodName, logLevel, loggerName);

    return function () {
      const messages = [`${new Date()} - ${loggerName || 'default'} - `];
      for (let i = 0; i < arguments.length; i++) {
        /* eslint-disable  */
        messages.push(arguments[i]);
      }
      rawMethod.apply(undefined, messages);
    };
  };
  log.setLevel(log.getLevel());
});
/* eslint-enable */
