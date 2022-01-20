const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    var uygulama = ('https://play.google.com/store/apps/details?id=tw.mobileapp.qrcode.banner')
    let efes = args.slice(0).join(' ')
   var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
  if(!efes) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle('Lütfen Link Giriniz').setDescription(`**Örnek:** \`${p}qr https://www.efdapriwsunucusu.tk\``))
  const efdapriw = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setTitle(`Qr Buyrun Qr Kod`)
    .setTimestamp()
    .setDescription(`
    
    **Link :** \`${efes}\`
    
    **Qr Kod Okutmak İçin:** \n__${uygulama}__ **Kullanabilirsiniz**
    
    `)
    
    .setImage(`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${efes}`)

  message.channel.send(efdapriw);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "qr",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
