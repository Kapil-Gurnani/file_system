
const data = require('./file_operation/fetch_file');
    const del_func = require('./file_operation/del_dir');
    
    if(data.data1 != undefined){
        console.log(data.data1);
        console.log('Path :- '+data.path1);
        del_func.deleteFolderRecursive(data.path1.substring(0, data.path1.lastIndexOf("/")));
        console.log('User removed');
    }else{
        console.log("User not exist");
    }
   

