const discord = require('discord.js');
const db = require("quick.db")
const tdk = require('trsozluk')
exports.run = async(client, message, args) => {
       var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
  var anlams = ("<a:ttnet:764635922917621791>")
   let enginarq = args.slice(0).join(' ')

    if(!enginarq) return message.channel.send(`Aratmak istediğiniz kelimeyi yazın! Örnek:(\`${p}tdk [kelime]\`)`)
    tdk(enginarq).then
    (anlam => {    
        let olmuyor = new discord.MessageEmbed()
  
        .setColor("#36393f")
        .setTitle(enginarq + " isimli kelimenin sonuçları!")
        .addField('Anlam(⬇️)', anlam.anlam)
        .addField('Anlam (2)(⬇️):', anlam.anlam2)
        .addField("Lisan(⬇️)", anlam.lisan)
        .addField('Örnek(⬇️)', anlam.ornek)
        .addField("Atasözü (⬇️)", anlam.atasozu)
         message.channel.send(olmuyor)
           if(!tdk) return message.channel.send("test")
    
      
    });

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tdk' 
  };