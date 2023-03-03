'use strict';

const { createProduct } = require('./handler');
const { socket } = require('../socket');



setInterval (() => {
  console.log('Another production cycle begins...');
  const product = createProduct();
  socket.emit('PRODUCT_AVAILABLE', product);
}, 5000);

socket.on('PRODUCT_PURCHASED', (product) => {
  socket.emit('REQUEST_DELIVERY', product);
});