// Developer NuttyNuke
const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
  var kisi = message.author;
  if(message.mentions.users.first()) var kisi = message.mentions.users.first();
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription(`${message.author} **Adamlık Ölçülüyor...<a:loadng:808561610570203156>**`)
    )
    .then(m => {
      setTimeout(() => {
        m.edit(
          new Discord.MessageEmbed()
        .setTitle("Adamlık ölçer")
        .setDescription(`${kisi} %${Math.floor(Math.random()*101)} adam.`)
    .setColor("#36393f")
        );
      }, 4500);
    });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['adam-ölçer','adamlık-ölçer'],
  permLevel: 0
};

exports.help = {
  name: "adamölçer"
};
//Developer NuttyNuke
