const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'userhelp',
    description: 'this accesses the commands list',

    execute(msg){
        if(config.embeds === true){
            let embed = new Discord.MessageEmbed() //sets send card message
                .setAuthor("Fun Commands") // Header of card
                .setColor("#486dAA") //Side bar color
                .setDescription(`- **${config.prefix}meme** sends a meme from r/memes\n\
                -**${config.prefix}aww** sends a meme from r/aww\n\
                -**${config.prefix}wholesome** sends a meme from r/wholesome\n\
                -**${config.prefix}hentai** well...you know uwu\n\
                -**${config.prefix}reddit** sends a meme from a specified subreddit [<command> + <subreddit>]\n\
                -**${config.prefix}roll** rolls a specified dice [ex. ${config.prefix}roll 2d20+4]\n\
                -**${config.prefix}vote** adds reactions to previous message with upvotes, downvotes, and question reactions.\n\
                -**${config.prefix}invitebot** sends an invite link for this bot\n\
                -**${config.prefix}donate** sends you links to help support this bot and keep it free! :)`)
                .setFooter(config.footer) //footer/watermark
            msg.channel.send(embed);
        }
    }
}