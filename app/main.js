const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");


const server = net.createServer((connection) => { //create a server and pass a callback function to handle connection
  // Handle connection
  //because js supports event loop, we can serve multiple clients at the same time (asynchronous)
    connection.on("data", () => {
        connection.write("+PONG\r\n");
    });
});



server.listen(6379, "127.0.0.1"); //listen on port 6379
