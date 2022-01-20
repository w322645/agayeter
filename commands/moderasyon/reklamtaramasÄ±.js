const Discord = require('discord.js')
const ayarlar = require('../../config.json')
  const talkedRecently = new Set();
exports.run = (client, message, args) => {
  

  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);

    const members = message.guild.members.cache.filter(member => member.user.presence.activities && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.activities.name));
    const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const embed = new Discord.MessageEmbed()
        .addField('📡 Oynuyor Mesajı Reklam Taraması', members.map(member => `📡 Reklam bulundu: ${member} - ${member.user.presence.activities.name}`).join("\n") || "Kimsenin ``Oynuyor Mesajı`` reklam içermiyor. 🎉")
        .addField('📡 Kullanıcı Adı Reklam Taraması', memberss.map(member => `📡 Reklam bulundu: ${member} - ${member.user.username}`).join("\n") || "Kimsenin ``Kullanıcı Adı`` reklam içermiyor. 🎉")
        .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklamara', 'reklamara', 'reklamtaraması'],
    permLevel: 1
}

exports.help = {
    name: 'reklamtaraması',
  category: 'moderasyon',
    description: 'Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar.',
    usage: 'reklam-taraması'
}