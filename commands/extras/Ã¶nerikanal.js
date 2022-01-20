const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
 
      var e = db.fetch(`prefix_${message.guild.id}`)
    if(e){
      var p = e
    }
    if(!e){
      var p = "?"
    }
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
      "**:frowning: Üzgünüm bu komudu kullanmak için `Kanalları Yönet` yetkisine sahip olman gerek.**"
    );
  let reason = args.slice(1).join(" ");

  var kanal = message.mentions.channels.first();

  if (args[0] == "sıfırla") {
    db.delete(`önerikanal_${message.guild.id}`);
    return message.channel.send(
      ":x: **Önerilerin gönderileceği kanal sıfırlandı.**"
    );
  } else if (!kanal) {
    return message.channel.send(":gear: **Lütfen bir kanal etiketleyiniz.**");
  } else {
    db.set(`önerikanal_${message.guild.id}`, kanal.id);
    return message.channel.send(
      ` **Önerilerin gönderileceği başarıyla ${kanal} olarak ayarlandı.** \n :arrow_right: \`\`Sıfırlamak için ${p}öneri-ayarla sıfırla\`\` `
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istek-ayarla", "öneri-kanal"],
  permLevel: 3
};
exports.help = {
  name: "öneri-ayarla",
  description: "ö",
  usage: "ö"
};
