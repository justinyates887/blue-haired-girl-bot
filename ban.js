module.exports = {

    name: 'ban',

    description: "This Ban\'s player!",

    execute(msg, args){

        const target = msg.mentions.users.first(); // The user that we are trying to ban
        const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)
        if(!msg.target.permissions.has('ADMINISTRATOR')) return msg.reply('you aren\'t an Admin!'); // Allows only members with the admin role to ban players 
        
        if(target){

            const memberTarget = msg.guild.members.cache.get(target.id);
            memberTarget.ban({
                reason: banReason
            });
            msg.channel.send(`User has been banned for`);

        }else{

            msg.channel.send(`Could not ban member`);
        }
    }
}