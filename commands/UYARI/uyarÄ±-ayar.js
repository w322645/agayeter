const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
  var e = db.fetch(`prefix_${message.guild.id}`)
    if(e){
      var p = e
    }
    if(!e){
      var p = "?"
    }
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`Bir komut belirtmelisiniz.EFDA Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyarı-ayar yardım\``))
if(args[0] === "log"){
var kanal = message.mentions.channels.first();
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`Bir kanal belirtmelisiniz. EFDA Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyarı-ayar yardım\``))
db.set(`uyarilog_${message.guild.id}`, kanal.id)
return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription("Uyarı Log kanalı ayarlandı."))
};
if(args[0] === "yetkili" || args[0] === "görevli"){
var rol = message.mentions.roles.first();
if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`Bir rol belirtmelisiniz. EFDA  Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyarı-ayar yardım\``))
db.set(`uyariyetkili_${message.guild.id}`, rol.id)
return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`\`Uyarı Yetkilisi\` rol'ü <@&${rol.id}> olarak ayarlandı!`))
};
if(args[0] === "sınır"){
var sınır = args.slice(1).join('')
if(!sınır) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`Bir sayı belirtmelisiniz. EFDA Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyarı-ayar yardım\``))
if(isNaN(sınır)) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`Bir sayı belirtmelisiniz. EFDA  Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyarı-ayar yardım\``))
if(sınır > 2000) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription(`Girdiğiniz sayı 2000'den küçük olmalıdır.`))
db.set(`uyarisinir_${message.guild.id}`, sınır)
return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription("Uyarı sınırı ayarlandı!"))
};
if(args[0] === "cezalı"){
var rol = message.mentions.roles.first()
if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setDescription("Bir rol berlirtin!"))
db.set(`uyaricezarol_${message.guild.id}`, rol.id)
return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setDescription("Uyarı ceza rolü ayarlandı!"))
};
if(args[0] === "yardım"){
const embed = new Discord.MessageEmbed()
.setColor('#36393f')
.setTitle("Efda Uyarı Sistemi | Yardım Paneli")
.setDescription(`
**${p}uyarı-ayar log** : Log kanalını ayarlar.
**${p}uyarı-ayar yetkili** : Uyarı yetkilisini ayarlar.
**${p}uyarı-ayar sınır** : Ceza Puanı sınırını ayarlar.
**${p}uyarı-ayar cezalı** : Ceza rolünü ayarlar
**${p}sicil @kisi** : Kişinin uyarı geçmişini gösterir.
(Eğer kişi etiketlenmezse kendisinin uyarı geçmişini gösterir)
**${p}uyarı-sil @kisi** : Kişinin tüm uyarı geçmişini siler.
**${p}uyar @kisi <sebep>** : Kişiyi uyarır.
`)
return message.channel.send(embed)
};
};
exports.conf = {
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "uyarı-ayar"
};