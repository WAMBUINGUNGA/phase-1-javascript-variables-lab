// index.js

const companyName = 'Scuber';
let mostProfitableNeighborhood = 'Chelsea';
let companyCeo = 'Susan Smith';
// Importing helpers.js file
const helpers = require('./helpers');

// Importing necessary modules
const fs = require('fs');
const path = require('path');

// Reading the content of index.js file
const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

// Describe block for index.js
describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
      expect(helpers.companyName).to.equal('Scuber');
    });

    it('is defined as a const', function () {
      expect(js).to.match(/const companyName/, "Expected companyName to be a const");
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(helpers.mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('is defined using let', function () {
      expect(js).to.match(/let mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood to be defined using let");
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(helpers.companyCeo).to.equal('Susan Smith');
    });

    it('is defined using let', function () {
      expect(js).to.match(/let companyCeo/, "Expected companyCeo to be defined using let");
    });
  });
});