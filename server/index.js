'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const Queue = require('./lib/queue');

const server = new Server();
const PORT = process.env.PORT || 3002;
server.listen(PORT);

// create queue(s)

// SOCKET.IO SINGLETON
const fallcon = server.of('/fallcon');

fallcon.on('connection', (socket) => {
  console.log(`New user connected with ${socket.id}.`);



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