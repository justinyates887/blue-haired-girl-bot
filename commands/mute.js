const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");
const ms = require('ms');
const bot = '794674548875460649'; 
module.exports = {
    name: 'mute',
    description: 'mutes members',

    async execute(msg, args){
        const target = msg.mentions.users.first();
       
        if(target){
            let mainRole = msg.guild.roles.cache.find(role => role.name === 'Main role')
            let muteRole = msg.guild.roles.cache.find(role => role.name === 'MUTED')

            let memberTarget = msg.guild.members.cache.get(target.id);

            if (!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                msg.channel.send(`<@${memberTarget.user.id}> has been muted`)
                return
            }

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            msg.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            if(logChannel){
                logChannel.send(logMessage)
            }

            setTimeout(function (){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
            }, ms(args[1]));
        } else{
            msg.channel.send('Cannot find that member!');
        }
    }
}