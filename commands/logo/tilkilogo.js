const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen metin girin.** <a:YanpSnennleGif:814802754672656404>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/15a82f06-9222-49e2-9afa-a738ddca8f5c/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#27167A")
  .setImage(linqo)
  .setFooter('Tilki Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['fox','tilki-logo'],
    permLevel: 0
}

exports.help = {
    name: 'grsdssadsensadsad',
    description: 'Yasdsadsğasdasdsdsınız yazıyı bannera çevirir.',
    usage: 'gresdendssaaasddassyazı>'
}