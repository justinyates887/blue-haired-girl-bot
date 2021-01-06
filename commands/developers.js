const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'developers',
    description: 'gives info on the developers',

    execute(msg){
        if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("SmallBlue Development") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription("**Azrael:**\n https://github.com/Azrael747\n\n**Justin**\nhttps://github.com/justinyates887\n\n**SmallBlue Website**\nhttps://www.smallbluedev.com\n\n**SmallBlue Discord**\nhttps://discord.gg/SGEuPf7kVY\n") //main text body
                .setFooter(config.footer) //footer/watermark
            return msg.channel.send(embed);
        }
    }
}