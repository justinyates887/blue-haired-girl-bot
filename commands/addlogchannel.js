const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'addlogchannel',
    description: 'adds a log channel for this bot',

    execute(msg){
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        }

        let alreadyExists = msg.guild.channels.cache.find(c => c.name === ('blue-logs'));

        if(alreadyExists){
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Twinning!") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("The log channel already exists :)") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        }

        if(!alreadyExists){
            msg.guild.channels.create('blue-logs', {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: msg.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    }]
                })
        }
    }
}