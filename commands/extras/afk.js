const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
 
  let user = message.author
  let sebep = args.join(" ")
 
  if (!sebep) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setAuthor("Uyarı").setDescription(`Bir Sebep Yazmalısın <a:YanpSnennleGif:814802754672656404>`))
 
  db.set(`afk_${user.id}`, sebep)
  message.channel.send(new Discord.MessageEmbed().setTitle("AFK").setColor("#36393f").setDescription(`__Artık__ \`${sebep}\` __sebebiyle AFK'sın.__`))
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}