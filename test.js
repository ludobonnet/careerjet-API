var careerjet = require('./index.js');

const careerjetAPI = new careerjet('en_GB', 'youraffidkey');

careerjetAPI
    .location('London')
    .page(2)
    .sortBy('date')
    .query(
        function (results) {
            // do something with the success results
            console.log(results);
        },
        function (error) {
            // do something with the error results
            console.error(error);
      });
