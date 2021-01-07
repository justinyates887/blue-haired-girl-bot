const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'removerole',
    description: 'takes role from specified user',

    async execute(msg, args, logs, blueLogs){
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        }

        let rMember = msg.mentions.users.first();
        let burn = args.shift();

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

        let roleName = args.join(' ');
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
            return role.name === roleName;
        })

        if (!role){
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Hmmmm...") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("I didn't find that role...\n (Hint: Dont @ the role)") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        }

        const member = guild.members.cache.get(rMember.id);
        member.roles.remove(role);

        if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Yikes") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription(`${member} now has lost the role ${role}.`) //main text body
                .setFooter(config.footer) //footer/watermark
            msg.channel.send(embed);
        }

        if (logs === true) {
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Action | Role Removed") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription(`${member} now has lost the role ${role}.`) //main text body
                .setFooter(config.footer) //footer/watermark
            blueLogs.send(embed);
        } 
    }
}