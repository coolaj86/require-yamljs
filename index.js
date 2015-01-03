// Adding an yaml loader
var YAML = require('yamljs')
  ;

if (require.extensions['.yml']) {
  if (!require.extensions['.yml'].__yamljs) {
    console.warning('WARNING: Some other require-yaml implementation is already present, aborting.');
  }
  return;
}

require.extensions['.yml'] = function (module, filename) {
  var fs = require('fs')
    , yml = YAML.parse(fs.readFileSync(filename, 'utf8'))
    ;

  //console.log(filename);
  //console.log(yml);
  module.exports = yml;
};

require.extensions['.yaml'] = require.extensions['.yml'];
require.extensions['.yml'].__yamljs = true;
