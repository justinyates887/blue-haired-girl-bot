const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");
const api = require("imageapi.js"); //this is a random image api

module.exports = {
    name: 'reddit',
    description: 'pulls a specified subbreddit',

    async execute(msg, args){
        let redditQuery = args.join('');

        if(!redditQuery){
            if (config.embeds === true) {
                let embed = new Discord.MessageEmbed()
                    .setAuthor("Hmmm...")
                    .setColor("#486dAA")
                    .setDescription("You didn't specify a subreddit.")
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            }
        }
        try{
            let img = await api(redditQuery);
            if (config.embeds === true) {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`A meme from ${redditQuery}`)
                    .setColor("#486dAA")
                    .setURL(`https://reddit.com/r/${redditQuery}`)
                    .setImage(img)
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            }
        } catch(err){
            if (config.embeds === true) {
                let embed = new Discord.MessageEmbed()
                    .setAuthor("Oof")
                    .setColor("#486dAA")
                    .setDescription("Something went wrong, try again?")
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            }
        }
    }
}