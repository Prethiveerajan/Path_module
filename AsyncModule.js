const {readFile} = require('fs').promises
// const until = require('util')
// const readFilePromise = util.promisify(readFile)

console.log('start')
const start = async() =>{
    try{
        const fileData = await readFile('./file1.txt','utf-8')
        console.log(fileData)

    }
    catch(error)
    {
        console.log(error)
    }
}
start()