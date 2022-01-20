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
  const menüü2 = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setAuthor("🔥 EF&DA'in Özel Menüsüne hoşgeldin! 🔥")
    .setTitle(`:gem: Prefix \`${prefix}\` Özel Menü 2 EFDA`)
    .setTimestamp()
    .setDescription(//kaçharf
      `> **» ${prefix}film-öner** : Size Katagoriye Göre Filmler Önerir.\n> **» ${prefix}kahve-ısmarla** : Etiketlenen Kişiye Kahve Isrmarlar.\n> **» ${prefix}ambulans** : Bot Sohbete Ambulans Atar.\n> **» ${prefix}ara110** : Bot Sohbete İtfaye Atar.\n> **» ${prefix}havadurumu** : Bot sizin İçin Yazdığınız İlçenin Hava durumunu Gösterir.\n> **» ${prefix}espri** : Bot sizin için espri yapar.\n> **» ${prefix}hesapla** : Belirttiğiniz matematik işlemini bot yapar.\n> **» ${prefix}kartopu** : Etiketlediğiniz kişiye kartopu atarsınız.\n> **» ${prefix}kralol** : Kral olmanıza yarar.\n> **» ${prefix}slots** : Slot oynarsınız.\n> **» ${prefix}taksimdayı** : Taksim Dayı gifi atar.\n> **» ${prefix}tokat** : Etiketlediğiniz kişiyi tokatlarsınız.\n> **» ${prefix}yazı-tura** : Bot ile yazı-tura oyununu oynarsınız.\n> **» ${prefix}yılbaşı** : Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.\n> **» ${prefix}öp** : Etiketlediğiniz kişiyi öpmenize yarar.\n> **» ${prefix}şekerye** : Bot size şeker ikram eder.\n> **» ${prefix}p** : Botun Geçikme Süresini Size Atar.\n> **» ${prefix}avatar** : Yazan Kişinin avatarını yollar.\n> **» ${prefix}ters** : Yazdığınız Yazıyı Ters Yazar.\n> **» ${prefix}atatürk** : MUSTAFA KEMAL ATATÜRK GÖNDERİR.\n> **» ${prefix}botbilgi** : Bot İstatistlik Lerini Atar.\n> **» ${prefix}aykutelmas :** Aykut Elmas Lafı Atar.\n> **» ${prefix}yazı-yarışı :** Size 3 Saniye Sonra Kelime Verir Yarışırsınız.\n> **» ${prefix}kaçharf :** Yazdığınız Kelimenin Kaç harfli Olduğunu Yazar.\n> **» ${prefix}sigaraiç :** Bot Sigara İçer.\n> **» ${prefix}zarat :** Sohbete Zar Atar.`
    )
    .setImage("https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2FMEN%C3%9C2.png?v=1621708536580");
  message.channel.send(menüü2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["m2", "menü2"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "menü2",
  category: "kullanıcı",
  description: "Menü2 Menüsü.",
  usage: "!menü"
};
