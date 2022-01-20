// Developer NuttyNuke
const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${message.author} **Token Hazırlanıyor...<a:loadng:808561610570203156>**`)
    )
    .then(m => {
      setTimeout(() => {
        m.edit(
          new Discord.MessageEmbed()
            .setDescription(`${message.author} **Al Sana Token**`)
            .setImage(
              "https://i.ytimg.com/vi/a1-e4F2ZEoQ/hqdefault.jpg"
            )
        );
      }, 4500);
    });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "token"
};
//Developer NuttyNuke
