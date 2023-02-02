import { match } from 'assert';
import glob from 'glob';


const defaultOptions = {
  ignore : ['default'],
}

function getLog4JOptionsUnGlobbed(globbedLog4JsOptions, globOptions) {

  const mergedGlobOptions = {...defaultOptions, globOptions};
  const unglobbedOptions = JSON.parse(JSON.stringify(globbedLog4JsOptions));
  for (const category in globbedLog4JsOptions.categories ) {
    const matchingFiles = glob.sync(category, mergedGlobOptions);
    if ( matchingFiles && matchingFiles.length > 0 ) {
      matchingFiles.forEach((file) => {
        unglobbedOptions.categories[file] = globbedLog4JsOptions.categories[category];
      })
      delete unglobbedOptions.categories[category]
    }
  }
  return unglobbedOptions;
}

export default getLog4JOptionsUnGlobbed;

