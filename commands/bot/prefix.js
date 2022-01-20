const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (args[0] === "sıfırla") {
    if (db.has(`prefix_${message.guild.id}`)) {
      db.delete(`prefix_${message.guild.id}`);
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setTitle("Prefix sıfırlandı! Fabrikasyon Prefix `?`")
      );
    }
  }
  if (args[0] !== "sıfırla") {
    var b = db.fetch(`prefix_${message.guild.id}`);
    if (b) {
      var c = b;
    }
    if (!b) {
      var c = "?";
    }
    var a = args.slice(0).join(" ");
    if (!a)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription(
            `Ayarlamam için bir prefix belirtin! Eğer prefix'i sıfırlamak İstiyorsanız \`${c}prefix sıfırla\``
          )
      );
    db.set(`prefix_${message.guild.id}`, a); //sunucu!
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription(`\`${c}\` Olan Prefix \`${a}\` Olarak Güncellendi !`)
    );
  }
};
exports.conf = {
  aliases: [],
  permLevel:3
};
exports.help = {
  name: "prefix"
};
