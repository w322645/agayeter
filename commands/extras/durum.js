const Discord = require('discord.js')
const talkedRecently = new Set();
exports.run = async (cleint, message, bot, args) => {

 if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }

let sadecebot = message.guild.members.cache.filter(m => m.user.bot).size;
let sadeceüye = message.guild.memberCount;
let totalüye = sadeceüye - sadecebot;

const kullanıcıdurumu = new Discord.MessageEmbed()
.setColor(`#36393f`)
.setTitle('`Sunucu Durumu`')
.setDescription(`
<a:online:814802770329993216> Aktif: **${message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}** <a:idle:814802757776703498> Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** <a:dnd:814802718278287391> Rahatsız Etmeyin: **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** <a:offline:814802767586787348>  Çevrimdışı: **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** <:bot:849313154718498826> Bot: **${sadecebot}** 
`)
.setFooter(`Toplam Kullanıcı Sayısı: ${totalüye}`)
message.channel.send(kullanıcıdurumu)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['durumlar','kd','kullanıcı-durumu','kullanıcıdurumu'],
    permLevel: 0
}
exports.help = {
    name: "durum",
     description: 'Sunucudaki kullanıcı istatistiklerini sergiler.',
    usage: '${orefix}kullanıcıdurumu',
} 