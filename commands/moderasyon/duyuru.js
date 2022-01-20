const Discord = require('discord.js');
  const talkedRecently = new Set();
exports.run = (client, message, args) => {
 


    let mesaj = args.slice(0).join(' ');

    if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    message.channel.send('||@everyone||').then(x => {x.delete({timeout: 3000})});
    const embed = new Discord.MessageEmbed()
    .setAuthor('')
 .setTitle('📣 DUYURU ! 📣')
    .setColor('BLUE')
    .setDescription(`${mesaj}`)
    return message.channel.send(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
}; 