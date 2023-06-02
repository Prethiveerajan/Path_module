const http = require('http')
const dateTImeModule = require('./mydatamodule')
http.createServer((request,response)=>
{
    response.writeHead(200,{'content-Type':'text/html'})
    response.write(dateTImeModule.currentDateTime())
    response.write("hello daw ambi");
    response.end()

}).listen(8081)
console.log('server startes running at http://localhost:8081')

