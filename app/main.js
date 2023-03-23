const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");


const server = net.createServer((connection) => { //create a server and pass a callback function to handle connection
  // Handle connection
  connection.on("data", (data) => { //connection is a socket , on data event means when data is received
    //handle PING 
    if (data.toString() === "PING") {
        connection.write("PONG");
    }
  });   
});



server.listen(6379, "127.0.0.1");
