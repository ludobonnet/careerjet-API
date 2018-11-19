const careerjet = require('./index.js');

const userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:63.0) Gecko/20100101 Firefox/63.0';
const userIp = '0.0.0.0';

const careerjetAPI = new careerjet('en_GB', 'youraffidkey', userIp, userAgent);
careerjetAPI
  .location('London')
  .radius(1)
  .page(2)
  .sortBy('date')
  .query(
    function(results) {
      // do something with the success results
      console.log(results);
    },
    function(error) {
      // do something with the error results
      console.error(error);
    }
  );
