# CareerJet API


A small library to query Careerjet Jobboard, built and maintained by [Ludo Bonnet](http://bonnet.pro)

## Installation

```bash
  npm install careerjet
```

## Usage

```js
var careerjet = require('careerjet');

const careerjetAPI = new careerjet('en_GB', 'youraffidkey');

careerjetAPI
    .location('London')
    .keywords('developer')
    .query(
        function (results) {
            // do something with the success results
            console.log(results);
        },
        function (error) {
            // do something with the error results
            console.error(error);
      });
```

## Tests

```bash
  npm test
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

----

Made with &#9829; by [Ludo Bonnet](http://bonnet.pro)

[npm-url]: https://www.npmjs.com/package/careerjet
