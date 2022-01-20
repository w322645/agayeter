const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  var prefix = db.fetch(`prefix_${message.guild.id}`)
  if(!prefix){
    var p = "?"
  }
  if(prefix){
    var p = prefix
  }
  if (!args[0])
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`Lütfen bir komut belirtin. Eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**`)
    );
  if (args[0] === "ekle") {
    if (!args[1])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `Lütfen bir hazne belirtin. Eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**`
          )
      );
    if (args[1] === "1") {
      var text = args.slice(2).join(" ");
      if (!text)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(
              `Lütfen bir not belirtin. Eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**`
            )
        );
      if (text.length > 1800)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Not'unuz 1800 karakterden uzun!")
        );
      db.set(`not1_${message.author.id}`, text);
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("1. hazneye notunuz kaydedildi!")
      );
    }
    if(args[1] === "2"){
      var text = args.slice(2).join(' ')
      if(!text)
        return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('BLACK')
          .setDescription(`
           Lütfen bir not belirtin eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**
          `)
        )
      if(text.length > 1800)
                return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Not'unuz 1800 karakterden uzun!")
        );
      db.set(`not2_${message.author.id}`, text) 
            return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("2. hazneye notunuz kaydedildi!")
              )
    }
  if(args[1] === "3"){
          var text = args.slice(2).join(' ')
      if(!text)
        return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('BLACK')
          .setDescription(`
           Lütfen bir not belirtin eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**
          `)
        )
      if(text.length > 1800)
                return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Not'unuz 1800 karakterden uzun!")
        );
      db.set(`not3_${message.author.id}`, text) 
            return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("3. hazneye notunuz kaydedildi!")
              )
  }
  if(args[1] === "4"){
             var text = args.slice(2).join(' ')
      if(!text)
        return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('BLACK')
          .setDescription(`
           Lütfen bir not belirtin eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**
          `)
        )
      if(text.length > 1800)
                return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Not'unuz 1800 karakterden uzun!")
        );
      db.set(`not4_${message.author.id}`, text) 
            return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("4. hazneye notunuz kaydedildi!")
              )
  }
  if(args[1] === "5"){
                 var text = args.slice(2).join(' ')
      if(!text)
        return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('BLACK')
          .setDescription(`
           Lütfen bir not belirtin eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**
          `)
        )
      if(text.length > 1800)
                return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Not'unuz 1800 karakterden uzun!")
        );
      db.set(`not5_${message.author.id}`, text) 
    return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("5. hazneye notunuz kaydedildi!")
              )
  } 
  if(args[1] === "6"){
                     var text = args.slice(2).join(' ')
      if(!text)
        return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('BLACK')
          .setDescription(`
           Lütfen bir not belirtin eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**
          `)
        )
      if(text.length > 1800)
                return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Not'unuz 1800 karakterden uzun!")
        );
      db.set(`not6_${message.author.id}`, text) 
    return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("6. hazneye notunuz kaydedildi!")
              )
  }
    if(args[1] === "7"){
                           var text = args.slice(2).join(' ')
      if(!text)
        return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('BLACK')
          .setDescription(`
           Lütfen bir not belirtin eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**
          `)
        )
      if(text.length > 1800)
                return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Not'unuz 1800 karakterden uzun!")
        );
      db.set(`not7_${message.author.id}`, text) 
    return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("7. hazneye notunuz kaydedildi!")
              )
    }
   if(args[1] === "8"){
 var text = args.slice(2).join(' ')
      if(!text)
        return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('BLACK')
          .setDescription(`
           Lütfen bir not belirtin eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**
          `)
        )
      if(text.length > 1800)
                return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Not'unuz 1800 karakterden uzun!")
        );
      db.set(`not8_${message.author.id}`, text) 
    return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("8. hazneye notunuz kaydedildi!")
              )
   }
  if(args[1] === "9"){
     var text = args.slice(2).join(' ')
      if(!text)
        return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('BLACK')
          .setDescription(`
           Lütfen bir not belirtin eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**
          `)
        )
      if(text.length > 1800)
                return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Not'unuz 1800 karakterden uzun!")
        );
      db.set(`not9_${message.author.id}`, text) 
    return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("9. hazneye notunuz kaydedildi!")
              )
  }
   if(args[1] === "10"){
       var text = args.slice(2).join(' ')
      if(!text)
        return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('BLACK')
          .setDescription(`
           Lütfen bir not belirtin eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**
          `)
        )
      if(text.length > 1800)
                return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Not'unuz 1800 karakterden uzun!")
        );
      db.set(`not10_${message.author.id}`, text) 
    return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("10. hazneye notunuz kaydedildi!")
              )
   } 
  }
  if (args[0] === "sil") {
    if (!args[1])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `Lütfen bir hazne belirtin. Eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**`
          )
      );
    if (args[1] === "1") {
      if (db.has(`not1_${message.author.id}`)) {
        db.delete(`not1_${message.author.id}`);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("1. Haznedeki notunuz silindi.")
        );
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Zaten 1. hazneye not kaydedilmemiş!")
        );
    }
  if(args[1] === "2"){
    if (db.has(`not2_${message.author.id}`)) {
        db.delete(`not2_${message.author.id}`);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("2. Haznedeki notunuz silindi.")
        );
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Zaten 2. hazneye not kaydedilmemiş!")
        );
  }
  
  if(args[1] === "3"){
        if (db.has(`not3_${message.author.id}`)) {
        db.delete(`not3_${message.author.id}`);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("3. Haznedeki notunuz silindi.")
        );
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Zaten 3. hazneye not kaydedilmemiş!")
        );
  }
  if(args[1] === "4"){
          if (db.has(`not4_${message.author.id}`)) {
        db.delete(`not4_${message.author.id}`);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("4. Haznedeki notunuz silindi.")
        );
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Zaten 4. hazneye not kaydedilmemiş!")
        );
  }
    if(args[1] === "5"){
                if (db.has(`not5_${message.author.id}`)) {
        db.delete(`not5_${message.author.id}`);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("5. Haznedeki notunuz silindi.")
        );
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Zaten 5. hazneye not kaydedilmemiş!")
        );
        }
    if(args[1] === "6"){
                      if (db.has(`not6_${message.author.id}`)) {
        db.delete(`not6_${message.author.id}`);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("6. Haznedeki notunuz silindi.")
        );
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Zaten 6. hazneye not kaydedilmemiş!")
        );
    }
    if(args[1] === "7"){
                            if (db.has(`not7_${message.author.id}`)) {
        db.delete(`not7_${message.author.id}`);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("7. Haznedeki notunuz silindi.")
        );
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Zaten 7. hazneye not kaydedilmemiş!")
        );
    }
  if(args[1] === "8"){
if (db.has(`not8_${message.author.id}`)) {
        db.delete(`not8_${message.author.id}`);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("8. Haznedeki notunuz silindi.")
        );
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Zaten 8. hazneye not kaydedilmemiş!")
        );
  }
  if(args[1] === "9"){
   if (db.has(`not9_${message.author.id}`)) {
        db.delete(`not9_${message.author.id}`);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("9. Haznedeki notunuz silindi.")
        );
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Zaten 9. hazneye not kaydedilmemiş!")
        ); 
  } 
  if(args[1] === "10"){
       if (db.has(`not10_${message.author.id}`)) {
        db.delete(`not10_${message.author.id}`);
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("10. Haznedeki notunuz silindi.")
        );
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Zaten 10. hazneye not kaydedilmemiş!")
        ); 
  }
  }
  if (args[0] === "göster") {
    if (!args[1])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `Lütfen bir hazne belirtin. Eğer not haznelerinin kullanımını bilmiyorsanız **${p}not yardım**`
          )
      );
    if (args[1] === "1") {
      if (db.has(`not1_${message.author.id}`)) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(`${message.author.username} 1. Hazne Not'u`)
          .setDescription(db.fetch(`not1_${message.author.id}`))
          .setFooter("EFDA Bot");
        return message.channel.send(embed);
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Bot'un 1. haznesinde notunuz bulunmuyor.")
        );
    }
  if(args[1] === "2"){
     if (db.has(`not2_${message.author.id}`)) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(`${message.author.username} 2. Hazne Not'u`)
          .setDescription(db.fetch(`not2_${message.author.id}`))
          .setFooter("EFDA Bot");
        return message.channel.send(embed);
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Bot'un 2. haznesinde notunuz bulunmuyor.")
        );
  }
  if(args[1] === "3"){
         if (db.has(`not3_${message.author.id}`)) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(`${message.author.username} 3. Hazne Not'u`)
          .setDescription(db.fetch(`not3_${message.author.id}`))
          .setFooter("EFDA Bot");
        return message.channel.send(embed);
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Bot'un 3. haznesinde notunuz bulunmuyor.")
        );
  }
  if(args[1] === "4"){
             if (db.has(`not4_${message.author.id}`)) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(`${message.author.username} 4. Hazne Not'u`)
          .setDescription(db.fetch(`not4_${message.author.id}`))
          .setFooter("EFDA Bot");
        return message.channel.send(embed);
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Bot'un 4. haznesinde notunuz bulunmuyor.")
        );
  }
  if(args[1] === "5"){
                 if (db.has(`not5_${message.author.id}`)) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(`${message.author.username} 5. Hazne Not'u`)
          .setDescription(db.fetch(`not5_${message.author.id}`))
          .setFooter("EFDA Bot");
        return message.channel.send(embed);
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Bot'un 5. haznesinde notunuz bulunmuyor.")
        );
  }
   if(args[1] === "6"){
                      if (db.has(`not6_${message.author.id}`)) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(`${message.author.username} 6. Hazne Not'u`)
          .setDescription(db.fetch(`not6_${message.author.id}`))
          .setFooter("EFDA Bot");
        return message.channel.send(embed);
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Bot'un 6. haznesinde notunuz bulunmuyor.")
        );
   }
    if(args[1] === "7"){
  if (db.has(`not7_${message.author.id}`)) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(`${message.author.username} 7. Hazne Not'u`)
          .setDescription(db.fetch(`not7_${message.author.id}`))
          .setFooter("EFDA Bot");
        return message.channel.send(embed);
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Bot'un 7. haznesinde notunuz bulunmuyor.")
        );
    }
   if(args[1] === "8"){
if (db.has(`not8_${message.author.id}`)) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(`${message.author.username} 8. Hazne Not'u`)
          .setDescription(db.fetch(`not8_${message.author.id}`))
          .setFooter("EFDA Bot");
        return message.channel.send(embed);
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Bot'un 8. haznesinde notunuz bulunmuyor.")
        );
   } 
 if(args[1] === "9"){
  if (db.has(`not9_${message.author.id}`)) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(`${message.author.username} 9. Hazne Not'u`)
          .setDescription(db.fetch(`not9_${message.author.id}`))
          .setFooter("EFDA Bot");
        return message.channel.send(embed);
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Bot'un 9. haznesinde notunuz bulunmuyor.")
        ); 
 }  
  if(args[1] === "10"){
      if (db.has(`not10_${message.author.id}`)) {
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle(`${message.author.username} 10. Hazne Not'u`)
          .setDescription(db.fetch(`not10_${message.author.id}`))
          .setFooter("EFDA Bot");
        return message.channel.send(embed);
      } else
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription("Bot'un 10. haznesinde notunuz bulunmuyor.")
        ); 
  }
  }
  if (args[0] === "yardım") {
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("EFDA Not Hazneleri")
    .setImage("https://media.giphy.com/media/dqc4pPxLMs7qfz4W2d/giphy.gif")
      .setThumbnail(client.user.avatarURL())
      .setDescription(
        `
**${p}not ekle <hazne-numarası> <not>** : Hazneye not ekler.
**${p}not sil <hazne-numarası>** : Haznedeki notu siler.
**${p}not göster <hazne-numarası>** : Haznedeki notu gösterir.
__Dikkat! EFDA Botta 10 tane not haznesi bulunur.
NOT: Her kişinin kendi veritabanı vardır.
Kişilerin kaydettiği bu kodu başkaları göremez.
Ve herkes not kaydedebilir.__
`
      )
      .setFooter(`${message.author.tag} istedi!`);
    return message.channel.send(embed); 
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "not",
  description: "",
  usage: "(prefix)not yardım"
};
