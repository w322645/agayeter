const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen metin girin.** <a:YanpSnennleGif:814802754672656404>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/b5be66f6-a6a6-42dc-ab67-de8f80e96291?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#27167A")
  .setImage(linqo)
  .setFooter('Panter Logo Oluşruruldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['panther','panter-logo'],
    permLevel: 0
}

exports.help = {
    name: 'grssdesdassssddddsssssssen',
    description: 'Yasdsddddddddddddzdıssssssssssssssağsdsınız yazıyı bannera çevirir.',
    usage: 'gresdesssssddddddddsssssssssn ds<syasazı>'
}