const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

    exports.run = async (bot, msg, args) => {
        const target = msg.mentions.users.first()  // The target that we are trying to ban
        //const user = msg.guildMember(msg.mentions.target.first() || msg.guildMembers.get(args[0]));
        var banReason; // Reason of the ban
        //const bot = "794674548875460649"

    if(msg.member.roles.cache.has(config.adminRole)){
     // Allows only members with the admin role to kick players
            banReason = args.slice(1).join(" "); // Reason of the ban (Everything behind the mention)
        if (!target) { // Does this if the target did not tag a member
            if (config.embeds === true) { //Checks if the embed option is true then creates and sends this embed 
                let embed = new Discord.MessageEmbed()
                    .setAuthor("Nice try!")
                    .setColor("#486dAA")
                    .setDescription("No target found please @ the target your trying to ban")
                    .setFooter(embeds)
                return msg.channel.send(embed);
        }
    }
    if (!banReason) {
        // Sets the Var reason to this:
        banReason = "No reason provided";
    }
    // Checks if the person trying to ban is the bot
            // If so it does this:
    if (target.id === bot) {
        //Checks if the embed option is true
        if (config.embeds === true) {
             // Creates and sends this embed
             let embed = new Discord.MessageEmbed()
                .setAuthor("Nice try!")
                .setColor("#486dAA")
                .setDescription("Why would you try this? Trying to ban me through my own command!")
                .setFooter(embeds)
                return msg.channel.send(embed)
        } else {
            //Sends this if the embed option is false
            return msg.channel.send("No, just No.");
        }
    }
            // Checks if the user is banning themself 
            // If so it does this:
    var embeds;
    if (config.override === true) {
        embeds = config.footer; // Checks to see if the overide is true in the config
    }
    if (target.id === msg.author.id){  // checks to see if the target is the msg author 
        if (config.embeds === true) { //Checks if the embed option is true
            // Creates and sends this embed
            let embed = new Discord.MessageEmbed()
                .setAuthor("Error!")
                .setColor("#486dAA")
                .setDescription("You cannot ban yourself")
                .setFooter(embeds)
            return msg.channel.send(embed);
        } else {
            //Sends this if the embed option is false
            return msg.channel.send("You cannot ban yourself.");
        }
    }
            // Checks if the person tagged is null
            // If so send this:
    if (target == null) {
        let embed = new Discord.MessageEmbed()
                .setAuthor("Error!")
                .setColor("#486dAA")
                .setDescription("Player does not exist")
                .setFooter(embeds)
            return msg.channel.send(embed);
    }
    // If all checks have been passed as OK
    // it will then ban the user
    if(target){
        const memberTarget = msg.guild.members.cache.get(target.id);
        memberTarget.ban({
        });
        banned === true;
    }else{
        msg.channel.send(`Could not kick member`);
    }
        var embeds1;
        if (config.override === true) {
            embeds1 = config.footer;
        }

        console.log(args);
        // Then it will send this embed to say
        // that the user has been banned
        if (config.embeds === true) {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Banned")
                .setColor("#486dAA")
                .setDescription(config.userBanned
                    .replace(/{user}/g, target)
                    .replace(/{userID}/g, target.id)
                    .replace(/{staffMember}/g, msg.author)
                    .replace(/{reason}/g, banReason))
                .setFooter(embeds1);
            msg.channel.send(embed);
        } else {
            msg.channel.send(config.userBanned
                .replace(/{user}/g, target)
                .replace(/{userID}/g, target.id)
                .replace(/{staffMember}/g, msg.author)
                .replace(/{reason}/g, banReason));
        }


        // Checks the config if the user wants logging enabled
        // if so it does this:
        var embeds2;
        if (config.override === true){
            embeds2 = config.footer;
        } 
        if (config.embeds === true) {
            let banEmbed = new Discord.MessageEmbed()
                .setAuthor("Action | User banned")
                .setColor("#486dAA")
                .addField("Staff Member", `${msg.author.id}>`)
                .addField("User Banned", `${target.id}>`)
                .addField("Reason", `${banReason}`)
                .setFooter(`${embeds2}`);
            try{
            return msg.guild.channels.find(ch => ch.name.includes(`${logs}`)).send(banEmbed);
            }
            catch(error){
                if(error){
                    let banEmbed = new Discord.MessageEmbed()
                        .setAuthor("ERROR")
                        .setColor("#486dAA")
                        .setDescription("An unknown error has ben discovered")
                        .setFooter(`${embeds2}`);
                }
            }
            console.log(`${logs}`)
        }
    } else {
        msg.channel.send('You do not have the permissions to ban a member')
    }
}

/*
-needs perms
-needs reason
-needs PM
-
*/