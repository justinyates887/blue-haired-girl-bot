const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'endgiveaway',
    description: 'ends a giveaway',

    async execute(msg, logs, blueLogs){
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        }

        msg.delete().then(() => {
            const { channel } = msg;

            channel.messages.fetch({ limit: 1 }).then(async (messages) => {
                msg = messages.first();

                if(!msg) {
                    if (config.embeds === true) {
                        let embed = new Discord.MessageEmbed()
                            .setAuthor("Oops")
                            .setColor("#486dAA")
                            .setDescription("There isn;t a message to start a giveaway on")
                            .setFooter(config.footer)
                        return msg.channel.send(embed);
                    }
                }

                const { users } = await msg.reactions.cache.first().fetch();
                const reactionsUsers = await users.fetch();
                const possibleWinners = reactionsUsers.array().filter((user) => {
                    return !user.bot;
                });
                const winner = possibleWinners[Math.floor(Math.random() * possibleWinners.length)]

                if (config.embeds === true) {
                    let embed = new Discord.MessageEmbed()
                        .setAuthor("CONGRATS!!!!")
                        .setColor("#486dAA")
                        .setDescription(`${winner}, you won the giveaway! You will recieve a message soon about the details.`)
                        .setFooter(config.footer)
                    msg.channel.send(embed);
                }

                if (logs === true) {
                    let embed = new Discord.MessageEmbed()
                        .setAuthor("Action | Giveaway Ended") 
                        .setColor("#486dAA")
                        .setDescription(`${winner} won the giveaway.`)
                        .setFooter(config.footer)
                    blueLogs.send(embed);
                } 
            })
        })
    }
}