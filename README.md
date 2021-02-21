# Test Assignment for NorthwesternMutual
 
### Environment Setup
In order for the function and test to work, the following dependencies should be installed as development dependencies for the project:

```
cd //path to repo clone on your machine
$ npm install --save-dev mocha chai chai-http supertest fetch express
```

After all the dependencies are installed, the package.json file in the project folder should contain the following:
```
{
    "devDependencies": {
        "chai": "^4.3.0",
        "express": "^4.17.1",
        "mocha": "^8.3.0",
        "supertest": "^6.1.3"
}
```
<br>

### Converting Addresses Into Geographic Coordinates
The function that converts addresses to geo coordinates is located in `./geoCoordinates.js`. It works perfectly on its own, but I could not find a way to use in a test the latitude and longitude values acquired with it.

I used the [positionstack](https://positionstack.com/) forward geocoding API and a free API key they provide. In my code, I used the HTTP protocol instead of HTTPS because the latter is only available to paid users.

To run the function, type in Terminal:
```
$ node geoCoordinates.js
```
<br>

### Weather API Call With Further Response Assertions
The test code is located in `./test/test.spec.js`. All tests work, but I had to hardcode the values for latitude and longtitude.
I am also not sure I used the most optimal way to assert data types for an object.

To run the tests, type in terminal:
```
$ npm test
```
