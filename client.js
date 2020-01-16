const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  console.log('Sucess!');
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = connect;
