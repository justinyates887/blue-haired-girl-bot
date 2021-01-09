const config = require("../config.json"); //initialize config.json
const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
    name: 'makiozesmuscles',
    description: 'no desc needed',

    execute(msg){
        msg.channel.send('https://64.media.tumblr.com/6bb2ef29ff60f37469b90c653ee4c4b4/tumblr_pujoh77U311ud6dexo2_1280.jpg');
        return;
    }
}