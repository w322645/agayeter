const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  const fakess = new Discord.MessageEmbed()
  .setColor("#36393f")
  .setTitle(`Başarılı Bir Şekilde Veri Tabanından Çıkış Yapıldı (<a:face:820284505084133377>) `)
  .setDescription('**Hatırlatma:**`Veri Tabanından Giriş Yapmak İçin (fgir) Yazınız Sahibim`')
  message.channel.send(fakess);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "fçık",
  category: "kullanıcı",
  description: "Destek Suncu Menüsü.",
  usage: "!destek"
};
