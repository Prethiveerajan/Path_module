const http = require('http')
const myserver = http.createServer((request,response)=>
{
    if(request.url=='/')
    {
        console.log()
    }
})