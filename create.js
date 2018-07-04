
var fs = require('fs');



const random_number = require('./basic/random');
const fname = require('./basic/find_firstname');

var name = process.argv[3];

var validator = require('validator');
 

    if(validator.isEmail(name)){
        console.log('Invalid Input');
    }
    else{
        // console.log(process.argv[4]);
        var email = process.argv[4];
        if(validator.isEmail(email)){
        var first_name = fname.first_name;



var gen = random_number.options();

var fol_name = first_name+"_"+gen;


var dir = './db/'+fol_name;
const check = require('./file_operation/check_email');

if(check.isUserNotExist(email))
{
    if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log('Directory created :-  '+dir);
    
    module.exports.email = email;
    module.exports.dir = dir;
    module.exports.name = name;
    const insert = require('./file_operation/insert');
    }
}
else{
    console.log("User already exist");
}
    // }
}
else{
    console.log('Invalid Input');
}}