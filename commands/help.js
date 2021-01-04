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
                .setDescription("- **!help** gives list of commands\n- **!kick** kicks selected user *[!<command> + <@user> + <reason (if any)>]*\n- **!ban** bans selected user *[!<command> + <@user> + <reason (if any)>]*\n- **!purge** purges messages *[!<command> + <quantity to delete>]*\n- **!nuke** deletes the channel and creates a replica **(this cannot be undone)**\n") //main text body
                .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
        }
    }
}