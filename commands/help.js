const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'this accesses the commands list',

    execute(msg, args){
        if(config.embeds === true){
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Command List") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription("- **!help** gives list of commands\n- **!kick** kicks selected user *[!<command> + <@user> + <reason (if any)>]*\n- **!ban** bans selected user *[!<command> + <@user> + <reason (if any)>]*\n- **!mute** mutes selected user *[!<command> + <@user> + <time (Eg.30m 1h...)>]*\n- **!warn** warns selected user *[!<command> + <@user>]*\n- **!purge** purges messages *[!<command> + <quantity to delete>]*\n- **!nuke** deletes the channel and creates a replica **(this cannot be undone)**\n- **!channelcreate** creates a channel *[!<command> + <channel type (voice/text)> + <channel name>]*\n- **!channeldelete** deletes channel command is ran in\n- **!invitebot** send a bot invite link *[!<command>]*\n- **!invitelink** send a link to the SmallBlue discord *[!<command>]*\n- **!devlopers** shows you the sexy people who created this bot *[!<command>]*\n- **!donate** If you would like to support us *[!<command>]*\n- **!giverole** Gives you the stated role *[!<command> + <@user> + <role name>]*\n- **!removerole** Removes the stated role *[!<command> + <@user> + <role name>]*\n -**!addlogchannel** create a channel called blue-logs and enables logging from the bot on certain events") //main text body
                .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
        }
    }
}