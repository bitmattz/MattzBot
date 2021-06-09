const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () =>{
    console.log('MattzBot ta on!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'olá MattzBot'){
        message.channel.send('Opa Tudo bom?');
    }


});



client.login('ODE3NTY5NTUyNTEwMDkxMjY1.YELa-w.PwFRYomzEJ8SA-WOLPgzLvihmp8');