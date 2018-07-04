try{
var option = process.argv[2];
if(option === 'add'){

    const dir1 = require('./create');
}else if(option === 'find'){

    const dir1 = require('./find');
}else if(option === 'del'){

    const dir1 = require('./delete');
}else if(option === 'upd'){

    const dir1 = require('./update');
}else if(option === 'display'){
    const dir1 = require('./display');
}else{
    console.log('Invalid syntax');
}
}
catch(e){
    console.log('KIndly enter the input arguments');
}
