require('dotenv').config();

const careerjet = require('./index.js');

const careerjetAPI = new careerjet({
  locale: 'en_US',
  affid: process.env.CAREERJET_AFFILIATE_ID,
  user_ip: process.env.USER_IP,
  user_agent: process.env.USER_AGENT
});

careerjetAPI
 /* .location('New York') */
  .contractType('c')
  .keywords('Software Engineer')
  .radius(1)
  .pagesize(50)
  .page(2)
  .sortBy('date')
  .query(
    (results) => {
      // do something with the success results
      console.log(results);
    },
    (error) => {
      // do something with the error results
      console.error(error);
    });
