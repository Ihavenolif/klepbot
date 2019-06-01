const botconfig = require("./botconfig.json");
const botconfig2 = require ("./botconfig2.json");
const botconfig3 = require ("./botconfig3.json");
const botconfig4 = require ("./botconfig4.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const bot2 = new Discord.Client({disableEveryone: true});
const bot3 = new Discord.Client({disableEveryone: true});
const bot4 = new Discord.Client({disableEveryone: true});

bot2.on("ready", async () => 
{
    console.log(`${bot2.user.username} is online!`);
    bot2.user.setGame("moving BIG GOD");
})

bot2.on("message", async message => 
{
    if(message.author.bot2) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig2.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`)
    {
        return message.channel.send("Hello!");

    }

    if(cmd === `${prefix}klep`)
    {
      const userVoiceRoomID = message.member.voiceChannelID;
      const channels = guild.channels;
      const messageMentions = message.mentions.users.array();

      for(var i=0;i<10;i++){
            if(channels.array()[i].type == "voice"){
                guild.member(messageMentions[0].id).setVoiceChannel(channels.array()[i].id);
            }
        }
      message.guild.member(messageMentions[0].id).setVoiceChannel(message.member.voiceChannel.id);
    }
});

bot3.on("ready", async () => 
{
    console.log(`${bot3.user.username} is online!`);
    bot3.user.setGame("moving BIG GOD");
})

bot3.on("message", async message => 
{
    if(message.author.bot3) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig3.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`)
    {
        return message.channel.send("Hello!");

    }

    if(cmd === `${prefix}klep`)
    {
      const userVoiceRoomID = message.member.voiceChannelID;
      const channels = message.guild.channels;
      const messageMentions = message.mentions.users.array();

      for(var i=0;i<10;i++){
            if(channels.array()[i].type == "voice"){
                message.guild.member(messageMentions[0].id).setVoiceChannel(channels.array()[i].id);
            }
        }
      message.guild.member(messageMentions[0].id).setVoiceChannel(message.member.voiceChannel.id);
    }
});

bot4.on("ready", async () => 
{
    console.log(`${bot4.user.username} is online!`);
    bot4.user.setGame("moving BIG GOD");
})

bot4.on("message", async message => 
{
    if(message.author.bot4) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig4.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`)
    {
        return message.channel.send("Hello!");

    }

    if(cmd === `${prefix}klep`)
    {
      const userVoiceRoomID = message.member.voiceChannelID;
      const channels = message.guild.channels;
      const messageMentions = message.mentions.users.array();

      for(var i=0;i<10;i++){
            if(channels.array()[i].type == "voice"){
                message.guild.member(messageMentions[0].id).setVoiceChannel(channels.array()[i].id);
            }
        }
      message.guild.member(messageMentions[0].id).setVoiceChannel(message.member.voiceChannel.id);
    }
});

bot.on("ready", async () => 
{
    console.log(`${bot.user.username} is online!`);
    bot.user.setGame("moving BIG GOD");
})

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

bot.on("message", async message => 
{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`)
    {
        return message.channel.send("Hello!");

    }

    if(cmd === `${prefix}botinfo`)
    {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()

        .setDescription("BotInformation")
        .setColor("#00FF00")
        .setThumbnail(bicon)
        .addField("Created On", bot.user.createdAt)
        .addField("Bot Name", bot.user.username);


        return message.channel.send(botembed); 
    }

    if(cmd === `${prefix}serverinfo`)
    {
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server info")
        .setColor("#FF0000")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount);

        return message.channel.send(serverembed);
    }

    if(cmd === `${prefix}report`)
    {
        let rUser = message.guild.member(message,mentions.users.first() || message.guild.members.get(args[0]))
        if(!rUser) return message.channel.send("Couldn't find user")
        let reason = args.join(" ").slice(22);
    }

    if(cmd === `${prefix}klep`)
    {
        
        // The voice channel ID the author of the message sits in
        const userVoiceRoomID = message.member.voiceChannelID;
        // The authors ID
        const authorID = message.author.id;
        // Which server the message comes from
        const guild = message.guild;

        const channels = guild.channels;

        // Mentions in the message
        const messageMentions = message.mentions.users.array();

        for(var i=0;i<12;i++){
            if(channels.array()[i].type == "voice"){
                guild.member(messageMentions[0].id).setVoiceChannel(channels.array()[i].id);
            }
        }

        guild.member(messageMentions[0].id).setVoiceChannel(userVoiceRoomID);
    }

    if(cmd === `${prefix}fuckfest`){
      const channels = message.guild.channels;
      var users = [];
      //getting users connected in channels
      for(var i=0;i<channels.array().length;i++){
            if(channels.array()[i].type == "voice"){
                for(var y=0;y<channels.array()[i].members.array().length;y++){
                  users.push(channels.array()[i].members.array()[y].id);
                }
            }
        }
      for(var g=0;g<args[0];g++){
        message.guild.member(users[randInt(0,users.length)]).setVoiceChannel(channels.array()[randInt(0,channels.array().length)]);
      }
    }

});

bot.login(botconfig.token);
bot2.login(botconfig2.token);
bot3.login(botconfig3.token);
bot4.login(botconfig4.token);