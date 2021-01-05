const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'nuke',
    description: 'this will delete a channel and create an identical one',

    execute(msg, args){
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            msg.channel.send('missing permissions')
        } else {
 /*           
            //ask if they're sure
            let filter = m => m.author.id === messgae.author.id

            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Boom") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("Are you sure you want to do this?\n\n**THIS CAN'T BE UNDONE**\n**(YES/NO)") //main text body
                    .setFooter(embeds) //footer/watermark
                return msg.channel.send(embed);
            }
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
            })
            .then(msg => {
                msg = message.first()
                if(msg.content.toUpperCase() === 'yes') { **********add code below here***************
            })
  */          
            msg.channel.clone().then(channel => {
            channel.setPosition(msg.channel.position)
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Boom") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("Don't feed the YaoGui...") //main text body
                    .setFooter(embeds) //footer/watermark
                return msg.channel.send(embed);
                }
            })
            msg.channel.delete()
        }
    }
}

//need to add confirmation before nuking to make sure they're not dumb