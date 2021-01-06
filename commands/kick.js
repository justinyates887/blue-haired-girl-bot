const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'kick',
    description: "This kick\'s player!",

    execute(msg, args, logs, blueLogs){
        const bot = "794674548875460649"//bot uID
        var kickReason; 
        const target = msg.mentions.users.first(); // The user that we are trying to kick

        if(msg.member.roles.cache.has(config.adminRole)){
            // Allows only members with the admin role to kick players
                   kickReason = args.slice(1).join(" "); // Reason of the ban (Everything behind the mention)
               if (!target) { // Does this if the target did not tag a member
                   if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                       let embed = new Discord.MessageEmbed() //sets send card message
                           .setAuthor("Error!") // Header of card
                           .setColor("#486dAA") //Side bar color
                           .setDescription("No target found please @ the target your trying to ban") //main text body
                           .setFooter(config.footer) //footer/watermark
                       return msg.channel.send(embed);
               }
           }
        if (!kickReason) {
            // Sets the Var reason to this:
            kickReason = "No reason provided";
        }
        if (target.id === bot) {
            //Checks if the embed option is true
            if (config.embeds === true) {
                 // Creates and sends this embed
                 let embed = new Discord.MessageEmbed()
                    .setAuthor("Ouch!")
                    .setColor("#486dAA")
                    .setDescription("That hurt....")
                    .setFooter(config.footer)
                    return msg.channel.send(embed)
            } else {
                //Sends this if the embed option is false
                return msg.channel.send("Ouch!");
            }
        }
        if (target.id === msg.author.id){  // checks to see if the target is the msg author 
            if (config.embeds === true) { //Checks if the embed option is true
                // Creates and sends this embed
                let embed = new Discord.MessageEmbed()
                    .setAuthor("Error!")
                    .setColor("#486dAA")
                    .setDescription("You cannot kick yourself")
                    .setFooter(config.footer)
                return msg.channel.send(embed);
            } else {
                //Sends this if the embed option is false
                return msg.channel.send("You cannot kick yourself.");
            }
        }
        if(target){
            const memberTarget = msg.guild.members.cache.get(target.id);
            memberTarget.kick({
            });
        }else{
            msg.channel.send(`Could not kick member`);
        }
        var embeds1;
        console.log(args);
        // Then it will send this embed to say
        // that the user has been banned
        if (config.embeds === true) {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Kicked")
                .setColor("#486dAA")
                .setDescription(config.userKicked
                    .replace(/{user}/g, target)
                    .replace(/{userID}/g, target.id)
                    .replace(/{staffMember}/g, msg.author)
                    .replace(/{reason}/g, kickReason))
                .setFooter(config.footer);
            msg.channel.send(embed);
        } else {
            msg.channel.send(config.userKicked
                .replace(/{user}/g, target)
                .replace(/{userID}/g, target.id)
                .replace(/{staffMember}/g, msg.author)
                .replace(/{reason}/g, kickReason));
        }

        // Logs
        if (logs === true) {
            let kickEmbed = new Discord.MessageEmbed()
                .setAuthor("Action | User kicked")
                .setColor("#486dAA")
                .setDescription(config.userKicked
                    .replace(/{user}/g, target)
                    .replace(/{userID}/g, target.id)
                    .replace(/{staffMember}/g, msg.author)
                    .replace(/{reason}/g, kickReason))
                .setFooter(config.footer);
            blueLogs.send(kickEmbed);
        } else {
        msg.channel.send('Log failed please enable embeds :(')
    }
}
    }
}
