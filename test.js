var careerjet = require('./index.js');

const careerjetAPI = new careerjet('fr_FR', '55852348c0af7b801aecda6becb8fdf3');

careerjetAPI
    .location('Vaucluse')
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
