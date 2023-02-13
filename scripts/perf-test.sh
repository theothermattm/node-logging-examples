#!/bin/bash

NUMBER_OF_RUNS=20

echo "Running bunyan perf tests $NUMBER_OF_RUNS times"
for i in $( seq 0 $NUMBER_OF_RUNS); 
do
  /usr/bin/time -a -o bunyan-times-output.txt node index.js -f bunyan -p >> bunyan-output.txt
done

echo "Running console perf tests $NUMBER_OF_RUNS times"
for i in $( seq 0 $NUMBER_OF_RUNS); 
do
  /usr/bin/time -a -o console-times-output.txt node index.js -f console -p >> console-output.txt
done

echo "Running pino perf tests $NUMBER_OF_RUNS times"
for i in $( seq 0 $NUMBER_OF_RUNS); 
do
  /usr/bin/time -a -o pino-times-output.txt node index.js -f pino -p >> pino-output.txt
done

echo "Running winston perf tests $NUMBER_OF_RUNS times"
for i in $( seq 0 $NUMBER_OF_RUNS); 
do
  /usr/bin/time -a -o winston-times-output.txt node index.js -f winston -p >> winston-output.txt
done

echo "Running log4js perf tests $NUMBER_OF_RUNS times"
for i in $( seq 0 $NUMBER_OF_RUNS); 
do
  /usr/bin/time -a -o log4js-times-output.txt node index.js -f log4js -p >> log4js-output.txt
done

echo "Running loglevel perf tests $NUMBER_OF_RUNS times"
for i in $( seq 0 $NUMBER_OF_RUNS); 
do
  /usr/bin/time -a -o loglevel-times-output.txt node index.js -f loglevel -p >> loglevel-output.txt
done

echo "Done!"


