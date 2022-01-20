const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  
  
  const yazi = args.slice(0).join("+");

  if (!yazi)
    return message.channel.send(
      `**Lütfen yazı yazınız.** <a:YanpSnennleGif:814802754672656404>`
    );
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/065b4535-d123-4261-accb-2f21e3eac3cf/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Köpek Logo Oluşturuldu");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["köpek-yazı", "havalı-yazı", "köpeklogo"],
  permLevel: 0
};

exports.help = {
  name: "köpekyazı",
  description: "Yazdığınız yazıyı bannera çevirir.",
  usage: "roket <yazı>"
};
