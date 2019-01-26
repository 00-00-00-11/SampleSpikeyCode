//Random meme command, Powered by a Heroku API
//Make sure to have Snekfetch
const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    const snekfetch = require("snekfetch");
    const response = await snekfetch.get("https://meme-api.herokuapp.com/gimme%22);

    const embed = new Discord.RichEmbed()
    .setTitle(response.body.title)
    .setColor(0x00AE86)
    .setFooter("reddit.com/r/"+response.body.subreddit)
    .setImage(response.body.url)
    .setTimestamp()
    message.channel.send(embed);
}

exports.help = {
  name: "meme"
};
