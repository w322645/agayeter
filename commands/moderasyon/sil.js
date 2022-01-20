const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = function(client, message, args) {

  const m = args.join(' ');
  if(!m) return message.channel.send('**:gear: Bir miktar girmelisiniz!**').then(x => {x.delete({timeout: 3000})});
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**:xx: Bu işlem için gerekli izne sahip değilsiniz!**').then(x => {x.delete({timeout: 3000})});
  if(m < 2) return message.channel.send(':gear: **En az 2 mesaj silebilirim!**').then(x => {x.delete({timeout: 3000})})
 if(m>100) return message.channel.send('**:gear: En fazla 100 mesaj silebilirim!**').then(x => {x.delete({timeout: 3000})})
  
  message.channel.bulkDelete(m);


  message.channel.send(
  new Discord.MessageEmbed()
    .setTitle(':gear: **Başarılı!**')
    .setDescription('**Başarı ile __'+m+'__ mesaj sildim! :gear:**')
  .setColor('0x36393E')
    
  ).then(x => {x.delete({timeout: 3000})}
  )
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temizle','delete','sil'],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100'
};