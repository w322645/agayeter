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
  if(!efes) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle('Lütfen İp Giriniz').setDescription(`**Örnek:** \`${p}mcserver play.hypixel.net\``))
  const msserver = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setTitle(`Minecraft Server`)
    .setTimestamp()
    .setDescription(`
    
    **Server İp :** \`${efes}\`
    
    **Server Port :** \`25565\`
    
    
    
    `)
    .setImage(`http://status.mclive.eu/${efes}/${efes}/25565/banner.png`)

  message.channel.send(msserver);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "mcserver",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
