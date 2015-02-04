/*

REMOTE

This file details all of the code that allows users to enter into private chat rooms on the server side if both of them "swipe right to fight".
The code will use socket.io to facillitate realtime interaction through websockets.

Functions (note: a lot of these will not be actual functions, but will be defined as socket.io events)


joinRoom(socket, room) - actually puts the people in the room

receiveMessage(data) - gets the message from the user

pushMessage(data) - pushes the message from user to everyone in room

removeUser(socket, room) - removes user from room 

*/