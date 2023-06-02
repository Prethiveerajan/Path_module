const pathModule = require('path');

// Using path.sep
console.log('Path separator:', pathModule.sep);

// Using path.join()
const path1 = 'context';
const path2 = 'subfolder';
const filename = 'text.txt';
const joinedPath = pathModule.join(path1, path2, filename);
console.log('Joined path:', joinedPath);

// Using path.basename()
const filePath = '/context/subfolder/text.txt';
const basename = pathModule.basename(filePath);
console.log('File basename:', basename);

// Using path.resolve()
const baseDir = '/home/user';
const relativePath = '../documents';
const resolvedPath = pathModule.resolve(baseDir, relativePath);
console.log('Resolved path:',resolvedPath);