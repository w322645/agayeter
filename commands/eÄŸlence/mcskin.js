const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    let efes = args.slice(0).join(' ')
   var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
  if(!efes) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle('Lütfen İsim Giriniz').setDescription(`**Örnek:** \`${p}mcskin (kullanıcı adı)\``))
  const mcskin = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setTitle(`Minecraft Skin`)
    .setThumbnail(`https://minotar.net/avatar/${efes}`)
    .setTimestamp()
    .setDescription(`
    
    **Kullanıcı Adı:** \`${efes}\`
    
   
    
    
    
    `)
    .setImage(`https://minotar.net/body/${efes}/100.png`)

  message.channel.send(mcskin);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "mcskin",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
