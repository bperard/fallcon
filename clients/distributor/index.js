'use strict';

// const handler = require('./handler');
const { socket } = require('../socket');


socket.on('REQUEST_DELIVERY', (product) => {
  socket.emit('PRODUCT_PICKED_UP', product);

  console.log('Distributor: Product picked');
  setTimeout(() => {
    socket.emit('PRODUCT_DELIVERED', product);
    console.log(`Distributor: ${product.productName} was delivered to the retailer.`);
  }, 2000);
});

