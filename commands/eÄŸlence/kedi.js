const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
   var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }

  const kedi = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setTitle(`Kedi Fotoğrafı Oluşturuldu`)
    .setTimestamp()
    .setDescription(`
    
    
  
    
    `)
    .setImage(`https://cataas.com/cat/gif`)

  message.channel.send(kedi)
  if(!kedi) message.channel.send("Sorun Oluştu")
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "kedi",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
