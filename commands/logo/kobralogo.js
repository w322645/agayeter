const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen metin girin.** <a:YanpSnennleGif:814802754672656404>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/1fd728fb-fdb3-4407-a7da-fe55bfcb5fb0?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#27167A")
  .setImage(linqo)
  .setFooter('Kobra Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kobra-yazı'],
    permLevel: 0
}

exports.help = {
    name: 'kobra-logo',
    description: 'Yasssdsdxxxxxxxxxxxdddddddddddzdıssssssssssssssağsdsınız yazıyı bannera çevirir.',
    usage: 'gresdessssssaxddddxddddsssssssssn ds<syasazı>'
}