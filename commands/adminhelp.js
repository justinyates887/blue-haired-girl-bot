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
                .setDescription(`- **${config.prefix}help** gives list of commands\n\
                - **${config.prefix}kick** kicks selected user *[${config.prefix}<command> + <@user> + <reason (if any)>]*\n\
                - **${config.prefix}ban** bans selected user *[${config.prefix}<command> + <@user> + <reason (if any)>]*\n\
                - **${config.prefix}mute** mutes selected user *[${config.prefix}<command> + <@user> + <time (Eg.30m 1h...)>]*\n\
                - **${config.prefix}warn** warns selected user *[${config.prefix}<command> + <@user>]*\n\
                - **${config.prefix}purge** purges messages *[${config.prefix}<command> + <quantity to delete>]*\n\
                - **${config.prefix}nuke** deletes the channel and creates a replica **(this cannot be undone)**\n\
                - **${config.prefix}channelcreate** creates a channel *[${config.prefix}<command> + <channel type (voice/text)> + <channel name>]*\n\
                - **${config.prefix}channeldelete** deletes channel command is ran in\n- **${config.prefix}invitebot** send a bot invite link *[${config.prefix}<command>]*\n\
                - **${config.prefix}invitelink** send a link to the SmallBlue discord *[${config.prefix}<command>]*\n\
                - **${config.prefix}devlopers** shows you the sexy people who created this bot *[${config.prefix}<command>]*\n\
                - **${config.prefix}donate** If you would like to support us *[${config.prefix}<command>]*\n\
                - **${config.prefix}giverole** Gives you the stated role *[${config.prefix}<command> + <@user> + <role name>]*\n\
                - **${config.prefix}removerole** Removes the stated role *[${config.prefix}<command> + <@user> + <role name>]*\n\
                - **${config.prefix}addlogchannel** create a channel called blue-logs and enables logging from the bot on certain events\n\
                - **${config.prefix}announce** gives an @everyone announcement in target channel [${config.prefix}<command> + <target-channel> + <message>]\n\
                - **${config.prefix}createrole** creates a role [${config.prefix}<command> + <color (put any letter in here for default)> + <role name>]\n\
                - **${config.prefix}deleterole** deletes the specified role\n\
                - **${config.prefix}startgiveaway** starts a giveaway on the last message\n\
                - **${config.prefix}endgiveaway** ends a giveaway on the last message (note there must be no new messages in between the start and end)\n\
                - **${config.prefix}ticket** creates an open ticket channel and sends ticket to this channel (this is kept in admin commands to prevent spamming)`)
                .setFooter(config.footer) //footer/watermark
            msg.channel.send(embed);
        }
    }   
}