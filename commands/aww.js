const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");
const randomPuppy = require("random-puppy"); //this is a random image api

module.exports = {
    name: 'aww',
    description: 'pulls a random awe from a list of subreddits',

    async execute(msg){
        let subreddits = [
            'aww',
            'StartledCats',
            'Zoomies',
            'rarepuppers',
            'CatsStandingUp',
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