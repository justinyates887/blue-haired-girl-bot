const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'userhelp',
    description: 'this accesses the commands list',

    execute(msg){
        if(config.embeds === true){
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Fun Commands") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription("- **!meme** sneds a meme from r/memes\n-**!aww** sends a meme from r/aww\n-**!wholesome** sends a meme from r/wholesome\n-**!hentai** well...you know uwu") //main text body
                .setFooter(config.footer) //footer/watermark
            msg.channel.send(embed);
        }
    }
}