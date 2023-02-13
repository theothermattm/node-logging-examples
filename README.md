# Node.js Logging Examples

A set of interesting configurations and comparisons for node.js logging frameworks.

* Using `console.log`
* Using [log4js](https://log4js-node.github.io/log4js-node)
* Using [pino](https://github.com/pinojs/pino)
* Using [winston](https://github.com/winstonjs/winston#filtering-info-objects)


To see example log output for various frameworks, this is running on [ReplIt](https://replit.com/@theothermattm/node-logging-examples#README.md) (use the "shell" button):

```
node index.js --help

Usage: index [options]

Options:
  -f --framework <framework>  logging framework name: pino, winston, console or log4js
  -p --perfTest [perfTest]    Run A Perf Test
  -h, --help                  display help for command
Example command: node index.js -f pino

Available frameworks: pino, winston, log4js, console

You can set NODE_ENV=development or production, LOG_LEVEL, LOG_TO_FILENAME as environment variables to see different behavior

```

To run a sample perf test;

```
./scripts/perf-test.sh
```
