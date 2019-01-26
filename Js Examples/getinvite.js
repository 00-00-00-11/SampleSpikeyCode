//Get an invite to a server your bot is in by providing an ID (goes nice alongside guildlist.js ;) )
//By yours truly, andre#1337
let Discord = require("discord.js")
exports.run = async (bot, message, args) => {
    let guildid = args[0]
    let guild = bot.guilds.get(guildid);
    if (!guild) return message.reply("The bot isn't a member of such guild!");

    let invitechannels = guild.channels.filter(c => c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))
    if (!invitechannels) return message.channel.send('I don\'t have permissions to create an invite link :/ ')

    invitechannels.random().createInvite()
        .then(invite => message.channel.send(`Found Invite: **${invite.code}**, Server name: **${guild.name}**`))

}


exports.help = {
    name: "getinvite"
};
