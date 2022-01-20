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
  const desteklann = new Discord.MessageEmbed()
    .setColor("#d205fe")
    .setAuthor("🔥 EF&DA'DESTEK 🔥")
    .setTitle(
      `☎️ <a:1417_Bell:814532977337171989> EF&DA'in DESTEK SEKMESİNE hoşgeldin! Prefix \`${prefix}\``
    )
    .setTimestamp()
    .setDescription(
      "__**» BOTUN DESTEK SUNUCUSUNA GİTMEK İÇİN:**__\n\n <a:UrlGif:820284492509347931> **https://www.efdabot.ml/** <a:UrlGif:820284492509347931>\n\n\n\n```fix\n BENİM SAHİBİM EFE SUALP SÖZÜGERÇEK\n``` "
    )
  
    .setImage("https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2FEFDA%20DESTEK.png?v=1621708553406");
  message.channel.send(desteklann);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [
    "ds",
    "destek",
    "desteksunucu",
    "destek-sunucu",
    "desteksunucusu",
    "destek-sunucusu",
    "d"
  ],
  permLevel: 0
};

exports.help = {
  name: "destek",
  category: "kullanıcı",
  description: "Destek Suncu Menüsü.",
  usage: "!destek"
};
