const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen metin girin.** <a:YanpSnennleGif:814802754672656404>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/3d81f5e6-9440-4a60-a07a-22e05ad3ba4d?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#27167A")
  .setImage(linqo)
  .setFooter('Hayalet Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ghost','hayalet-logo'],
    permLevel: 0
}

exports.help = {
    name: 'grsdesdassssddddsssssssen',
    description: 'Yasdddddddddddddzdıssssssssssssssağsdsınız yazıyı bannera çevirir.',
    usage: 'gresdessssddddddddsssssssssn ds<syasazı>'
}