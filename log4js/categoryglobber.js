import glob from 'glob';

const defaultOptions = {
  ignore: ['default'],
};

function getLog4JOptionsUnGlobbed(globbedLog4JsOptions, globOptions) {
  const mergedGlobOptions = { ...defaultOptions, globOptions };
  const unglobbedOptions = JSON.parse(JSON.stringify(globbedLog4JsOptions));

  Object.keys(globbedLog4JsOptions.categories).forEach((category) => {
    const matchingFiles = glob.sync(category, mergedGlobOptions);
    if (matchingFiles && matchingFiles.length > 0) {
      matchingFiles.forEach((file) => {
        unglobbedOptions.categories[file] = globbedLog4JsOptions.categories[category];
      });
      delete unglobbedOptions.categories[category];
    }
  });
  return unglobbedOptions;
}

export default getLog4JOptionsUnGlobbed;
