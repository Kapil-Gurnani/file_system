var fs = require('fs');


var getDirectories = function(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  };


  module.exports.getDirectories = getDirectories;