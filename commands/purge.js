const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'purge',
    description: 'purges a select number of chats',

    async execute(msg, args){
        const amount = args.join(' '); //We want the argument (number) to be the amount, so we do a join on the arg.

        //test
        console.log(amount)
        //

        if(!amount){
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Nope!") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("No number specified!") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        } else if (isNaN(amount)){
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Nope!") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("You need to use a number!") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        } else if (amount > 100) {
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed() //sets send card message
                    .setAuthor("Nope!") // Header of card
                    .setColor("#486dAA") //Side bar color
                    .setDescription("Discord only lets me delete 100 messages at a time :(") //main text body
                    .setFooter(config.footer) //footer/watermark
                return msg.channel.send(embed);
            }
        }
        
        /***************this function below does not work no async***********/
        else{
            await msg.channel.messages.fetch({ limit: args }) //Specify the limit (amount) of messages to fetch.
                .then(messages => { // Fetches the messages from the current channel
                    msg.channel.bulkDelete(messages) //deletes messages
            });
        }
    }
}
