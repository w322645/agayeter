const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();
exports.run = (client, message, args) => {
  

    var e = db.fetch(`prefix_${message.guild.id}`)
    if(e){
      var p = e
    }
    if(!e){
      var p = "?"
    }


  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply(new Discord.MessageEmbed().setColor("#36393f").setTitle('UYARI !').setDescription(`**Kime Rol Vericeğimi Etiketlemen Lazım**\n\n**ÖRNEK:** ${p}rolver\`(üye)\`\`(rol)\``)).catch(console.error);
  if (rol.length < 1) return message.reply('Rol');
user.roles.add(rol)
const embed = new Discord.MessageEmbed()
.setTitle('Başarılı !')
        .setDescription(`**${user}** Kişisine **${rol}** Rolü verildi!`)
        .setFooter('EFDA', client.user.avatarURL())
        .setColor("#36393f")
        .setTimestamp()
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolver'],
  permLevel: 2
};

exports.help = {
  name: 'rol-ver',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};