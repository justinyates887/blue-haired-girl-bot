const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'warn',
    description: 'sends a warning to user',

    execute(msg, args, logs, blueLogs){
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        }

        const target = msg.mentions.users.first();
        let burn = args.shift();
        let warnReason = args.join(' ');

        if (!warnReason) {
            // Sets the Var reason to this:
            warnReason = "No reason provided";
        }

        if (!target) {
            if (config.embeds === true) { //Checks if the embed option is true
                // Creates and sends this embed
                let embed = new Discord.MessageEmbed()
                    .setAuthor("Error!")
                    .setColor("#486dAA")
                    .setDescription("No user specified")
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            }
        }

        if (target === msg.author.id){  // checks to see if the target is the msg author 
            if (config.embeds === true) { //Checks if the embed option is true
                // Creates and sends this embed
                let embed = new Discord.MessageEmbed()
                    .setAuthor("Error!")
                    .setColor("#486dAA")
                    .setDescription("You cannot ban yourself")
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            }
        }

        if (target && warnReason){
            if (config.embeds === true) { //Checks if the embed option is true
                // Creates and sends this embed
                let embed = new Discord.MessageEmbed()
                    .setAuthor("Did you just assume my gender?")
                    .setColor("#486dAA")
                    .setDescription(`${target} you have been warned: ${warnReason}`)
                    .setFooter(config.footer)
                msg.channel.send(embed);
            }
        }

        if (logs === true) {
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Action | Role Removed") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription(`${target} now has been warned for ${warnReason} by ${msg.author}.`) //main text body
                .setFooter(config.footer) //footer/watermark
            blueLogs.send(embed);
        }    
    }
}
