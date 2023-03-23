const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");


const server = net.createServer((connection) => { //create a server and pass a callback function to handle connection
  // Handle connection
  connection.on("data", (data) => { //connection is a socket , on data event means when data is received
    //handle Multiple PINGs
    const dataString = data.toString(); //convert data to string
    const dataStringArray = dataString.split("\r"); //split the string by \r
    dataStringArray.forEach((dataString) => { //loop through the array
        if (dataString === "PING") { //if the string is PING
            connection.write("PONG\r"); //write PONG
        }
    });
  });
});



server.listen(6379, "127.0.0.1");
