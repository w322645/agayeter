const Discord = require('discord.js');
const db = require('quick.db');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
  var uyarı = db.fetch(`uyarisicil_${message.author.id}`)
if(!uyarı){
    var uyarı = "0"
}
  var kanal = await db.fetch(`uyarilog_${message.guild.id}`);
  var kanal = message.guild.channels.cache.find(
    channel => channel.id === kanal
  )
  
    var e = db.fetch(`prefix_${message.guild.id}`)
    if(e){
      var p = e
    }
    if(!e){
      var p = "?"
    }

var yetkili = db.fetch(`uyariyetkili_${message.guild.id}`)
if(!yetkili) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`Uyarı yetkilisi rol'ü ayarlanmamış! \n\n**Ayarlamak İçin =** \`${p}uyarı-ayar yetkili @yetkili-rol\` `))
if(!message.member.roles.cache.has(yetkili)) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`Bu komutu kullanmak için <@&${yetkili}> rolüne sahip olmalısın!\n\n**Yardım İçin =** \`${p}uyarı-ayar\``))
var user = message.mentions.users.first();
if(!user) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription('Bir kişi etiketleyin.'))
var sebep = args.slice(1).join(' ')
if(!sebep) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription('Bir sebep belirtin!'))
db.add(`uyarisicil_${user.id}`, 1)
db.add(`uyaricezapuani_${user.id}`, 10)
db.push(`uyarisebep_${user.id}`, `**${message.author.username} => **` + sebep)
message.guild.member(user).send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`${message.guild.name} sunucusunda ${sebep} sebebiyle uyarıldınız! \n  Uyarı Sayınız \`${uyarı}\` \n Yetkili: ${message.author}`))
message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`${user.username}, ${message.author} tarafından ${sebep} sebebiyle uyarıldı! \n Kişinin Uyarı Sayısı \`${uyarı}\``))
kanal.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`${user.username}, ${message.author} tarafından ${sebep} sebebiyle uyarıldı!  \n Kişinin Uyarı Sayısı \`${uyarı}\` `))
};
exports.conf = {
    aliases: ["uyarı"],
    permLevel: 0
};
exports.help = {
  
    name: "uyar"
};

