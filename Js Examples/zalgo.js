const zalgo = require("zalgolize")
exports.run = (client, message, args, ops) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(`\u180E${zalgo(sayMessage, 0.3, [12, 6, 12])}`)
}
