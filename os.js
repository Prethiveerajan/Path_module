const os = require('os');

console.log('Temporary Directory: ', os.tmpdir());
console.log('Endianness: ', os.endianness());
console.log('Hostname: ', os.hostname());
console.log('OS Type: ', os.type());
console.log('Platform: ', os.platform());
console.log('Architecture: ', os.arch());
console.log('Release: ', os.release());
console.log('Uptime: ', os.uptime());
console.log('Load Average: ', os.loadavg());
console.log('CPUs: ', os.cpus());
console.log('Network Interfaces: ', os.networkInterfaces());
console.log('Total Memory: ', os.totalmem());
console.log('Free Memory: ', os.freemem());


