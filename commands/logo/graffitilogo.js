const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const yazi = args.slice(0).join("+");

  if (!yazi)
    return message.channel.send(
      `**Lütfen yazı yazınız.** <a:YanpSnennleGif:814802754672656404>`
    );
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/6547e6f4-9d8d-4eae-8d53-a37fe5fea671/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Grafiti Logo Oluşturuldu");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["grafiti-logo","grafiti-yazı", "graf-foto"],
  permLevel: 0
};

exports.help = {
  name: "grafitilogo",
  description: "Yazdığınız yazıyı bannera çevirir.",
  usage: "alev <yazı>"
};
