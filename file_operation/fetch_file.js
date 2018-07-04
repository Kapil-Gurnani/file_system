var path = require('path');
var fs = require('fs');

const dir = require('./fetch_dir');
var email = process.argv[3];

var folder = dir.getDirectories(path.dirname('db/.'));
var data1;
var path1;
var i=0;
while(folder[i]!=undefined)
{
  var p = './db/'+folder[i]+'/userInfo.json';
  var status = fs.readFileSync('./db/'+folder[i]+'/userInfo.json');

    var fetch_data = JSON.parse(status.toString());
   
        if(fetch_data.email === email)
        {
          path1 = fs.realpathSync(p, []);
          
          data1 = JSON.stringify(fetch_data, undefined, 2);
       
        
        }
       


    i++;
    }

module.exports.data1 = data1;
module.exports.path1 = path1;