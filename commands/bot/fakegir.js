const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  const fake = new Discord.MessageEmbed()
  .setColor("#36393f")
  .setTitle(`Başarılı Bir Şekilde Veri Tabanından Giriş Yapıldı (<a:face:820284505084133377>) `)
  .setDescription('**Hatırlatma:**`Veri Tabanından Çıkış Yapmak İçin (fçık) Yazınız Sahibim`')
  message.channel.send(fake);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "fgir",
  category: "kullanıcı",
  description: "Destek Suncu Menüsü.",
  usage: "!destek"
};
