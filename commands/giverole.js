const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'giverole',
    description: 'gives role to specified user',

    async execute(msg, args, logs, blueLogs){
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        }

        let rMember = msg.mentions.users.first();
        let rMemberID = rMember.id;

        if (!rMember){
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Hmmmm...") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("Did you mention a user?") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        }

        let roleName = msg.mentions.roles.first();
        let roleNameID = roleName.id;

        if (!roleName){
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Hmmmm...") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("Did you specify a role?") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        }

        const { guild } = msg;

        const role = guild.roles.cache.find((role) => {
             return role.id === roleNameID;
         })

        const member = guild.members.cache.find((member) => {
            return member.id === rMemberID;
        });

        member.roles.add(role);

        if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Huzzah!") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription(`${member} now has the role ${role}.`) //main text body
                .setFooter(config.footer) //footer/watermark
             msg.channel.send(embed);
        } else {
           return msg.channel.send('The bot cannot give this role')
        }

        if (logs === true) {
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Action | Role Given") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription(`${member} was given role ${role} by ${msg.author}.`) //main text body
                .setFooter(config.footer) //footer/watermark
            return blueLogs.send(embed);
        } 
    }
}
//unfinished