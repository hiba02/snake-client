const net = require('net');
const  connect  = require('./client');
console.log('Connecting ...');
connect();
// ?? it did not work with ES6
// const { connect } = require('./client');