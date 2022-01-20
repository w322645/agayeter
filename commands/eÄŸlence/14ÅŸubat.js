const Discord = require("discord.js");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
  let virus = new Date("2022 02-14:00:00");
  let fadeaway = ms(virus - Date.now());
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setDescription(
        `Sevgililer gününe **${fadeaway.days}** gün **${fadeaway.hours}** saat **${fadeaway.minutes}** dakika kaldı!`
      )
      .setFooter("EFDA AŞK DOLU HERYER")
      .setThumbnail(
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1dF8iJ.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f"
      )
  );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sevgünü", "14-şubat", "unutmam", "14şubat"],
  permLevel: 0
};
exports.help = {
  name: "sevgililer-gününe-ne-kadar-var",
  description: "Sevgililer gününe ne kadar kaldığını gösterir"
};
