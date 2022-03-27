const { VoiceState } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');


require("dotenv").config();

const client = new Discord.Client();

const prefix = '>';




client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args =  message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    let channelid = message.member.systemChannelId;
    let channelVAVA = client.channels.cache.get(924760925456724028);
 


    if(command === 'pingo'){
        message.channel.send('Ponga!');
    }else if (command == 'eww'){
        message.channel.send("https://cdn.discordapp.com/emojis/852883880737243177.png?v=1");
    }else if (command == 'yoshi'){
        console.log(channelid)
        message.member.voice.channel.join().then(connection => {
            connection.play('src/audios/yooshiii.m4a');
        });
    }else if (command == 'alo'){
        console.log(channelid)
        message.member.voice.channel.join().then(connection => {
            connection.play('src/audios/aloo.mp3');
        });
    }else if (command == 'vtnc'){
        console.log(channelid)
        message.member.voice.channel.join().then(connection => {
            connection.play('src/audios/vtnc.mp3');
        });
    }else if(command == "stop"){
        message.member.voice.channel.join().then(connection => {
            connection.stop();
        });
    }else if(command == "moveVA"){
        const mem = message.member;
        const chan = client.channels.get("924760925456724028");
        

        mem.setVoiceChannel(chan).then(() => console.log(`Moved ${mem.displayName} to ${chan}`));
        
    }
    else if (command == "findEdu"){
        let mem = client.users.fetch(449206210919661570);
        console.log(mem.channel);
    }
    

});

client.on('voiceStateUpdate', (oldMember, newMember)=>{
    let newUserChannel = newMember;
    let oldUserChannel = oldMember;
    let channel = client.channels.cache.get(newUserChannel.channelID);

    console.log(newUserChannel.guild.name)
    let Mattz = '332251994817560586';
    let Yoshi = '334499438741684224';
    let Geise = '629130572840566785';
    let Kaua = '367810988432687105';
    let eujasei = '449206210919661570';
    let mem = client.users.fetch(Mattz);

    try{
        channel.join().then(connection => {
           connection.play('src/audios/aloo.mp3');

        });
        guild.leave();
    }catch(error){
        console.error(error);
    }
});
client.login(process.env.TOKEN);