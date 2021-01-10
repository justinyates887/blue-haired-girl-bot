require('dotenv').config()                  //get token from env file
const Discord = require('discord.js')       //initialize discord library adn API's
const client = new Discord.Client()         //create instance of discord client
const config = require("./config.json")     //initialize config.json
const path = require('path')
const fs = require('fs')                    //initialize fs (goes with discord.collection)
client.commands = new Discord.Collection(); //for client.command.get
const bot = '794674548875460649';           //bot Uid
let logs;


//This will read the directory of discord's commands and filter it through our file.
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

//for loop checks all command files for which file it needs
for(const file of commandFiles){
    const command = require(`./commands/${file}`); //gets name of file from for loops
    client.commands.set(command.name, command);
}

//log connection status and se tthe "Now playing" of the bot once activated and ready.
client.once('ready', async () => {

    //finds amount of servers bot is in
    const servers = client.guilds.cache.size;

    //logs to console bot online
    console.log(`Logged in as ${client.user.tag} (${client.user.id}) on ${servers} servers`);

    //sets game activity
    client.user.setActivity(`${config.prefix}help | ${servers} servers!`);
});

    //*****************************************This is where version update goes when new version/features/bug fixes are added**********************************************

    // **********************************************************************************************************************************************************************

//checks meesages to listen for command
client.on('message', (msg) => {

    //checks for log channel
    let blueLogs = msg.guild.channels.cache.find(c => c.name === ('blue-logs'));
    if (blueLogs){
        logs = true;
    }
    if (!blueLogs) {
        logs = false;
    }
    //if there is no message end the method
    if (msg.author.bot || !msg.content.startsWith(config.prefix)) return;
    
    //seperated the message into parts
    const args = msg.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
   
    //iterates through possible commands to see if any match, if so runs the filepath
    if (command === 'help'){
        client.commands.get('help').execute(msg); // done
    } else if(command === 'adminhelp'){
        client.commands.get('adminhelp').execute(msg);
    } else if(command === 'userhelp'){
        client.commands.get('userhelp').execute(msg);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(msg, args, logs, blueLogs); // done
    } else if (command === 'kick'){
        client.commands.get('kick').execute(msg, args, logs, blueLogs); // done
    } else if (command === 'purge'){
        client.commands.get('purge').execute(msg, args, logs, blueLogs); // done 
    } else if (command === 'nuke'){
        client.commands.get('nuke').execute(msg, bot, logs, blueLogs); // done
    } else if(command === 'channelcreate'){
        client.commands.get('channelcreate').execute(msg, args, logs, blueLogs);//done
    } else if (command === 'deletechannel'){
        client.commands.get('deletechannel').execute(msg, args, logs, blueLogs); // done
    } else if (command === 'mute'){
        client.commands.get('mute').execute(msg, args, logs, blueLogs); // done
    } else if (command === 'setup'){
        client.commands.get('setup').execute(msg, args, logs, blueLogs); // not worrying about just yet... currently commented out 
    } else if (command === 'invitebot'){
        client.commands.get('invitebot').execute(msg, logs, blueLogs); // done
    } else if (command === 'invitelink'){
        client.commands.get('invitelink').execute(msg); // done
    } else if (command === 'developers'){
        client.commands.get('developers').execute(msg); // done
    } else if (command === 'donate'){
        client.commands.get('donate').execute(msg); // done
    } else if (command === 'giverole'){
        client.commands.get('giverole').execute(msg, args, logs, blueLogs); // done
    } else if(command === 'removerole'){
        client.commands.get('removerole').execute(msg, args, logs, blueLogs); // done
    } else if(command === 'warn'){
        client.commands.get('warn').execute(msg, args, logs, blueLogs);// done
    } else if (command === 'addlogchannel'){
        client.commands.get('addlogchannel').execute(msg); //done
    } else if (command === 'announce'){
        client.commands.get('announce').execute(msg, args); //done
    } else if (command === 'createrole'){
        client.commands.get('createrole').execute(msg, args, logs, blueLogs); //done
    } else if (command === 'deleterole'){
        client.commands.get('deleterole').execute(msg, args, logs, blueLogs); //done
    } else if (command === 'makiozesmuscles'){
        client.commands.get('makiozesmuscles').execute(msg); //done
    } else if (command === 'startgiveaway'){
        client.commands.get('startgiveaway').execute(msg, args, logs, blueLogs); //done
    } else if(command === 'endgiveaway'){
        client.commands.get('endgiveaway').execute(msg, logs, blueLogs); //done
    } else if (command === 'meme'){
        client.commands.get('meme').execute(msg); //done
    } else if (command === 'aww'){
        client.commands.get('aww').execute(msg); //done
    } else if (command === 'wholesome'){
        client.commands.get('wholesome').execute(msg); //done
    } else if (command === 'hentai'){
        client.commands.get('hentai').execute(msg); //done
    }  else if (command === 'reddit'){
        client.commands.get('reddit').execute(msg, args); //done
    }
});

//Sends welcome message with info on invite
client.on("guildCreate", guild => {
    let found = 0;
    guild.channels.cache.map((channel) => {
        if (found === 0) {
          if (channel.type === "text") {
            if (channel.permissionsFor(client.user).has("VIEW_CHANNEL") === true) {
              if (channel.permissionsFor(client.user).has("SEND_MESSAGES") === true) {
                if (config.embeds === true) { 
                    let embed = new Discord.MessageEmbed()
                        .setAuthor("Hello!")
                        .setColor("#486dAA") 
                        .setDescription("Thank you for inviting me!\n\n We are still in production and have no database yet, so customization is limited. There are a few things you need to have for some functions to work properly.\n\nIf you have invited me as an admin, a channel called #blue-logs should have been created. This is our log channel. If it hasn't, please create it if you would llike logs!\n\nThe !mute command requires the role @MUTED\n\nTo see a full list of commands use !help\n\nTo follow production visit us at https://github.com/justinyates887/blue-haired-girl-bot \n\nTo report a bug please friend @erodias#9576 or join the Official Discord Channel: https://discord.gg/tb4mZWtXC8") //main text body
                        .setFooter(config.footer)
                         channel.send(embed);
                }
                found = 1;

                if(channel.permissionsFor(client.user).has("ADMINISTRATOR") === true){
                    guild.channels.create('blue-logs', {
                        type: 'text',
                        permissionOverwrites: [
                            {
                                id: guild.id,
                                allow: ['VIEW_CHANNEL'],
                            }]
                        })
                }
              }
            }
          }
        }
      })
  })

//sends message to log channel if logs are on
if(logs === true){
    client.on('guildMemberRemove',(member) => {
        client.channels.cache.find('blue-log').send(`**${member.username}** has just left server...`);
    })
}
//adds token so bot will initalize from .env
client.login(process.env.SECRET);
