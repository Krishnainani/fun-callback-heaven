const fs = require('fs');

function logFiles(path) {
  fs.readFile(path, 'utf8', (err, contents) => {
    console.log(contents);
  });
}
logFiles('./library/hello.txt');
// Use fs.readFile in order to read the file contents of './library/hello.txt' and console.log the contents to the terminal.
// You can find documentation on fs.readFile here: https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
