'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const Queue = require('./lib/queue');

const server = new Server();
const PORT = process.env.PORT || 3002;
server.listen(PORT);


// CREATE INVENTORY QUEUES
const supplyQueue = new Queue();
const shippingQueue = new Queue();
const retailStockQueue = new Queue();


// SOCKET.IO SINGLETON
const fallcon = server.of('/fallcon');

fallcon.on('connection', (socket) => {
  console.log(`New user connected with ${socket.id}.`);


  socket.on('PRODUCT_AVAILABLE', (product) => {
    supplyQueue.store(product);

    socket.broadcast.emit('PRODUCT_AVAILABLE', product);
  });


  socket.on('REQUEST_DELIVERY', (product) => {
    socket.broadcast.emit('REQUEST_DELIVERY', product);
  });

  
  // CONSOLE LOGS EACH SOCKET EVENT, DATE, & ATTACHED INFO
  socket.onAny((event, attachedEventInfo) => {
    const eventNotification = {
      event: `${event.toLowerCase()}`,
      time: Date(),
      attachedEventInfo,
    };
    console.log('EVENT', eventNotification);
  });

});