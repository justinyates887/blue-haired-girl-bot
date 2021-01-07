const ms = require('ms');
const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(msg, args, logs, blueLogs) {
        let muteReason; 
        const target = msg.mentions.users.first();
        if (target) {
 
            let mainRole = msg.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = msg.guild.roles.cache.find(role => role.name === 'MUTED');
 
            let memberTarget = msg.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                msg.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            msg.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));

            // Logs
        if (logs === true) {
            let banEmbed = new Discord.MessageEmbed()
                .setAuthor("Action | User banned")
                .setColor("#486dAA")
                .setDescription(config.userBanned
                    .replace(/{user}/g, target)
                    .replace(/{userID}/g, target.id)
                    .replace(/{staffMember}/g, msg.author)
                    .replace(/{reason}/g, muteReason))
                .setFooter(config.footer);
            blueLogs.send(banEmbed);
        } 
        } else {
            msg.channel.send('Cant find that member!');
        }
    }
}
 