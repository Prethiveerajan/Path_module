const path = require('path');
path1 = path.basename('/home/user/bash/index.txt');
console.log(path1)
path2 = path.basename('/home/user/bash/index.txt', '.txt');
console.log(path2)
path1 = path.join("users/admin/files", "index.html");
console.log(path1)
path2 = path.join("users", "geeks/website", "index.html");
console.log(path2)
path3 = path.join("users", "", "", "index.html");
console.log(path3)
path1 = path.resolve("users/admin", "readme.md");
console.log(path1)
path2 = path.resolve("users", "admin", "readme.md");
console.log(path2)
path3 = path.resolve("/users/admin", "readme.md");
console.log(path3)