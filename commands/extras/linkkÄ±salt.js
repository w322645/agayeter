const Discord = require("discord.js");
const shorten = require("isgd");
const db = require('quick.db')
exports.run = (client, message, args, tools) => {
  var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var prefix = e
  }
  if(!e){
    var prefix = "?"
  }//yap şimdi 
  
  message.delete();
  if (!args[0])
    
    return message.channel.send(
      ` ** » Kullanım: ${prefix}kısalt <URL> <isim> 
      
      » Örnek: ${prefix}kısalt https://www.efdabot.ml Efda ** `
    );

  if (!args[1]) {
    shorten.shorten(args[0], function(plasmic) {
      if (plasmic.startsWith("Hata:"))
        message.channel.send("**Lütfen doğru URL adresi giriniz.**");

      message.channel.send(`**<${plasmic}>**`);
    });
  } else {
    shorten.custom(args[0], args[1], function(plasmicc) {
      if (plasmicc.startsWith("Hata:"))
        message.channel.send(`**<${plasmicc}>**`);

      message.channel.send(`**<${plasmicc}>**`);
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kısalt",
  description: "İstediğiniz URLni Kısaltır. ",
  usage: "kısalt"
}; //Plasmic Code・xKqntyZ_
