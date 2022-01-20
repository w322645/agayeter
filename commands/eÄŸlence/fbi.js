const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const fbi = new Discord.MessageEmbed()
    .setColor("RED")
    .setImage(
      "http://cdn.lowgif.com/full/877742629e5eeb57-turkish-swat-team-fail-gif-finder-find-and-share-funny.gif"
    )
    .setTitle("FBİ! AÇ LAN KAPIYI PEÇ");
  message.channel.send(fbi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fbi"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "fbi",
  description: "FBi gif atar",
  usage: "!fbi"
};
