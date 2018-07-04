var fetch_dir = require('./file_operation/fetch_dir');
var fs = require('fs');

var dir = fetch_dir.getDirectories('./db');

var i=0;
while(dir[i] != undefined){
    
    // var path = './db/'+folder[i]+'/userInfo.json';
    var status = fs.readFileSync('./db/'+dir[i]+'/userInfo.json');

    var fetch_data = JSON.parse(status.toString());
    console.log(i+1+'. '+fetch_data.name);
    console.log(JSON.stringify(fetch_data, undefined, 2));

    ++i;
}
console.log(i+' records found successfully');