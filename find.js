
    const data = require('./file_operation/fetch_file');
    if(data.data1 != undefined){
        console.log(data.data1);
        console.log('Path :- '+data.path1);
    }else{
        console.log("User not exist");
    }

