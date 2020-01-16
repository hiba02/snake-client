const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  console.log('Sucess!');
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    data = 'Move: up'
    conn.write(data);
  });

  conn.on('connect', () => {
    conn.write('Name: KYS');

    for (let i = 0; i < 10 ; i++) {
      setTimeout(() => {
        conn.write('Move: up');
      }, 50 * i)
    }
    
  });
  return conn;

}
module.exports = connect;
