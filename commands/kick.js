module.exports = {
    name: 'kick',
    description: "This kick\'s player!",

    execute(msg, args){
        const target = msg.mentions.users.first(); // The user that we are trying to kick
        //if(!msg.target.permissions.has('ADMINISTRATOR')) return msg.reply('you aren\'t an Admin!'); // Allows only members with the admin role to kick players 

        if(target){
            const memberTarget = msg.guild.members.cache.get(target.id);
            memberTarget.kick({
            });
        }else{
            msg.channel.send(`Could not kick member`);
        }
    }
}