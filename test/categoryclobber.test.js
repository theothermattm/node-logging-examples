import categoryglobber from '../log4js/categoryglobber';

test('category globber unglobs all the files', () => {
  const globbedOptions = {
    appenders: { standard: { type: 'stdout' } },
    categories: {
      default: { appenders: ['standard'], level: 'info' },
      'test/examplefolder/**.js': { appenders: ['standard'], level: 'debug' },
      perf: { appenders: ['standard'], level: 'trace' },
    },
  };

  const result = categoryglobber(globbedOptions);
  expect(Object.keys(result).length).toEqual(Object.keys(globbedOptions).length);

  // expect to find two files plus the two other 'named' categories
  expect(result.categories.default).toEqual(globbedOptions.categories.default);
  expect(result.categories.perf).toEqual(globbedOptions.categories.perf);
  expect(Object.keys(result.categories).length).toEqual(4);

  expect(result.categories['test/examplefolder/test1.js']).toEqual(globbedOptions.categories['test/examplefolder/**.js']);
  expect(result.categories['test/examplefolder/test2.js']).toEqual(globbedOptions.categories['test/examplefolder/**.js']);
});
