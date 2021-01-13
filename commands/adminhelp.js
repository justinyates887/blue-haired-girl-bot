const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'adminhelp',
    description: 'gives admin help',

    execute(msg){
        if(config.embeds === true){
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Admin Commands") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription("- **b!help** gives list of commands\n- **b!kick** kicks selected user *[b!<command> + <@user> + <reason (if any)>]*\n- **b!ban** bans selected user *[b!<command> + <@user> + <reason (if any)>]*\n- **b!mute** mutes selected user *[b!<command> + <@user> + <time (Eg.30m 1h...)>]*\n- **b!warn** warns selected user *[b!<command> + <@user>]*\n- **b!purge** purges messages *[b!<command> + <quantity to delete>]*\n- **b!nuke** deletes the channel and creates a replica **(this cannot be undone)**\n- **b!channelcreate** creates a channel *[b!<command> + <channel type (voice/text)> + <channel name>]*\n- **b!channeldelete** deletes channel command is ran in\n- **b!invitebot** send a bot invite link *[b!<command>]*\n- **b!invitelink** send a link to the SmallBlue discord *[b!<command>]*\n- **b!devlopers** shows you the sexy people who created this bot *[b!<command>]*\n- **b!donate** If you would like to support us *[b!<command>]*\n- **b!giverole** Gives you the stated role *[b!<command> + <@user> + <role name>]*\n- **b!removerole** Removes the stated role *[b!<command> + <@user> + <role name>]*\n - **b!addlogchannel** create a channel called blue-logs and enables logging from the bot on certain events\n- **b!announce** gives an @everyone announcement in target channel [b!<command> + <target-channel> + <message>]\n- **b!createrole** creates a role [b!<command> + <color (put any letter in here for default)> + <role name>]\n- **b!deleterole** deletes the specified role") //main text body
                .setFooter(config.footer) //footer/watermark
            msg.channel.send(embed);
        }
    }   
}