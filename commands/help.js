const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'this accesses the commands list',

    execute(msg){
        if(config.embeds === true){
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Help") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription("- **!adminhelp** for list of admin commands\n- **!userhelp** for list of user commands") //main text body
                .setFooter(config.footer) //footer/watermark
            msg.channel.send(embed);
        }
    }
}