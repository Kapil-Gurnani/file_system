var fs = require('fs');

const dir = require('../create');



var name = dir.name;
var email = dir.email;


var data = {
    name: name,
    email: email
}
    fs.writeFile(dir.dir+'/userInfo.json', JSON.stringify(data, undefined, 4), (err) => {
        if(err){
            return console.log(err);
        }
    console.log("File created successfully");
    console.log(JSON.stringify(data, undefined, 4));

    });