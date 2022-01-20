const Discord = require("discord.js");
exports.run = (client, message, args) => {
  

  message.channel.send("Sunucudan ayrılıyorum sahibim!");
  message.guild.leave();
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4 //bot sahibi permine ayarlayın
};

exports.help = {
  name: "ayrıl",
  description: "Exay Bot",
  usage: "kedi"
};
