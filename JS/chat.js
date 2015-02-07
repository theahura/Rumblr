/*

LOCAL

This file details all of the code that allows users to enter into private chat rooms if both of them "swipe right to fight".
The code will use socket.io to facillitate realtime interaction through websockets. Look at websocket tutorial for chat rooms on socket.io website.

Functions needed (note: a lot of these will not be actual functions, but will be defined as socket.io events)

joinRoom() - used to allow two users (defined by their sockets) to connect to a private room running socket.io in chat_server; generates room key using
				combination of user names of both people who swipe right

receiveMessage() - used to grab whatever data users put into their chat box 

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

Maintain multiple chat options

*/

function sendMessage() {
	var message = $inputMessage.val(); 
	message = cleanInput(message); // "Prevent markup from being injected into the message" ??
	 if (message && connected) {
      $inputMessage.val(''); 
      addMessage({
        userName: userName,
        message: message,
        accountId: accountId,
      });
      socket.emit('clientToServer', message); // tells server to execute 'new message'
  }
}

//Next function will log users' chats
function logChat(message, options) { 
	var $el = $('<li>').addClass('log').text(message);
    addMessageElement($el, options);
}

// Adds the visual chat message to the message list
 function addMessage (data, options) {
    // Don't fade the message in if there is an 'X was typing'
    var $typingMessages = getTypingMessages(data);
    options = options || {};
    if ($typingMessages.length !== 0) {
      options.fade = false;
      $typingMessages.remove();
    }

/* This is additional functionality to dispay "User is typing"

Adds the visual chat typing message
  function addChatTyping (data) {
    data.typing = true;
    data.message = 'is typing';
    addChatMessage(data);
  }
 // Removes the visual chat typing message
  function updateTyping () {
    if (connected) {
      if (!typing) {
        typing = true;
        socket.emit('typing');
      }
      lastTypingTime = (new Date()).getTime();

      setTimeout(function () {
        var typingTimer = (new Date()).getTime();
        var timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
          socket.emit('stop typing');
          typing = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  }
// Gets the 'X is typing' messages of a user
  function getTypingMessages (data) {
    return $('.typing.message').filter(function (i) {
      return $(this).data('userName') === data.userName;
    });
  }

 */

// Socket events

 // Whenever the server emits 'new message', update the chat body
  socket.on('message', function (data) {
    updateChatMessages(data);
  });

















