const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  
  let resimişte = new Discord.MessageAttachment(`https://api.no-api-key.com/api/v2/shoot?image=${user.avatarURL({size: 1024, format: 'png'})}`, `ateş.png`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`İşte resmin!`)
  .setColor("RANDOM")
  .attachFiles(resimişte)
  .setImage(`attachment://ateş.png`)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();
  
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ateş"],
  permLevel: 0
};

exports.help = {
  name: "resim-ateş",
  description: "",
  usage: ""
};