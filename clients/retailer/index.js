'use strict';

const { productUpdate } = require('./handler');
const { socket } = require('../socket');

socket.on('PRODUCT_AVAILABLE', (product) => {

  let newProduct = productUpdate(product);
  socket.emit('PRODUCT_PURCHASED', newProduct);

  console.log('Retailer: product purchased');
});

socket.on('PRODUCT_DELIVERED', (product) => {

  socket.emit('PRODUCT_RESTOCKED', product);
});