const net = require('net');

//The "connect" event is triggered on a connection as soon as it is successfully established.
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  console.log('Sucess!');
  conn.setEncoding('utf8'); 
  // message from Sever
  conn.on('data', (data) => {
    console.log('Meessage: ', data);
  });
  // client sending message to server
  conn.on('connect', () => {
    conn.write('Name: KYS');
  });
  return conn;
}
module.exports = connect;
// console.log('Connecting ...');
// connect();