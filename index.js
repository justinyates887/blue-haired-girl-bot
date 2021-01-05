require('dotenv').config(); //get token from env file
const Discord = require('discord.js'); //initialize discord library adn API's
const client = new Discord.Client(); //create instance of discord client
const config = require("./config.json"); //initialize config.json
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
});
    

    module.exports = {
        start: function () {
          console.log("Bot is starting... Please wait.");
          console.log("Bot is attempting to load commands. Please wait");
          const { promisify } = require("util");
          const { join, extname } = require("path");
          const { readdir, lstat } = require("fs");
          const readdirPromise = promisify(readdir);
          const lstatPromise = promisify(lstat);
          const COMMANDS_FOLDER_PATH = join(__dirname, "../commands");
      
          const readAllCommands = async (startPath = COMMANDS_FOLDER_PATH) => {
            const files = await readdirPromise(startPath);
            for (const f of files) {
              const path = join(startPath, f);
              if (extname(f) === ".js") {
                let props = require(path);
                // Commands
                if (config.debug_mode === true) { console.log(`Command: ${f} -> Loaded.`); }
                client.commands.set(props.help.name, props);
                // Aliases
                props.help.aliases.forEach(alias => {
                  client.aliases.set(alias, props.help.name);
                });
              } else {
                const stats = await lstatPromise(path);
                if (stats.isDirectory() && !stats.isSymbolicLink()) await readAllCommands(path);
              }
            }
          };
          readAllCommands().then(console.log("Launch: Commands Loaded."));

        }
    }
    // *******keep for testing**********

    // *******keep for testing**********

client
    .on('guildCreate', console.log)
    .on('guildDelete', console.log)

client.login(process.env.SECRET); //adds token so bot will initalize from .emv
