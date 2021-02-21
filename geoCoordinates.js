const fetch = require('node-fetch');

const urlGeo = 'http://api.positionstack.com/v1/forward';
const accessKeyGeo = '7b633d12de545779dc5f3d1fef2a816f';
const address = '10 Rockefeller Plaza, New York, NY';
const urlWeather = 'https://api.darksky.net/forecast';
const accessKeyWeather = '67d6aac020fb58bdbd635673bac38b2f';

const geoData = () => {
    fetch(urlGeo + '?access_key=' + accessKeyGeo + '&query=' + address)
      .then(res => res.json())
      .then(json => {
          const lat = json.data[0].latitude
          const lon = json.data[0].longitude
          console.log(lat)
          console.log(lon)
    })
  };

  geoData();