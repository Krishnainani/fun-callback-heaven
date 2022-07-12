const request = require('./request.js');

function fetchJoke(link){
    request(link, (err, joke) => {
        console.log(joke.joke);
    })
}
fetchJoke('https://icanhazdadjoke.com/'
)
// Use request in order to fetch a joke from the following website 'https://icanhazdadjoke.com/'

/* 
request is a function that we've created to help make requests across the internet:

 - request takes as its first argument: a url like above
 - and as its second argument: a callback function that gives you access to the data
*/
