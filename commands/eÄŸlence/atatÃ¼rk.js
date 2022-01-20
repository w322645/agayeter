const Discord = require("discord.js");

exports.run = async (client, message) => {
  const vatan = new Discord.MessageEmbed()
    .setAuthor("Mustafa Kemal Atatürkü Anıyoruz.")
    .setColor(3447003)
    .setImage("https://i.pinimg.com/originals/6f/0e/da/6f0eda021f598ec598137e75e96c77b5.gif");
  return message.channel.send(vatan);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["atatürk"],
  permLevel: 0
};
//KobsCode
exports.help = {
  name: "atatürk",
  description: "",
  usage: ""
};
