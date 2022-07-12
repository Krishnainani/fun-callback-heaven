const fs = require('fs');
const request = require('./request');

// Create a writeJoke function that fetches a joke and writes the joke to a file called joke.txt
// Should take a callback function that is invoked when the file is created

function writeJoke(callBack) {
    request('https://icanhazdadjoke.com', (err, joke) => {
    fs.writeFile('./library/joke.txt', joke.joke ,(err, response) => {
        fs.readFile('./library/joke.txt', 'utf8',  (err, fileContents) => {
            callBack(null, fileContents);
        })
    }) 
})
}

writeJoke((err, response) => console.log(response));
