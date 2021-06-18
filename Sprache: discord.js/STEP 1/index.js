const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

client.config = require('./config.json');
client.commands = new discord.Collection();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const messages = [`${client.config.prefix}help`];
let current = 1;

client.on('ready', () => {
client.user.setActivity(messages[0] , {type: "PLAYING"})
    setInterval(() => {
        if(messages[current]){
            client.user.setActivity(messages[current] , {type: "PLAYING"})
            current++;
        }else{
            current = 0;
            client.user.setActivity(messages[current] , {type: "PLAYING"})
        }
    }, 3*1000)
});

client.login(client.config.token);
