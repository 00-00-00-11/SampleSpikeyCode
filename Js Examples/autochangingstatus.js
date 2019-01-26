module.exports = async client => {
const game = [
`Replace it with your own`,
`Replace it with your own`,
`Replace it with your own`,
`Replace it with your own`,
`Replace it with your own`,
`Replace it with your own`,
`Replace it with your own`];

setInterval(function() {

const random = Math.floor(Math.random()*(game.length-0+1)+0);
client.user.setPresence({ game: { name: game[random], type: "PLAYING"}});
}, 9000);
}