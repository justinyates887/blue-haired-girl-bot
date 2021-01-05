const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'mute',
    description: 'mutes members',

    async execute(msg, args){

        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        }

        if (!msg.guild.member(message.mentions.users.first()) || msg.guild.members.get(args[0])){
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Nope") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("No target found please @ the target your trying to mute") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        }


    }
}