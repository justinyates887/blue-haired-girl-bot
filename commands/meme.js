const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");
const api = require("imageapi.js"); //this is a random image api

module.exports = {
    name: 'meme',
    description: 'pulls a random meme from a list of subreddits',

    async execute(msg){
        let subreddits = [
            "dankmemes",
            'memes',
            'meme',
            'funny',
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
    }
}