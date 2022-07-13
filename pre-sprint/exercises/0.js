const fs = require('fs');

function logFiles(path, callBack) {
  fs.readdir(path, (err, data) => {
    const jsFiles = data.filter(file => file.endsWith('js'));
    callBack(jsFiles);
  });
}
const callBack = array => {
  for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
  }
};

logFiles('./library', callBack);

// Use fs.readdir in order to print the names of all of the `.js` files in the "library" directory to the terminal
// You can find reasonable documentation on how to use fs.readdir here: https://www.geeksforgeeks.org/node-js-fs-readdir-method/
