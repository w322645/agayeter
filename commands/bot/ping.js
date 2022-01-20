const Discord = require('discord.js');
const db = require('quick.db');
var renk = ('#36393f')
const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
   var olcum = await message.channel.send(new Discord.MessageEmbed().setColor(renk).setDescription(' Ölçüm yapılıyor, lütfen bekleyiniz...'));
   var sonuc = await message.channel.send((`\`\`\`fix\nVeriler alındı...\n\`\`\``))
     await olcum.edit(new Discord.MessageEmbed().setTitle('ping').setColor(renk).setDescription(` **Tepki Gecikmesi** \`${Math.round((sonuc.createdTimestamp - olcum.createdTimestamp - client.ws.ping) )}\`**ms**\n **Bot Gecikmesi** \`${Math.round(client.ws.ping)}\`**ms**`));
  ///
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping was here',
  usage: ''
};