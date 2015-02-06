/*

REMOTE

This file details all of the code necessary to grab incoming data from the rumblr client for each user, and passes that data onto the server_handler.

Functions: 

getDataFromUser() - get the data for a given request/command and pass that to the server_handler

sendDataToUser() - send data back to the user client, make sure that the data sent contains event titles and the like

*/

console.log("Hello");
//Type: io; sets up server connection on localhost, channel 3001
var  io = require('socket.io').listen(3001);

//  io.set('log level', 1);

//On an io socket connection...
io.sockets.on('connection', function(socket) 
{
	console.log("login");
	socket.emit("Hello", {
		Data: "Welcome to Rumblr"
	});
});
