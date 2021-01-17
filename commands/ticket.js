const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");
let registered = false;

const registerEvent = (client, channelSend, logs, blueLogs) => {
    if(registered){
        return
    }

    registered = true;

    client.on('messageReactionAdd', (reaction, user) => {
        if(user.bot){
            return
        }
        const { message } = reaction;
        if(message.channel.id === channelSend){
            message.delete();
        }
        
        if(logs === true) {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Action | Ticket Closed") 
                .setColor("#486dAA")
                .setDescription(`Ticket sent by ${userMessage.author} was closed.`)
                .setFooter(config.footer)
            blueLogs.send(embed);
        } 
    })
}

module.exports = {
    name: 'ticket',
    description: 'creates a cupport ticket in private channel',

    execute(userMessage, args, logs, blueLogs, client){
        const {guild, member} = userMessage;

        let channelID =  userMessage.guild.channels.cache.find(c => c.name === ('open-tickets'));
        let channelSend = channelID.id;
        const channel = guild.channels.cache.get(channelSend)

        if(!channelID){
            userMessage.guild.channels.create('open-tickets', {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: userMessage.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    }]
                })

                channelID =  userMessage.guild.channels.cache.find(c => c.name === ('open-tickets'));
                channelSend = channelID.id;
        }

        registerEvent(client, channelSend);
        let message = args.join(' ');
        let check = '✔️';

        if (config.embeds === true) {
            let embed = new Discord.MessageEmbed()
                .setAuthor("")
                .setColor("#486dAA")
                .setDescription(`A new ticket has been created by ${userMessage.author}\n\n${message}\n\nClick the ${check} to complete the request`)
                .setFooter(config.footer)
            channel.send(embed)
                .then(ticketMessage => {
                    ticketMessage.react(check)

                    userMessage.reply('Youre ticket has been sent! Expect a reply shortly.')

                    if (logs === true) {
                        let embed = new Discord.MessageEmbed()
                            .setAuthor("Action | Ticket Created") 
                            .setColor("#486dAA")
                            .setDescription(`A ticket was created by ${userMessage.author}`)
                            .setFooter(config.footer)
                        blueLogs.send(embed);
                    } 
                })
        }
    }
}