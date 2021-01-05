const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'channelcreate',
    description: 'creates a channel, can target category',

    execute(msg, args){
        if(!args.shift()){
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Oops!") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("You need a channel type") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        } else if (args.shift()){
            const channelType = args.shift().toLowerCase();
        } else if (!msg.member.hasPermission('ADMINISTRATOR')) {
            msg.channel.send('missing permissions')
        } else if (channelType === 'text'){
            const channelName = args.join('-');
            if (!channelName){
                if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                    let embed = new Discord.MessageEmbed() //sets send card message
                        .setAuthor("Oops!") // Header of card
                        .setColor("#486dAA") //Side bar color
                        .setDescription("Channel name is incorrect, please type a valid channel name!") //main text body
                        .setFooter(config.footer) //footer/watermark
                    return msg.channel.send(embed);
                }
            }
            msg.guild.channels.create(channelName, {
                type: channelType,
                permissionOverwrites: [
                    {
                        id: msg.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    }]
                })
                if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                    let embed = new Discord.MessageEmbed() //sets send card message
                        .setAuthor("Channel Created") // Header of card
                        .setColor("#486dAA") //Side bar color
                        .setDescription(`Your channel **${channelName}** has been created`) //main text body
                        .setFooter(config.footer) //footer/watermark
                    return msg.channel.send(embed);
                }
        } else if(channelType === 'voice'){
            const channelName = args.join(' ');
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Oops!") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("Channel name is incorrect, please type a valid channel name!") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
            message.guild.channels.create(channelName, {
                type: channelType,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    }]
                })
                if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                    let embed = new Discord.MessageEmbed() //sets send card message
                        .setAuthor("Channel Created") // Header of card
                        .setColor("#486dAA") //Side bar color
                        .setDescription(`Your channel **${channelName}** has been created`) //main text body
                        .setFooter(config.footer) //footer/watermark
                    return msg.channel.send(embed);
                }
        } else {
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Uh Oh...") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription('We dont\'t know what went wrong...\n try checking your syntax: <!channel create> + <type> + <name>') //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        }
    }
}