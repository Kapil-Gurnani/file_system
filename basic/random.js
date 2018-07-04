var rn = require('random-number');

var options = rn.generator({
    min:  100000,
    max:  999999,
    integer: true
  });

  module.exports.options = options;