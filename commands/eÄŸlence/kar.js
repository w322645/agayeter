const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  
  let çalmahaa = new Discord.MessageAttachment(`https://api.no-api-key.com/api/v2/snow?image=${user.avatarURL({size: 1024, format: 'png'})}`, `kar.png`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`İşte kar efekt uygulanmış avatar!`)
  .setColor("RANDOM")
  .attachFiles(çalmahaa)
  .setImage(`attachment://kar.png`)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();
  
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kar"],
  permLevel: 0
};

exports.help = {
  name: "resim-kar",
  description: "",
  usage: ""
};