const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => 
{
    console.log(`${bot.user.username} is online!`);
    bot.user.setGame("moving BIG GOD");
})

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

        for(var i=0;i<10;i++){
            if(channels.array()[i].type == "voice"){
                guild.member(messageMentions[0].id).setVoiceChannel(channels.array()[i].id);
            }
        }

        guild.member(messageMentions[0].id).setVoiceChannel(message.member.voiceChannel.id);
    }

});

bot.login(botconfig.token);