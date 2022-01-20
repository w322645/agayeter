const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require("../../config.json");
  const talkedRecently = new Set();
exports.run = (client, message, args) => {

      var e = db.fetch(`prefix_${message.guild.id}`)
    if(e){
      var p = e
    }
    if(!e){
      var p = "?"
    }
  let prefix = ayarlar.prefix;
  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          `Bir Rol Belirt\nÖrnek Kullanım ${p}rolrengi @rol rolkodu\nRol Kodunun Başına # Koymayın
          
          Renk Kodlarını Nerden Bakıcam Derseniz
          
          [RENK KODLARI](http://www.abecem.net/web/renk.html)`
        )
        .setColor("#36393f")
    );
  let renk = args.slice(1).join(" ");
  if (!renk)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          `Bir Renk Kodu Belirtmelisin\n Örnek Kullanım: ${p}rolrengi @rol renkkodu\n Renk Kodunun başına # Koymayın
          
          Renk Kodlarını Nerden Bakıcam Derseniz
          
          [RENK KODLARI](http://www.abecem.net/web/renk.html)`
        )
        .setColor("#36393f")
    );
  message.guild.roles.cache.get(rol.id).setColor(renk);
  message.channel.send(
    new Discord.MessageEmbed()
    .setThumbnail(`https://dummyimage.com/600x600/${renk}/000000&text=rol%20rengi`)
      .setDescription(`Başarıyla Rol Rengi #${renk} Olarak Ayarlandı!`)
      .setColor(renk)
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolrenk","rol-rengi"],
  permLevel: 2,
}; //DevTR
exports.help = {
  name: "rr",
  description: "Rolun Rengini Değiştirir",
  usage: "rolrengi @rol renkkodu"
};