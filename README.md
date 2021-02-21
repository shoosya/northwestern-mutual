# NorthwesternMutual
 
The following dependencies should be installed as development dependencies for the project in order for the test to work:

```
$ npm install --save-dev mocha chai chai-http supertest express fetch
```

### Converting An Address Into Geographic Coordinates
The code that converts an address into geographic coordinates is located in `./geoCoordinates.js`. The code runs perfectly on its own, but I could not find a way to pass the acquired latitude and longitude values to the test. Therefore I hardcoded these values in the test file.

I used the [positionstack](https://positionstack.com/) forward geolocation API and their free API key.

To run the code, type in Terminal:
```
$ node geoCoordinates.js
```

### Calling The Weather API Endpoint With Further Response Assessment
The test code is located in `./test/test.spec.js`. All the tests pass, although I am not sure I chose the best way to assess data values in the last test.

To run the tests, type in Terminal:
```
$ npm test
```