const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");
const api = require("imageapi.js"); //this is a random image api

module.exports = {
    name: 'hentai',
    description: 'pulls a waifu from a list of subreddits',

    async execute(msg){

        if(msg.channel.nsfw){
            let subreddits = [
                "hentai",
                'rule34',
                'wholesomehentai',
                'ahegao',
            ]
            let subreddit = subreddits(Math.floor(Math.random() * (subreddits.length) - 1));
            let img = await api(subreddit);

            if (config.embeds === true) {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`A meme from ${subreddit}`)
                    .setColor("#486dAA")
                    .setURL(`https://reddit.com/r/${subreddit}`)
                    .setImage(img)
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            }
        } else {
            if (config.embeds === true) {
                let embed = new Discord.MessageEmbed()
                    .setAuthor("Naughty Naughty...")
                    .setColor("#486dAA")
                    .setDescription("This is a Safe for Work Channel")
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            }
        }
    }
}