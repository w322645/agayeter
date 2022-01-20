const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async(client, message, args) => {
  
var prefix = db.fetch(`prefix_${message.guild.id}`)
if(!prefix){
  var prefix = "?"
}
  const a = new Discord.MessageEmbed()
        .setColor("#36393f")
  .setImage("https://s4.gifyu.com/images/standard-78d6849543e65dc34.gif")
        .setThumbnail(client.user.avatarURL())
        .setTitle(`Benim Sahibim \`Efe Sualp Sözügerçek\``)
        .setDescription(`**Ona Öneri Yada Bişi Ekletmek İstersen** \`${prefix}destek\` **Yazarak Destek Sunucusuna Gidebilirsin**\n\n**Daha Fazla Bilgi Almak İçin :** [EFDA BOT.ml](https://www.efdabot.ml) |\`www.efdabot.ml\`|\n\n========>| **Destek Alabilirsiniz** |<========`)
        .setFooter(client.user.username)
  message.channel.send(a)
  };
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "yapımcım"
}