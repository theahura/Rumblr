/*

LOCAL

This file details all of the code that allows users to enter into private chat rooms if both of them "swipe right to fight".
The code will use socket.io to facillitate realtime interaction through websockets. Look at websocket tutorial for chat rooms on socket.io website.

Functions needed (note: a lot of these will not be actual functions, but will be defined as socket.io events)

joinRoom() - used to allow two users (defined by their sockets) to connect to a private room running socket.io in chat_server; generates room key using
				combination of user names of both people who swipe right

getMessage() - used to grab whatever data users put into their chat box 

sendMessage(text) - used to send whatever data users put into their chat box to the global chat thing

leaveChat() - used to close the connection to socket.io, and then take the user back to the home page

-----------------

getServerMessage(text) - used to get whatever data the other user sends to the server, back to this client

printServerMessage(text) - prints the data recieved from getServerMessage to the chat message chain

chatClosed() - prints message that other user has disconnected from chat, closes text box and removes user from websocket room


HTML needed: 

Textbox - something to enter messages to

Leave button - self explanatory

Chat div - where all messages are pushed to

	List with two classes, one for messages from user A, and one for messages from user B, with varying float positions

*/