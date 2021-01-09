const config = require("../config.json"); //initialize config.json
const commando = require('discord.js-commando')
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'startgiveaway',
    description: 'starts a giveaway with a reaction role',

    async execute(msg, args){
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        }

        msg.delete().then(() => {
            const { guild, channel } = msg;

            channel.messages.fetch({ limit: 1 }).then((messages) => {
                msg = messages.first();

                if(!message) {
                    if (config.embeds === true) {
                        let embed = new Discord.MessageEmbed()
                            .setAuthor("Oops")
                            .setColor("#486dAA")
                            .setDescription("There isn;t a message to start a giveaway on")
                            .setFooter(config.footer)
                        return msg.channel.send(embed);
                    }
                }

                //finds custom emojis
                if(args.includes(':')) {
                    const split = args.split(':');
                    const emojiName = split[1];

                    args = guild.emojis.chache.find((emoji) => {
                        return emoji.name === emojiName;
                    })
                }

                msg.react(args);

                if(!args) {
                    if (config.embeds === true) {
                        let embed = new Discord.MessageEmbed()
                            .setAuthor("Nope")
                            .setColor("#486dAA")
                            .setDescription("I need an emoji to react with")
                            .setFooter(config.footer)
                        return msg.channel.send(embed);
                    }
                }

                if (logs === true) {
                    let embed = new Discord.MessageEmbed()
                        .setAuthor("Action | Giveaway Started") 
                        .setColor("#486dAA")
                        .setDescription("A giveaway was started")
                        .setFooter(config.footer)
                    blueLogs.send(embed);
                } 
            })
        })
    }
}