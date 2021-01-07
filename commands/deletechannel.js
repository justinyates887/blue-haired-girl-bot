const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'deletechannel',
    description: 'deletes the channel specified by the user',

    async execute(msg, args, logs, blueLogs){
        
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        } else{
            //ask if they're sure
            let filter = m => m.author.id === msg.author.id;

            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Bye-bye") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("Are you sure you want to do this?\n\n**THIS CAN'T BE UNDONE**\n**(YES/NO)**") //main text body
                    .setFooter(config.footer) //footer/watermark
                    msg.channel.send(embed);
            }

            msg.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
            })
            .then(msg => {
                msg = msg.first();
                if(msg.content.toUpperCase() === 'YES') {    
                    msg.channel.delete();
                } else if (msg.content.toUpperCase() === 'NO'){
                    if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                        let embed = new Discord.MessageEmbed() //sets send card message
                            .setAuthor("Aborted") // Header of card
                            .setColor("#486dAA") //Side bar color
                            .setDescription("This cahnnel is safe... for now.") //main text body
                            .setFooter(config.footer) //footer/watermark
                         return msg.channel.send(embed);
                    }
                }
            })  
        }

        if (logs === true) {
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Action | Channel Deleted") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription("A channel was deleted.") //main text body
                .setFooter(config.footer) //footer/watermark
            return blueLogs.send(embed);
        } 
    }
}
