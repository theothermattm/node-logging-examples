import log from 'loglevel';

log.setDefaultLevel('info');
log.getLogger('clientservice').setLevel('debug');

const loggers = [log]

const loggerNames = Object.keys(log.getLoggers());

loggerNames.forEach((logName) => {
  loggers.push(log.getLogger(logName));
});

loggers.forEach((log) => {
  const originalFactory = log.methodFactory;
  log.methodFactory = function (methodName, logLevel, loggerName) {
      let rawMethod = originalFactory(methodName, logLevel, loggerName);

      return function () {
        let messages = [`${new Date()} - ${loggerName || 'default' } - `]
        for (var i = 0; i < arguments.length; i++) {
          messages.push(arguments[i]);
        }
        rawMethod.apply(undefined, messages);
      };
  };
  log.setLevel(log.getLevel()); 
});

