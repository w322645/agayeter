const Discord = require("discord.js");

  const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {

  var args = message.content.split(' ').slice(1).join(' ');
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return (message.channel.send("❌ Üzgünüz, Yönetici yetkisine sahip değilsiniz.."));

  if (!args) return message.reply("**Kanalın adını ne yapmam gerektiğini söylemelisin.**");
   message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni ismi ***#${args}***`))
  .catch(console.error);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalisimdeğiş','kanaladıdeğiştir','kanaladıdeğiş','kanalismideğiştir','kanalınismideğiştir','kanalisminideğiş','kanalınisminideğiş'],
  permLevel: 0
};

exports.help = {
  name: 'kanalismideğiş',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kanalismideğiş'
};