const Discord = require('discord.js')
const talkedRecently = new Set();
exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_ROLES")) 
  return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Rolleri yönet` yetkisine sahip olmanız gerek")  
let guild = message.guild;
let renkkodu = args[0]
if(!renkkodu) return message.channel.send("Bir renk kodu girmeniz gerek")
if(!renkkodu.startsWith("#")) return message.channel.send("Bu bir renk kodu değil!")
let rolad = args.slice(1).join(" ");
  let renk = args.slice(2).join(" ");
if (!rolad) 
  return message.channel.send("Bir isim girmeniz gerek")
var rol = await guild.roles.create({
                data: {
                name: rolad,
                color: renkkodu,
                permissions: []
              }})
               .then(rol => message.channel.send(new Discord.MessageEmbed().setColor(`${renkkodu}`).setDescription(`Oluşturulan Rol Adı \`${rol.name}\` \nRengi: \`${renkkodu}\`\n\nOluşturulan Rol ⬇️\n    <@&${rol.id}>\n\n İşlem Başarılı Bir Şekilde Gerçekleşti`)))
  .catch(console.error)
};
exports.conf = {
  aliases: ['rololuştur','rol-oluştur'],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};
exports.help = {
  name: 'createrole',
  description: 'Yeni rol oluşturur',
  usage: 'rololuştur ',
};