const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen metin girin.** <a:YanpSnennleGif:814802754672656404>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/1855d9da-4d1b-478e-92dc-0202d4239fcc/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#36393f")
  .setImage(linqo)
  .setFooter('Havalı Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tech','havalı-yazı'],
    permLevel: 0
}

exports.help = {
    name: 'havalı-logo',
    description: 'Yasdfdsadsğasdasdsdsınız yazıyı bannera çevirir.',
    usage: 'gresssdendssaaasddassyazı>'
}