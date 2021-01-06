require('dotenv').config();                 //get token from env file
const Discord = require('discord.js');      //initialize discord library adn API's
const client = new Discord.Client();        //create instance of discord client
const config = require("./config.json");    //initialize config.json
const fs = require('fs');                   //initialize fs (goes with discord.collection)
client.commands = new Discord.Collection(); //for client.command.get
const bot = '794674548875460649';           //bot Uid

//This will read the directory of discord's commands and filter it through our file.
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

//for loop checks all command files for which file it needs
for(const file of commandFiles){
    const command = require(`./commands/${file}`); //gets name of file from for loops
    client.commands.set(command.name, command);
}

//log connection status and se tthe "Now playing" of the bot once activated and ready.
client.once('ready', async () => {
    const servers = client.guilds.cache.size;
    console.log(`Logged in as ${client.user.tag} (${client.user.id}) on ${servers} servers`);
    client.user.setActivity(`${config.prefix}help | ${servers} servers!`);
});

//checks meesages to listen for command
client.on('message', (msg) => {
    //if there is no message end the method
    if (msg.author.bot || !msg.content.startsWith(config.prefix)) return;

    //seperated the message into parts
    const args = msg.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
   
    //iterates through possible commands to see if any match, if so runs the filepath
    if (command === 'help'){
        client.commands.get('help').execute(msg);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(msg, args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(msg, args);
    } else if (command === 'purge'){
        client.commands.get('purge').execute(msg, args);
    } else if (command === 'nuke'){
        client.commands.get('nuke').execute(msg, bot);
    } else if(command === 'channelcreate'){
        client.commands.get('channelcreate').execute(msg, args);
    } else if (command === 'deletechannel'){
        client.commands.get('deletechannel').execute(msg, args);
    } else if (command === 'invitebot'){
        client.commands.get('invitebot').execute(msg);
    } else if (command === 'invitelink'){
        client.commands.get('invitelink').execute(msg);
    } else if (command === 'developers'){
        client.commands.get('developers').execute(msg);
    } else if (command === 'donate'){
        client.commands.get('donate').execute(msg);
    } else if (command === 'giverole'){
        client.commands.get('giverole').execute(msg, args);
    }

});
client
    .on('guildCreate', console.log)
    .on('guildDelete', console.log)

//adds token so bot will initalize from .emv
client.login(process.env.SECRET)