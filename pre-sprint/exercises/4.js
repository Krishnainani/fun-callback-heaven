const fs = require('fs');

function getJSFiles(directory, callBack) {
fs.readdir(directory, (err, files) => {
  if(err) {callBack(err);}
  else{
    const jsFiles = files.filter((file) => {return file.endsWith('js')})
    callBack(null, jsFiles)}
})
}
// Implement the function getJSFiles, it should take as arguments:
// a directory (string)
// a callback function
// the callback function must be invoked with an error and an array of js files only

getJSFiles('./library', function (error, jsFiles) {
  console.log(`The jsFiles are: `, jsFiles);
});
