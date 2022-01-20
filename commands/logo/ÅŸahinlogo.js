const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const yazi = args.slice(0).join("+");

  if (!yazi)
    return message.channel.send(
      `**Lütfen yazı yazınız.** <a:YanpSnennleGif:814802754672656404>`
    );
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/c3b93df3-e3d9-4582-8b7d-582e5731a0d2/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Şahin Logo Oluşturuldu");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["şahin-logo","şahin-yazı", "şahin-foto"],
  permLevel: 0
};

exports.help = {
  name: "şahinlogo",
  description: "Yazdığınız yazıyı bannera çevirir.",
  usage: "alev <yazı>"
};
