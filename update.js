var fs = require('fs');
const data = require('./file_operation/fetch_file');
var upd_name = process.argv[4];
// var d = JSON.parse(data.data1);
// console.log(d);
// console.log(data.data1);
if(data.data1 != undefined)
{
    var upd_json = {
        name: upd_name,
        email: JSON.parse(data.data1).email
    };



    fs.writeFile(data.path1, JSON.stringify(upd_json, undefined, 2), (err) => {
        if(err){
            // process.exitCode();
            return console.log(err);
            }
    console.log("File updated successfully");
    console.log(JSON.stringify(upd_json, undefined, 4));

    });
}
else{
    console.log('User not exist');
}

// // var data = {
// //     name: 'a',
// //     email: 's'
// // }
// // console.log( data);