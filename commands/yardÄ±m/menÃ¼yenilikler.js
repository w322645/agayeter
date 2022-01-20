const Discord = require("discord.js");
const db = require("quick.db");
const talkedRecently = new Set();
exports.run = async (client, message, args) => {


  if (!message.guild) {
    var prefix = "?";
  } else {
    var prefix = db.fetch(`prefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = "?";
    }
  }
  const yenilikler = new Discord.MessageEmbed()
    .setImage(
      "https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2Fyeni2.png?v=1621708534311"
    )
    .setColor("#36393f")
    .setTitle(
      `<:menu:820288234772889630> Prefix \`${prefix}\` Yenilikler EFDA <:bult:820288713493708841>`
    )
    .setFooter(`Ana menü için \n${prefix}yardım`)
    .setTimestamp()
    .setDescription(
      `\`\`\`bash\n "EFDA YENİLİKLER"\`\`\`\n\n**🍬 EFDA BOTUNA YENİ GELEN KOMUTLAR**\`\`\`fix\n${prefix}rol-oluştur : Size Belirttiğiniz Ad da ve renk de Rol Oluşturur\n\n${prefix}rol-rengi: Etiketlediğiniz Rolün Rengini Değiştirirsiniz.\n\n${prefix}ininal : Yazdığınız Miktarda Para Transfer Eder.\n\n${prefix}sayaç-sistemi : Belirlediğiniz Kanala Belirlediğiniz Hedef İ Saymaya Başlar.\n\n${prefix}resimli-hgbb : Belirlediğiniz Kanala Resimli Giren Veya Çıkan Kişinin Avatarını Atar(Oto Sayaçlı).\n\n${prefix}cihaz : Etiketlenen Kişinin Hangi Cihazdan Bağlandığını Gösterir.\n\n\`\`\``
    );
  message.channel.send(yenilikler);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yenilikler", "efday", "efda-yenilikler"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "efda-yenilikler",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
