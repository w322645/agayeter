const Discord = require("discord.js");
const db = require("quick.db");
  const talkedRecently = new Set();
exports.run = async (client, message, args) => {



  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      "❌ Üzgünüz, Kullanıcı İsimlerini Yönet yetkisine sahip değilsiniz.."
    );
  let kişi = message.mentions.members.first() || message.author;
  message.channel.send(
    `**İstediğiniz Kişinin ID Numarası:** ||**${kişi.id}**||`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["id"],
  permlevel: 0
};

exports.help = {
  name: "id",
  description: "Birisinin İD Sini Alırsınız",
  usage: "!id"
};
