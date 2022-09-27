const { IP, PORT } = require('./constants');


const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (message) => {

    console.log("Server says:" + message);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: kat");
    
  });

  return conn;
};
module.exports = {
  connect

};