const fs = require('fs');

function projectGenerator(projectName, cb) {
    fs.mkdir(`${projectName}`, (err, directory) => {
       // const fileNames = ["index.js", "index.test.js", "README.md", ".eslintrc.js",  ".gitignore"]
       // let counter = 0;
       // fileNames.forEach((file) => {
        if(err){cb(err);}
        else{
       // fs.writeFile(`${projectName}/index.js`, (err, newFile) => {
            //counter++;
            cb(null, "directory created!")
            // if(counter === fileNames.length){
            // }
        
      //  })
    }
        })
    
}
// projectGenerator("test_project", (err, string) => {
//      console.log(string);
// })
module.exports = projectGenerator;
