//Andre's fancy guild list command
//Works as of D.JS 11.4.2, Node.JS 11.7 and NPM 6.5
//Make sure you are using functions.js from the Guidebot bot. If not check out github.com/AnIdiotsGuide/guidebot/tree/master/modules and download it
//With that out of the way, paste the following code inside the functions.js file
//Also make sure to have Snekfetch (yes I know it is deprecated, but does the job fine for small tasks like these
//
  const snekfetch = require('snekfetch');
  <bot>.hastebinit = (input, extension) => {//replace <bot> with what your client is defined as
    return new Promise(function (res, rej) {
      if (!input) rej("Input argument is required.");
      snekfetch.post("https://hasteb.in/documents%22").send(input).then(body => {
        res("https://hasteb.in/" + body.body.key + ((extension) ? "." + extension : ""));
      }).catch(e => rej(e));
    })
  };

//Paste that before the last }; on the functions.js file
//Then add a new if block or make a new file for the command
//Make sure to install moment, table and number-abbreviate
const discord = require('discord.js');
const moment = require("moment");
const table = require('table');
const abbreviate = require('number-abbreviate');

module.exports.run = (bot, message, args) => {
    let generated  = `${moment().format("MM-DD-YYYY | hh:mm:ss")} UTC`;
    let guildtable = [['#', 'Guild Name', 'Guild ID', 'Guild Owner ID', 'Normal Users', 'Bot Users', 'Total Users']];
    let guilds =` My Guilds:
Total Guilds: ${abbreviate(bot.guilds.size, 2)}

Text Channels: ${abbreviate(bot.channels.filter(c => c.type === 'text').size, 2)}
Voice Channels: ${abbreviate(bot.channels.filter(c => c.type === 'voice').size, 2)}
Category Channels: ${abbreviate(bot.channels.filter(c => c.type === 'category').size, 2)}
Total Channels: ${abbreviate(bot.channels.size, 2)}

Normal Users: ${abbreviate(bot.users.filter(m => m.bot == false).size, 2)}
Bot Users: ${abbreviate(bot.users.filter(m => m.bot).size, 2)}
Total Users: ${abbreviate(bot.users.size, 2)}\n\n`
    let i = 0
    bot.guilds.sort((a, b) => b.members.filter(m => m.user.bot == false).size - a.members.filter(m => m.user.bot == false).size).forEach(g => {
        i++;
        guildtable.push([i, g.name, g.id, g.owner ? g.owner.user.id : "???", g.members.filter(m => m.user.bot == false).size, g.members.filter(m => m.user.bot).size, g.members.size]);
    })
    let entireThing = guilds + table.table(guildtable) + `\n\nGenerated @ ${generated}`
    bot.hastebinit(entireThing).then(r => {
        let embed = new discord.RichEmbed()
            .setDescription(r)
            .setColor("RANDOM")
        message.channel.send({ embed });
    }).catch(console.error);
}

exports.help = {
    name: "guilds"
};

//If it works the expected output should be a small embed with a random link.
//Once you click it you will be greeted with a nice table showing information per server. Have fun :smiley:
