
const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting......')
const result = connect();
setupInput(result);
// do I call setupInput on the connect object?
// module.exports = { connect };

// const setupInput = function (){
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
  
  
//   return stdin;
// }

// const handleUserInput = function (input){
//   if (input === '\u0003') {
//     process.exit();
//   }
// }
// const stdin = setupInput();

// stdin.on('data', handleUserInput);
/**
 * Establishes connection with the game server
 */
// const connect = function () {

//   const conn = net.createConnection ({
//     host:'192.168.0.103',
//     port: 50541
//   });


// // interpret incoming data as text
// conn.setEncoding('utf8');

// conn.on('data', (data) => {
//   console.log('Server says ', data);
// });

// return conn;
// }

// console.log('Connecting......')
// connect();

