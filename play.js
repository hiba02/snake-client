const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // conn.on('connect', (data) => {
  //   console.log('Message: ', data)
  //   //conn.write('Hello from client!');
  // }); 
  // ==> Above is not working! 'connet' is not working. 
  conn.on('data', (data) => {
    console.log('Meessage: ', data);
  });
  return conn;
}

console.log('Connecting ...');
connect();