// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = fetch(API_URL, myObject)
    .then(response => response.json()).
    then(data => {
      const jokeText = document.getElementById('jokeContainer').innerHTML = data.joke;
    }).
    catch(error => console.log(error))
};


// 'Your key: e7ca4525-ba09-4543-b75e-b4fbffe772b3'
window.onload = () => fetchJoke();