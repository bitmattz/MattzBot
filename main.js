const Discord = require('discord.js');

require("dotenv").config();

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () =>{
    console.log('MattzBot ta on!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'Ola MattzBot'){
        message.channel.send('Olá tudo bom?');
        console.log('Me Chamou aq');
    }



});



client.login(process.env.TOKEN);