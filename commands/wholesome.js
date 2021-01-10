const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");
const randomPuppy = require("random-puppy"); //this is a random image api

module.exports = {
    name: 'wholesome',
    description: 'pulls a wholesome meme from a list of subreddits',

    async execute(msg){
        let subreddits = [
            'wholesomememes',
            'MadeMeSmile',
        ]
        let subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))];
        let img = await randomPuppy(subreddit);

        if (config.embeds === true) {
            let embed = new Discord.MessageEmbed()
                .setImage(img)
                .setTitle(`A meme from ${subreddit}`)
                .setColor("#486dAA")
                .setURL(`https://reddit.com/r/${subreddit}`)
                .setFooter(config.footer)
            msg.channel.send(embed);
        }
    }
}