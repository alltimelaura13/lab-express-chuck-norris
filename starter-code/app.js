const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

// Retrieve a random chuck joke
app.get('/random', (request, response, next) => {
  client.getRandomJoke()
  .then((response) => {
    console.log("chuck");
    // use the response here
  }).catch((err) => {
    // handle error
  })
});

app.listen(4000);
