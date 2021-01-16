const config = require("../config.json");
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'easteregg',
    description: 'sends an easteregg',

    execute(msg){
        msg.channel.send('https://www.edgenexus.io/wp-content/uploads/2018/03/Easteregg.png');
        return;
    }
}