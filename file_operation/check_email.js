var path = require('path');
var fs = require('fs');

const dir = require('./fetch_dir');


var folder = dir.getDirectories(path.dirname('db/.'));


var isUserNotExist = function(email){


    var i=0;
    var f=0;
    if(folder[i]==undefined){
        return true;
    }
    else{

    
    while(folder[i]!==undefined)
    {

    var p = './db/'+folder[i]+'/userInfo.json';

    var status = fs.readFileSync('./db/'+folder[i]+'/userInfo.json');

    var fetch_data = JSON.parse(status.toString());
   
        if(fetch_data.email === email)
        {
            data1 = JSON.stringify(fetch_data, undefined, 2);
            path1 = 'Path :- '+fs.realpathSync(p, []);
            console.log(JSON.stringify(fetch_data, undefined, 2));
            f++;
        }
       


    i++;
    }

    if(f === 0)
        return true;
    else
        return false;
    
}

}
module.exports.isUserNotExist = isUserNotExist;