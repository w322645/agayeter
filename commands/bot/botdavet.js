const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const efdadavet = new Discord.MessageEmbed()
  .setColor("#36393f")
  .setTimestamp()
  .setTitle("__EFDA DAVET__")
  .setThumbnail('https://media.discordapp.net/attachments/720029424216440923/735255651638313061/727894683061321759.gif')
  .setDescription(`Merhaba Ben Efda Beni Sunucuna Aşağıdaki \`EFDA DAVET\`'den Ekleyebilirsin :)

[EFDA DAVET](https://discord.com/oauth2/authorize?client_id=782382675297173555&permissions=8&scope=bot)
[WEB ADRESİM](https://www.efdabot.ml)
[DESTEK SUNUCUM](https://discord.gg/2b4GFD9JPB)
[DESTEK SUNUCUM WEB ADRESİ](https://www.efdapriwsunucusu.tk)

`)
  message.channel.send(efdadavet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "davet"
}