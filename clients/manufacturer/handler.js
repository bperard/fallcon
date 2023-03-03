'use strict';

const Chance = require('chance');
const chance = new Chance();

const createProduct = () => ({
  productId: chance.guid(),
  productName: chance.animal(),
});

module.exports = { createProduct };