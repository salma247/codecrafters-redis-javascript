const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");


const server = net.createServer((connection) => { //create a server and pass a callback function to handle connection
  // Handle connection
  connection.on("data", (data) => { //connection is a socket , on data event means when data is received
    //handle multiple ping pong
    const message = data.toString(); //convert data to string
    const messageArray = message.split("\n"); //split the string into an array
    messageArray.forEach((message) => { //loop through the array
        if (message === "ping") { //if the message is ping
            connection.write("+PONG\r\n"); //write pong
        }
    });

  });   
});



server.listen(6379, "127.0.0.1");
