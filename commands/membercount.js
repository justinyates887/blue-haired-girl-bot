const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'membercount',
    description: 'creates private voice channels based on guild stats',

    execute(msg){


        msg.guild.channels.create(`Member Count: ${msg.guild.memberCount}`, {
            type: 'voice',
            permissionOverwrites: [
                {
                    id: msg.guild.id,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['CONNECT']
                }]
            })

    }
}