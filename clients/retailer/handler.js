'use strict';

const Chance = require('chance');
const chance = new Chance();  

const productUpdate = (product) => ({
  ...product,
  company: chance.company(),
  address: chance.address(),
  price: chance.dollar(),
  country: chance.country(),
});

module.exports = {productUpdate};  