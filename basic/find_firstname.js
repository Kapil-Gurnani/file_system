
var name = process.argv[3];
var first_name = name.split(' ').map(val => String(val));

module.exports.first_name = first_name[0];