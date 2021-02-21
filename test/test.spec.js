const express = require('express');
const request = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const urlWeather = 'https://api.darksky.net/forecast';
const accessKeyWeather = '67d6aac020fb58bdbd635673bac38b2f';

// The below values are hardcoded because I could not find a way to pass them from a function.
// See comments in ./geoCoordinates.js
const lat = 40.757976
const lon = -73.979414

describe('Darksky endpoint call', () => {
  it('Status code is 200', (done) => {
    chai.request(urlWeather + '/' + accessKeyWeather)
      .get('/' + lat + ',' + lon)
      .end((err, res) => {
        expect(res).to.have.status(200)
        if (err) return done(err)
        else done();
      });
  });
  it('Latitude value is correct', (done) => {
    chai.request(urlWeather + '/' + accessKeyWeather)
      .get('/' + lat + ',' + lon)
      .end((err, res) => {
        expect(res.body.latitude).to.equal(lat)
        if (err) return done(err)
        else done();
      });
  });
  it('Longitude value is correct', (done) => {
    chai.request(urlWeather + '/' + accessKeyWeather)
      .get('/' + lat + ',' + lon)
      .end((err, res) => {
        expect(res.body.longitude).to.equal(lon)
        if (err) return done(err)
        else done();
      });
  });
  it('Data types for currently object property is valid', (done) => {
    chai.request(urlWeather + '/' + accessKeyWeather)
      .get('/' + lat + ',' + lon)
      .end((err, res) => {
        // Postman offers a built-in json schema assertion called Tiny Validator,
        // but I could not find similar tools for mocha/chai.
        // Therefore, I am simply asserting every value individually.
        expect(res.body.currently.time).to.be.a('number')
        expect(res.body.currently.summary).to.be.a('string')
        expect(res.body.currently.icon).to.be.a('string')
        expect(res.body.currently.nearestStormDistance).to.be.a('number')
        expect(res.body.currently.nearestStormBearing).to.be.a('number')
        expect(res.body.currently.precipIntensity).to.be.a('number')
        expect(res.body.currently.precipProbability).to.be.a('number')
        expect(res.body.currently.temperature).to.be.a('number')
        expect(res.body.currently.apparentTemperature).to.be.a('number')
        expect(res.body.currently.dewPoint).to.be.a('number')
        expect(res.body.currently.humidity).to.be.a('number')
        expect(res.body.currently.pressure).to.be.a('number')
        expect(res.body.currently.windSpeed).to.be.a('number')
        expect(res.body.currently.windGust).to.be.a('number')
        expect(res.body.currently.windBearing).to.be.a('number')
        expect(res.body.currently.cloudCover).to.be.a('number')
        expect(res.body.currently.uvIndex).to.be.a('number')
        expect(res.body.currently.visibility).to.be.a('number')
        expect(res.body.currently.ozone).to.be.a('number')
        if (err) return done(err)
        else done();
      });
  });
});