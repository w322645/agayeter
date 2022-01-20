const Discord = require("discord.js");
const db = require("quick.db");
  const talkedRecently = new Set();
exports.run = async (client, message, args) => {


  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  const yarrakvar = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setAuthor("🔥 EF&DA'in Özel Menüsüne hoşgeldin! 🔥")
    .setTitle(`:gem: Prefix \`${prefix}\` Özel Menü EFDA`)
    .setTimestamp()
    .setDescription(//Tamam yap ama en son kısmı yapma orası başka ben ayarlarım 
      `> **» ${prefix}git** : Gitmek İstediğiniz Kişiye Gelebilirmiyim Diye Sorar.\n> **» ${prefix}kar** : Resminize Kar Efekti Yapar.\n> **» ${prefix}ateş** : Kendinize Ateş Edersiniz.\n> **» ${prefix}mesajdöndür** : Yazdığınız Mesajı Dödürür.\n> **» ${prefix}araba** : Sohbet Kanalına Araba Fotoğrafları Atar.\n> **» ${prefix}oylama** : Yazdığınız Şeye Göre Oylama Yapar.\n> **» ${prefix}kısalt** : Linkin Yanına Yazdığınız ada Göre Link Kısaltır.\n> **» ${prefix}kurallar** : EFDA KURALLARINI GÖSTERİR.\n> **» ${prefix}bitcoin** : Bitcoin Fiyatlarını Gösterir.\n> **» ${prefix}bilgisayarabak** : Bilgisayara Bakma Gifi Atar.\n> **» ${prefix}depremler** : Türkiyedeki Son 10 Depremi Atar.\n> **» ${prefix}say** : Sunucudaki Üyeleri Sayar Bilgi Verir.\n> **» ${prefix}bankasoy** : 2 Kere Yazmak Gerekir Banka Soyar.\n> **» ${prefix}yumruk-at** : Etiketlediğiniz Kişiye Yumruk Atarsınız.\n> **» ${prefix}sunucupp** : Sunucu PP sini Atar.\n> **» ${prefix}fbi** : FBİ gifi atar.\n> **» ${prefix}aşkölçer** : Aşkınızı ölçer.\n> **» ${prefix}aduketçek** : Etiketlediğiniz kişiye aduket çekersiniz.\n> **» ${prefix}avatar** : Etiketlediğiniz Kişinin Avatarını Atar.\n> **» ${prefix}ara155** : Polisi aramanıza yarar.\n> **» ${prefix}ay** : Ay gifi atar.\n> **» ${prefix}balık-tut** : Denizde balık tutarsınız.\n> **» ${prefix}beşlik** : Etiketlediğiniz kişiyle beşlik çakarsınız.\n> **» ${prefix}dünya** : Dünya gifi atar.\n> **» ${prefix}efkarım** : Şu anda olan efkarınızı ölçersiniz.`
    )
    .setImage("https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2FMEN%C3%9C.png?v=1621708538991");
  message.channel.send(yarrakvar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["menü", "m","m1"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "menü",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
