const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'deleterole',
    description: 'deletes a role from the server',

    execute(msg, args, logs, blueLogs){

        let roleName = msg.mentions.roles.first();
        let roleNameID = roleName.id;

        const { guild } = msg;

        const role = guild.roles.cache.find((role) => {
             return role.id === roleNameID;
         });


        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions');
        }

        if(!role){
            if (config.embeds === true) {
                let embed = new Discord.MessageEmbed()
                    .setAuthor("That's not good...")
                    .setColor("#486dAA")
                    .setDescription("You didn't specify a role!")
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            }
        }

        role.delete()

        if (config.embeds === true) {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Yeet")
                .setColor("#486dAA")
                .setDescription(`The role ${role} was deleted`)
                .setFooter(config.footer)
            msg.channel.send(embed);
        }

        if (logs === true) {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Action | Role Deleted") 
                .setColor("#486dAA")
                .setDescription(`The role ${role} was deleted by ${msg.author}.`)
                .setFooter(config.footer)
            blueLogs.send(embed);
        } 
    }
}