const Discord = require("discord.js");
const db = require("quick.db");
  const talkedRecently = new Set();
exports.run = async (client, message, args) => {


  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  const amcıkss = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setTitle('Sayaç Sistemi || EFDA')
    .setFooter(`Sunucu Sayaç Sistemi Menüsü`)
    .setTimestamp()
    .addField(`${prefix}sayaç #kanal (hedef)`, 'Yazdığınız Hedefe Kadar Sayaç Başlatır', true)
    .addField(`${prefix}sayaç sıfırla`, 'Ayarlı Olan Sayacınızı Sıfırlar', true)
  message.channel.send(amcıkss);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sayaçsistemi','sayaç-ayarla','sayaçayarla'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "sayaç-sistemi",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
