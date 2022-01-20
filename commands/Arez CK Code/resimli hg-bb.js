const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (!message.guild) {
    var prefix = "?";
  } else {
    var a = db.fetch(`prefix_${message.guild.id}`);
    if (!a) {
      var prefix = "?";
    } else {
      var prefix = a;
    }
  }
  var argümanlar = ["ayarla", "sıfırla", "aç", "kapat", "yardım"];
  if (args[0] == "ayarla" || args[0] == "aç") {
    var kanal =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[1]);
    if (!kanal) return message.channel.send("Lütfen bir kanal belirtin.");
    db.set(`resimligirişçıkış.${message.guild.id}`, kanal.id);
    return message.channel.send(
      "Resimli giriş çıkış kanalı " + kanal + " olarak ayarlandı!"
    );
  } else if (args[0] == "sıfırla" || args[0] == "kapat") {
    if (db.has(`resimligirişçıkış.${message.guild.id}`)) {
      db.delete(`resimligirişçıkış.${message.guild.id}`);
      return message.channel.send("Resimli giriş çıkış kanalı sıfırlandı.");
    } else {
      return message.channel.send("Resimli giriş çıkış zaten ayarlanmamış.");
    }
  } else if (args[0] == "yardım") {
    return message.channel.send(new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL({ size: 1024 })).setColor('#36393f').setTitle('Resimli Hg-bb Menü')
    .addField(`${prefix}resimli-hgbb ayarla #kanal`,`Resimli giriş çıkış kanalını ayarlar. `)
.addField(`${prefix}resimli-hgbb sıfırla`,`Resimli giriş çıkış kanalını sıfırlar. `)
.addField(`${prefix}resimli-hgbb yardım`,`Yardım menüsü. `));
  } else
    return message.channel.send(
      `Lütfen bir seçenek belirtin! Eğer kullanımı bilmiyorsanız \`${prefix}resimli-hgbb yardım\``
    );
};
exports.conf = {
  aliases: ["resimli-hg-bb", "resimlihg-bb"],
  permLevel: 3
};
exports.help = {
  name: "resimli-hgbb"
};
