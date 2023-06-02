const http = require('http');
// const dateTImeModule = require('./mydatamodule');
const events = require('events')
const eventEmitter = new events.EventEmitter();
// http.createServer((request,response)=>
// {
//     response.writeHead(200,{'content-Type':'text/html'})
//     response.write('hello world')
//     response.write(dateTImeModule.currentDateTime())
//     response.end()


// })
var myEventHandler =()=> {
  console.log('I hear a scream!');
}
//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
//Fire the 'scream' event:
eventEmitter.emit('scream');
