const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  const yarrakvars = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setAuthor("🔥 EF&DA'in Kayıt Sistemi hoşgeldin! 🔥")
    .setTitle(`:gem: Prefix \`${prefix}\` Kayıt Menü EFDA`)
    .setTimestamp()
    .setThumbnail("https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2Fezgif.com-gif-maker-6c3ab6491a5e480d7.gif?v=1621708715117")
    .setImage("https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2Fkay%C4%B1t%20men%C3%BC.png?v=1621708549389")
    .setDescription(
      //Tamam yap ama en son kısmı yapma orası başka ben ayarlarım
      `> **»HG BB İstiyorsanız (${prefix}hg-bb : Den Ayarlayabilirsiniz)**\n\n> **» ${prefix}kayıt-yetkili** : Hangi Rolün Kayıt Yapabilceğini Belirlersiniz.\n> **» ${prefix}alınacak-rol** : Kayıt Sız Rolünü Ayarlarsınız Etiketlemeniz Gerekmektedir.\n> **» ${prefix}erkek-rol** : Erkek Rolünü Ayarlarsınız Etiketlemeniz Gerekmektedir.\n> **» ${prefix}kayıt-tag** : Kayıt Edilen Kişilerin Başınıza Belirtilen Tagı Ekler.\n> **» ${prefix}kız-rol** : kız Rolünü Ayarlarsınız Etiketlemeniz Gerekmektedir.\n> **» ${prefix}kayıt-kanal #kanal** : Kayıtın Yapılıcağı Kanalı Belirlersiniz.\n> **» ${prefix}kayıt-log #kanal** : Kayıt Yapıldığında Log Atıcak Kanalı Belirlersiniz.\n> **» ${prefix}kayıt-sıfırla** : Kayıt Sistemini Sıfırlarsınız.\n`
    );

  message.channel.send(yarrakvars);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kmenü", "kayıtm","kayıt-menu"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "kayıt-menü",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
