module.exports = {
    name: 'kick',
    description: "This kick\'s player!",

    execute(msg, args){
        const target = msg.mentions.users.first(); // The user that we are trying to kick
        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
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