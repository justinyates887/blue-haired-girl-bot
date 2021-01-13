const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'donate',
    description: 'allows for users to donate to the betterment of the bot',

    execute(msg, args){
        if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Your kindness helps keep developments like this free forever <3") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription("**Buy us a cup of coffee**\nhttps://www.buymeacoffee.com/smallbluedev\n\n**PayPal**\nhttps://www.paypal.com/biz/fund?id=KZERMCEU8TXQ4") //main text body
                .setFooter(config.footer) //footer/watermark
            return msg.channel.send(embed);
        }
    }
}
