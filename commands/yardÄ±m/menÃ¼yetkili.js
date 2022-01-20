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
  const yetkiliamq = new Discord.MessageEmbed()
    .setColor("#36393f")
  .setImage('https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2Fyetk%C4%B1l%C4%B1.png?v=1621708531738')
      .setAuthor("🔥 EF&DA'in YETKİLİ Menüsüne hoşgeldin! 🔥")
    .setTitle(`:gem: EF&DA'in Yetkili Menüye hoşgeldin! Prefix \`${prefix}\``)
    .setTimestamp()
    .setDescription(
      `> **» ${prefix}dashboard** : Son Zamanlardaki Sunucu Giriş Loglarını Gösterir.\n> **» ${prefix}sayaç-sistemi** : Belirlediğiniz Kanala Belirlediğiniz Hedef İ Saymaya Başlar.\n> **» ${prefix}yavaşmod** : Yazdığınız Chat'te Kaç Saniye Aralıkla Mesaj Atılmasını Sağlarsınız.\n> **» ${prefix}uyarı-ayar** : Efda Çok Gelişmiş Uyarı Sistemi Uyarı Sistemi.\n> **» ${prefix}resimli-hgbb** : Belirlediğiniz Kanala Resimli Giren Veya Çıkan Kişinin Avatarını Atar(Oto Sayaçlı).\n> **» ${prefix}reklamtaraması** : Sunucudaki Herkese Reklam Taraması Yapar.\n> **» ${prefix}kanalisimdeğiş** : Yazdığınız Kanalın İsmini Değiştirir.\n> **» ${prefix}kanalaçıklama** : Yazdığınız Kanalın Açıklamasını Değiştirir.\n> **» ${prefix}bansor** : Kişinin İd sini Yazarsanız Ban Nedenini Gösterir.\n> **» ${prefix}taşı** : Etiketlenen Kişiyi Belirtilen Ses kanalı id sine Taşır.\n> **» ${prefix}yazı-kanal-aç** : Belirttiğiniz İsimde Metin Kanalı Açar.\n> **» ${prefix}rolbilgi** : Etiketldiğiniz Rolün Bilgisini Verir.\n> **» ${prefix}rolüye** : O Role Sahip Kullanıcıları Atar.\n> **» ${prefix}unmute** : Etiketlenin Kişinin Belirlenen Sebebiyle Susturmasını kaldırır.\n> **» ${prefix}mute** : Etiketlenen Kişiye Belirlediğiniz Süre Kadar Susturur.\n> **» ${prefix}küfür-engel** : Küfür Engeli Açarsınız.\n> **» ${prefix}reklam-engel** : Reklam Engeli Açarsınız.\n> **» ${prefix}kanal-kapat** : Sohbeti Kapatırsınız.\n> **» ${prefix}kanal-aç** : Sohbeti Açarsınız.\n> **» ${prefix}oto-cevap** : Oto Cevap Açarsınız (ig.gn.sa.as).\n> **» ${prefix}kayıt-menü** : Kız Erkek Kayıt Menüsünü Açar.\n> **» ${prefix}öneri** : ${prefix}öneri-ayarla #kanal Belirlediğin Kanala Öneri Yapar.\n> **» ${prefix}embed-oluştur** : Embed Oluşturursunuz.\n> **» ${prefix}kanalres** : Olduğunuz Metin Kanalını Siler Ve Yeniden Yükler.\n> **» ${prefix}hg-bb** : Hoşgeldin Bay Bay Ayarlarsınız.\n> **» ${prefix}çek** : Etiketlenen Kişiyi Sesliye Çeker.\n> **» ${prefix}kanalid** : Etiketlenen Kanalın İd sini Verir.\n> **» ${prefix}rolal** : Etiketlediğiniz Kişiye Etiketlenen Rolü Alır.\n> **» ${prefix}rolver** : Etiketlediğiniz Kişiye Etiketlenen Rolü Verir.`
    );
  message.channel.send(yetkiliamq);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "yetkili", "moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  category: "kullanıcı",
  description: "yetkili Menüsü.",
  usage: "!yetkili"
};
//sayaç