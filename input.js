let connection;
const { connect } = require('./play')

const setupInput = function (conn){
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  
  return stdin;
}

const handleUserInput = function (input){
 
  if (input === '\u0003') {
    process.exit();
  }
  if (input == 'w'){
    connection.write("Move: up")
  }
  if (input == 'a'){
    connection.write("Move: left")
  }
  if (input == 's'){
    connection.write('Move: down')
  }
  if (input == 'd'){
    connection.write('Move: right')
  }
  if (input == 'p'){
    connection.write('Say: I win')
  }
  if (input == 'l'){
    connection.write('Say: you lose')
  }


}
const stdin = setupInput();

// stdin.on('data', handleUserInput);

module.exports = { setupInput };

