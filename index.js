const Discord = require('discord.js');
const token = '' //be sure to set to env var so can't be seen on github
const client = new Discord.client();

client.on('message', (msg) => {
    if (msg.content === '!test'){
        msg.channel.send('Hello ${msg.author}!');
    }
})

client.on('ready', () => {
    console.log('Bot is now connected...');

    client.channels.find(x => x.name === 'test').send('Hello! I am connected!');
})

client.login(token);
