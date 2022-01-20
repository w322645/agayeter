const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const yazi = args.slice(0).join("+");

  if (!yazi)
    return message.channel.send(
      `**Lütfen yazı yazınız.** <a:YanpSnennleGif:814802754672656404>`
    );
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/d656041d-bb59-4ed0-91e0-c900862aabb2/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Roket Logo Oluşturuldu");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["örümcek-yazı", "örümcek-logo", "örümceklogo"],
  permLevel: 0
};

exports.help = {
  name: "örümcekyazı",
  description: "Yazdığınız yazıyı bannera çevirir.",
  usage: "roket <yazı>"
};
