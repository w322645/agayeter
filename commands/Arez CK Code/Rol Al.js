const Discord = require('discord.js');
exports.run = async(client, message, args) => {
var user = message.mentions.members.first();
if(!user) return message.reply("Kimden Rol Alacağımı Belirtmelisin")
var rol = message.mentions.roles.first();
if(!rol) return message.reply("Hangi Rol")
user.roles.remove(rol.id)
return message.reply("**Kişiden Belirtilen Rol Başarılı Bir Şekilde Alındı**")
};
exports.conf = {
  aliases: ["rolal"],
  permLevel: 3
};
exports.help = {
  name: "rol-al"
}