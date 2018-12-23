const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

function msleep(n) 
{
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

/*function sleep(n) 
{
    msleep(n*1000);
}*/

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
        guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "Games 1").id);
        guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "Lol").id);
        guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "rustism").id);
        guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "úklid").id);
        guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "úklid 2").id);
        guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "Warframe").id);
        guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "MUSIC").id);
        guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "něco").id);
        guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "Análek pro Kicknutého <3").id);
        guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "Romská Ubytovna").id);
        

        const guildChannels = guild.channels.find('name', 'Games 1');
        if (guildChannels === null) 
        {
            // There's no voice channel named "Moveer"
            message.channel.send('Romská Ubytovna neexistuje!');
        } 
        else 
        {
            const usersInMoveeer = guildChannels.members;
            if (usersInMoveeer.has(messageMentions[0].id)) 
            {
                guild.member(messageMentions[0].id).setVoiceChannel(guild.channels.find("name", "Lol").id);
            }
        }
    }

});

bot.login(botconfig.token);