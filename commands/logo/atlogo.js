const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen metin girin.** <a:YanpSnennleGif:814802754672656404>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/03e39e4f-dc17-41b8-8865-60fe31c5f369/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#27167A")
  .setImage(linqo)
  .setFooter('At Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['horse','at-logo'],
    permLevel: 0
}

exports.help = {
    name: 'gresen',
    description: 'Yazdığsınız yazıyı bannera çevirir.',
    usage: 'green <syazı>'
}