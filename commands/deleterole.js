const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'deleterole',
    description: 'deletes a role from the server',

    execute(msg, args, logs, blueLogs){
        let roleName = args.join(' ');
        let roleNameFind = msg.guild.roles.cache.find(r => r.name == roleName);

        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions');
        }

        if(!roleName){
            if (config.embeds === true) {
                let embed = new Discord.MessageEmbed()
                    .setAuthor("That's not good...")
                    .setColor("#486dAA")
                    .setDescription("You didn't specify a role!")
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            }
        } else if(!roleNameFind){
            if (config.embeds === true) {
                let embed = new Discord.MessageEmbed()
                    .setAuthor("That's not good...")
                    .setColor("#486dAA")
                    .setDescription("I couldn't find a role under that name")
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            }
        }

        roleNameFind.delete()

        if (config.embeds === true) {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Yeet")
                .setColor("#486dAA")
                .setDescription(`The role ${roleNameFind} was deleted`)
                .setFooter(config.footer)
            msg.channel.send(embed);
        }

        if (logs === true) {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Action | Role Deleted") 
                .setColor("#486dAA")
                .setDescription(`The role ${roleNameFind} was deleted.`)
                .setFooter(config.footer)
            blueLogs.send(embed);
        } 
    }
}