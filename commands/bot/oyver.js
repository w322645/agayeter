const Discord = require('discord.js');
const db = require('quick.db');//BİTTİ .D ASJDNAKJSFSAKFDHKASFH
module.exports.run = async(client, message, args) => {
  
  
const a  =  new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail("https://www.emojiall.com/images/60/blobmoji/emoji_u1f5f3.png")
        .setTitle("Bana Oy Vermeyi Düşündüğün İçin Saol")
        .setDescription("Ancak Üzülerek Söyliyimki Daha Onaylanmadım :pleading_face: ")
         message.channel.send(a)       
};
exports.conf = {
  aliases : ['oy-ver'],
  permLevel: 0
}
exports.help = {
  name: "oyver"
}