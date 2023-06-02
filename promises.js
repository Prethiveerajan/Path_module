const{readfile, readFile} = require('fs')

console.log('start')
// const getFileData
readFile('./file1.txt','utf-8',(error,data)=>{
    if(error)
    {
        console.log(error)
    }
    console.log(data)
})