const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'vote',
    description: 'adds vote reactions to messages',

    execute(msg){
        msg.delete().then(() => {
            const { guild, channel } = msg;

            channel.messages.fetch({ limit: 1 }).then((messages) => {
                msg = messages.first();

                if(!msg) {
                    if (config.embeds === true) {
                        let embed = new Discord.MessageEmbed()
                            .setAuthor("Oops")
                            .setColor("#486dAA")
                            .setDescription("There isn't a message to vote on")
                            .setFooter(config.footer)
                        return msg.channel.send(embed);
                    }
                }

                msg.react('👍');
                msg.react('👎');
                msg.react('❓');
            })
        })
    }
}