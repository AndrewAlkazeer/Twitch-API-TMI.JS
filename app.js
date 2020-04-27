require('dotenv').config();
/*
var ComfyJS = require("comfy.js");
ComfyJS.onChat = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    ComfyJS.Say( "replying to !test" );
  }
}
ComfyJS.Init( process.env.TWITCH_USERNAME, process.env.TWITCH_AUTH_CLIENT );
*/


const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.TWITCH_USERNAME,
		password: process.env.TWITCH_AUTH_CLIENT
	},
	channels: [ 'Arab' ]
});
client.connect();
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === 'hello') {
		client.say(channel, `@${tags.username}, heya!`);
  }
  if(message.toLowerCase() === 'are you a bot?') {
		client.say(channel, `@${tags.username}, Yes Sir!`);
  }
  if(message.toLowerCase() === 'who is your owner?') {
		client.say(channel, `@${tags.username}, NortoNNN is my owner`);
  }
  if(message.toLowerCase() === '!eyebrows') {
		client.say(channel, `@${tags.username}, Yes, he shaved his eyebrows lol`);
	}
});

/*
document.addEventListener('DOMContentLoaded', ()=>{
  var ul = document.getElementById('messages-ul');
 var messages = [];
  console.log('connected to app.js file');

  ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    console.log(user, message);
    updateMessages(`${user}- ${message}`);
  }
  ComfyJS.Init('SypherPK');


  updateMessages = (msg) =>{
    messages.push(msg);
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = msg;
    if(messages.length > 15){
      messages.shift();
      const messageToDelete = ul.firstChild;
      ul.removeChild(messageToDelete);
    }
  }
});
*/