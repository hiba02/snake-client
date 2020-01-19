const handleUserInput = function(key, connection) {
  connection.setEncoding('utf8');
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'e') {
    connection.on('connect', () => {
      connection.write('nana');
    });
  }
  if (key === 'q') {
    let str = 'kys';
    connection.write(str);
  }
};


const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', function(key) {
    handleUserInput(key, conn);
  });
  return stdin;
};

module.exports = { setupInput };