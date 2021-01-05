const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'deletechannel',
    description: 'deletes the channel specified by the user',

    execute(msg, args){
        const fetchedChannel = msg.guild.channels.cache.get(args);
        
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        }
        
        if(!fetchedChannel){
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Uh-oh....") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("Please specify the channel you wish to delete") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        } else{
            fetchedChannel.delete();

            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Woosh") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription(`The channel ${fetchedChannel} has ceased to exist.`) //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        }

    }
}

//needs async