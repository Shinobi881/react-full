var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '';

module.exports = {
  get: function(url) {
    // console.log("Root request url", rootUrl + url)
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response){
      var temp = response.json();
      return temp;
    })

  }
};
