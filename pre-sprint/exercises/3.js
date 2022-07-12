const request = require('./request.js');

function limitJokes(link, limit){
    request(`${link}/search?limit=${limit}`, (err, data) => {
        const jokes = data.results;
        for (let i=0; i< jokes.length; i++){
        console.log(jokes[i].joke);
        }
    })
}
limitJokes('https://icanhazdadjoke.com', 5);
// Use request to make a request to 'https://icanhazdadjoke.com/search' in order to fetch a list of jokes

// Print the list of jokes to the terminal using console.log
// Try using the documentation (https://icanhazdadjoke.com/api) to see if you can dynamically alter the number of jokes coming back from the request. 
// This uses URL queries. E.g. `https://icanhazdadjoke.com/search?term=bananas` or `https://icanhazdadjoke.com/search?term=bananas&limit=3`
