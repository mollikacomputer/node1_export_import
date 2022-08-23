const {importExport, four} = require('./importExport');
async function testFunc(){

    console.log('Hello world step 1');
    await setTimeout(() => {
        console.log('Hello world waiting for 2 second')
    }, 1000);

    console.log('third step 3');

};

testFunc();

importExport();

four();