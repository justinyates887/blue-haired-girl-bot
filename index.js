require('dotenv').config(); //get token from env file
const Discord = require('discord.js'); //initialize discord library adn API's
const client = new Discord.Client(); //create instance of discord client
const config = require("./json/config.json"); //initialize config.json
const fs = require('fs'); //initialize fs (goes with discord.collection)
client.commands = new Discord.Collection(); //for client.command.get

//This will read the directory of discord's commands and filter it through our file.
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    //for loop checks all command files for which file it needs
for(const file of commandFiles){
    const command = require(`./commands/${file}`); //gets name of file from for loops
    client.commands.set(command.name, command);
}

//
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag} (${client.user.id}) on ${client.guilds.size} servers`);
    client.user.setGame(`${config.prefix}help | ${client.guilds.size} servers!`);
});

client.on('message', (msg) => {
    if (msg.author.bot || !msg.content.startsWith(config.prefix)) return;
    const args = msg.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
   
    if (command === 'clear'){
        client.commands.get('clear').execute(msg, args);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(msg, args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(msg, args);
    }

    // *******keep for testing**********
    console.log(args);
    console.log(command);
    // *******keep for testing**********

});

client
    .on('guildCreate', console.log)
    .on('guildDelete', console.log)

client.login(process.env.SECRET); //adds token so bot will initalize from .emv
