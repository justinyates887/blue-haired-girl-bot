module.exports = {
    name: 'kick',
    description: "This kick\'s player!",

    execute(msg, args){
        const target = msg.mentions.users.first(); // The user that we are trying to kick
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        }

        if (target.id === bot) {
            //Checks if the embed option is true
            if (config.embeds === true) {
                 // Creates and sends this embed
                 let embed = new Discord.MessageEmbed()
                    .setAuthor("Easter egg!")
                    .setColor("#486dAA")
                    .setDescription("OUCH!")
                    .setFooter(embeds)
                    return msg.channel.send(embed)
            } else {
                //Sends this if the embed option is false
                return msg.channel.send("No, just No.");
            }
        }
        if(target){
            const memberTarget = msg.guild.members.cache.get(target.id);
            memberTarget.kick({
            });
        }else{
            msg.channel.send(`Could not kick member`);
        }
    }
}