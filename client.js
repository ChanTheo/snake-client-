const net = require('net'); 
const connect = function () {

  const conn = net.createConnection ({
    host:'192.168.0.103',
    port: 50541
  });


// interpret incoming data as text
conn.setEncoding('utf8');

conn.on('connect', () => {
  console.log('You are now connected Successfully');
});

conn.on('connect', () => {
  conn.write('Name: THO');
});

conn.on('data', (data) => {
  console.log('Server says ', data);
});



return conn;
}

module.exports = { connect } ;