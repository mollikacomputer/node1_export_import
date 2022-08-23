function importExport(){
    console.log('export from another file 1');
};

function four(){
    console.log('export from another file 2');
}
module.exports.importExport = importExport;
module.exports.four = four;


// console.log(module);