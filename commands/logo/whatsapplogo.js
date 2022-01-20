const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const yazi = args.slice(0).join("+");

  if (!yazi)
    return message.channel.send(
      `**Lütfen yazı yazınız.** <a:YanpSnennleGif:814802754672656404>`
    );
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/0dee235d-1fb3-4599-8195-e577e698da24/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Whatsapp Logo Oluşturuldu");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["whatsapp-logo","whatsapp-yazı", "wp-foto"],
  permLevel: 0
};

exports.help = {
  name: "wplogo",
  description: "Yazdığınız yazıyı bannera çevirir.",
  usage: "alev <yazı>"
};
