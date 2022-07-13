const fs = require('fs');
const { exec } = require('child_process');
const { executionAsyncId } = require('async_hooks');

function projectGenerator(projectName, callbackFunc) {
  fs.mkdir(`${projectName}`, (err, directory) => {
    const fileNames = [
      { fileName: 'index.js', fileContent: '' },
      { fileName: 'README.md', fileContent: `# ${projectName}` },
      { fileName: '.eslintrc.json', fileContent: '' },
      { fileName: '.gitignore', fileContent: 'node_modules' },
      { fileName: '.git', fileContent: '' }
    ];
    if (err) {
      callbackFunc(err);
    } else {
      let counter = 0;
      fileNames.forEach(file => {
        fs.writeFile(`./${projectName}/${file.fileName}`, file.fileContent, (err, newFile) => {
          if (err) {
            callbackFunc(err);
          } else {
            counter++;
            if (counter === fileNames.length) {
              fs.mkdir(`${projectName}/spec`, (err, directory) => {
                if (err) {
                  callbackFunc(err);
                } else {
                  fs.writeFile(`./${projectName}/spec/index.test.js`, '', (err, file) => {
                    if (err) {
                      callbackFunc(err);
                    } else {
                      exec('cd ./${projectName}');
                      exec('npm init -y', (err, thing) => {
                        callbackFunc(null, thing);
                      });
                    }
                  });
                }
              });
            }
          }
        });
      });
    }
  });
}

module.exports = projectGenerator;

// { fileName: 'index.test.js', fileContent: '' }
