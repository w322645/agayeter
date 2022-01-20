const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`Dostum yazı yazmalısın <a:YanpSnennleGif:814802754672656404>`);
  const linqo = `https://habbofont.net/font/steampunk/${yazi}.gif`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Başarıyla Oluşturuldu");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["altınyazı", "altın-foto", "altın-yazı"],
  permLevel: 0
};

exports.help = {
  name: "altın",
  description: "Yazdığınız yazıyı dinamik çevirir.",
  usage: "altın <yazı>"
};
