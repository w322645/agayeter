const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const config = require("../../config");

exports.run = async(client, message, args) => {
    var renk = '#36393f'
    let embed = new MessageEmbed().setColor('2F3136').setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))

   

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let user = message.guild.member(member)
    if (!user) return message.reply(new Discord.MessageEmbed().setColor(renk).setTitle('Bir kullanıcı belirt'))
    if (!user.voice.channel) return message.reply(new Discord.MessageEmbed().setColor(renk).setTitle('Bu kullanıcı ses kanalında değil'))

    let kanal = user.voice.channel
    let mik = user.voice.selfMute ? "\`Kapalı\`" : "\`Açık\`"
    let kulak = user.voice.selfDeaf ? "\`Kapalı\`" : "\`Açık\`"
    let yayın = user.voice.streaming ? "\`Açık\`" : "\`Kapalı\`"
    let kanalinfo = user.voice.channel.userLimit
    let kanaldakiler = message.guild.members.cache.filter(x => x.voice.channel && x.voice.channel.id === kanal.id).size
    if (kanal && user.voice.channel) {
        message.channel.send(embed.setDescription(`
${user} Adlı kullanıcı \`${kanal.name}\` adlı ses kanalında.
Mikrofonu: ${mik}
Kulaklığı: ${kulak}
Yayın Bilgisi: ${yayın}
Kanal Bilgisi: \`${kanaldakiler}/${kanalinfo}\`
`))
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nerede","n"],
  permLevel: 2
  };
  
  exports.help = {
  name: "nerede",
  description: "[Admin Komutu]",
  usage: "nerede"
  };