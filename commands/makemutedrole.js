const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'makemutedrole',
    description: 'makes a muted role for the mute command',

    async execute(msg){

        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            return msg.channel.send('missing permissions')
        }

        msg.guild.roles.create({ data: { name: 'MUTED', permissions: ['SEND_MESSAGES', 'CONNECT'], color: 'FF0000'} });
        msg.guild.roles.updateOverwrite(msg.guild.roles.roleNew, { SEND_MESSAGES: false, CONNECT: false});

    }
}