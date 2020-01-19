const net = require('net');
const { setupInput } = require('./input_test');
const { IP, PORT } = require('./constants');
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  console.log('Sucess!');
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    conn.write('Name: KYS');
    setupInput(conn);
  });
  return conn;
};
module.exports = { connect };

