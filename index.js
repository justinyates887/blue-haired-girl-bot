require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag} (${bot.user.id}) on ${bot.guilds.size} servers`);
    bot.user.setGame(`${config.prefix}help | ${bot.guilds.size} servers!`);
});

client.on('message', (msg) => {
    if (msg.author.bot || !msg.content.startsWith(config.prefix)) return;
    const args = msg.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
//ban command
    if (command === 'ban'){
        if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('you aren\'t an Admin!');
        const member = msg.mentions.members.first();
        if(!member) return msg.reply('Please mention the member you would like to ban!');
        msg.channel.send('Please enter a reason');
        const rsn = msg.content;
        member.ban({
            reason: rsn
        });
        //need to add reason functionality
    }
//kick command
    if (command === 'kick'){
        if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('you aren\'t an Admin!');
        const member = msg.mentions.members.first();
        if(!member) return msg.reply('Please mention the member you would like to ban!');
        member.kick;
    }
})

client
    .on('guildCreate', console.log)
    .on('guildDelete', console.log)

client.login(process.env.SECRET);

/*need constructors from UI. 
-how to let user adjust perms for different commands?
-how to let user set admin log channel?
-
*/