const Discord = require('discord.js');
const ms = require('ms');
const db = require("quick.db")

exports.run = async (client, message, args) => {
    if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  var embeds = (new Discord.MessageEmbed())
var color = "0x36393E"
    let Kanal = args[0];
    if(!Kanal) return message.reply(embeds.setColor(color).setDescription("Kanalı Oluşturmadan Önce Bir Kanal Adı Belirtmeniz Gerek"))
    let Süre = args[1];
    if(!Süre) return message.reply(embeds.setColor(color).setDescription(`Kanalı Oluşturmadan Önce Bir Süre Belirtiniz ↓ \n \`${prefix}süreli-kanal (kanal-adı) (süresi)\``))

    let Kanal1 = await message.guild.channels.create(Kanal, "text")
    message.channel.send(embeds.setColor(color).setDescription(`\`${Kanal1.name}\` adlı kanal, oluşturuldu. (${Süre} Kadar Süreli)`))

    setTimeout(() => {

        message.guild.channels.cache.get(Kanal1.id).delete();
        message.channel.send(embeds.setColor(color).setDescription(`\`${Kanal1.name}\` adlı (${Süre} Kadar Süreli Olan Kanal kaldırıldı.`))

    }, ms(Süre))

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['geçici-kanal'],
    permLevel: 2
};

  exports.help = {
    name: 'süreli-kanal',
    description: '.',
    usage: 'süreli-kanal'
};