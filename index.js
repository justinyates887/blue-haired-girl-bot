require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag} (${client.user.id}) on ${client.guilds.size} servers`);
    bot.user.setGame(`${config.prefix}help | ${client.guilds.size} servers!`);
});

client.on('message', (msg) => {
    if (msg.author.bot || !msg.content.startsWith(config.prefix)) return;
    const args = msg.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
   
    if(command === 'clear'){
        client.commands.get('clear').execute(msg, args);
    } else if(command === 'ban'){
        client.command.get('ban').execute(msg, args);
    } else if(command === 'kick'){
        client.command.get('kick').execute(msg, args);
    }

    // *******keep for testing**********
    console.log(args);
    console.log(command);
    
// // ban command
//     if (command === 'ban'){
//         if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('you aren\'t an Admin!');
//         const member = msg.mentions.members.first();
//         if(!member) return msg.reply('please mention the member you would like to ban!');
//         member.ban({
//             reason: args(1)
//         });
//         msg.channel.send(`${member} banned sucsesfully!`);
//         //need to add reason functionality
//     }
// // kick command
//     if (command === 'kick'){
//         if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('you aren\'t an Admin!');
//         const member = msg.mentions.members.first();
//         if(!member) return msg.reply('please mention the member you would like to ban!');
//         member.kick;
//     }

});
//mute command

client
    .on('guildCreate', console.log)
    .on('guildDelete', console.log)

client.login(process.env.SECRET);

/*need constructors from UI. 
-how to let user adjust perms for different commands?
-how to let user set admin log channel?
-
*/