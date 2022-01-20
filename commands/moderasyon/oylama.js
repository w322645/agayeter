const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db')
  const talkedRecently = new Set();
module.exports.run = async (client, message, args) => {



    var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu kullanmanız için `Yönetici` yetkisine sahip olmalısınız.') 


  let d = await db.fetch(`okanal_${message.guild.id}`)
  const sea = message.guild.channels.cache.get(d)
  if (!sea) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`UYARI <a:YanpSnennleGif:814802754672656404>`).setDescription(`Oylama kanalı ayarlanmamış. Ayarlamak için \`${p}oylama-kanal #kanal\``))

    let yazi = args.slice(0).join(' ')
    if (!yazi) return message.channel.send('Lütfen Oylamada Ne Olacağını Yaz!')
    message.channel.send(`Oylama gönderildi. Gönderilen kanal: <#${d}>`)
    const embed = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setTitle('||@everyone|| ||@here||')
    .addField('Heey , Oylamaya Katılmayı Unutma!',`\`${yazi}\``)
    .setAuthor(`EFDA Oylama Sistemi`)
    .setThumbnail(`https://cdn.pixabay.com/photo/2013/07/13/13/13/ballot-160570_960_720.png`)
    .setFooter(`${message.author.tag} Tarafından Yapıldı.`, message.author.avatarURL())
    .setTimestamp()
     sea.send('',{embed: embed}).then(m => {
   let re = m.react('✅');
   let ra = m.react('❌');
        
    })
    }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['oylama-yap', 'oylamayap', 'oylamalar'],
 permLevel: 2,
 kategori: "yetkili"
};

exports.help = {
 name: 'oylama',
 description: 'Bulunduğunuz kanala oylama yapar.',
 usage: 'oylama'
};