//Simple Announcement command made by scratch by your's trully, andre#1337
//This is literally plug and play
const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    let server = message.guild.name;
    let announcer = message.author.username;
    let channel = message.mentions.channels.first();
    let announcement = args.slice(1).join(" ");
    if (!channel) return message.channel.send(`You forgot to mention the channel.`);
    if (!announcement) return message.channel.send(`You forgot to write the message you want me to announce.`)
    const ann_embed = new Discord.RichEmbed()
        .setTitle(`Announcing on server **${server}**, chat **${channel.name}**`)
        .setColor(65519)
        .setFooter(`${announcer}`)
        .setTimestamp()
        .addField(`${announcer} says`, `${announcement}`, false)
    channel.send(ann_embed)
}

exports.help = {
    name: "announcement"
};
