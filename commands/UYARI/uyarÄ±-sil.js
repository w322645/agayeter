const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, message, args) => {
var user = message.mentions.users.first();
if(!user) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription('Bir kişi etiketleyin.'))
db.delete(`uyarisicil_${user.id}`)
db.delete(`uyaricezapuani_${user.id}`)
db.delete(`uyarisebep_${user.id}`)
message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`${user.username}'nin ${message.author} tarafından tüm uyarı sicili temizlendi!`))
};
exports.conf = {
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "uyarı-sil"
};

//db.push(`sebepler_${message.guild.id}`, sebep)

  //let sebeps = db.fetch(`sebepler_${message.guild.id}`)

//      message.channel.send(sebeps.join("\n"),{split:true})a