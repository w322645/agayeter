const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const yazi = args.slice(0).join("+");

  if (!yazi)
    return message.channel.send(
      `**Lütfen yazı yazınız.** <a:YanpSnennleGif:814802754672656404>`
    );
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/2035bdcf-a9f1-46cb-a98e-19a27e762c22/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Efsane Logo Oluşturuldu");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["efsane-logo","efsane-yazı", "efso-foto"],
  permLevel: 0
};

exports.help = {
  name: "efsanelogo",
  description: "Yazdığınız yazıyı bannera çevirir.",
  usage: "alev <yazı>"
};
