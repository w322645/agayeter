const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const yazi = args.slice(0).join("+");

  if (!yazi)
    return message.channel.send(
      `**Lütfen yazı yazınız.** <a:YanpSnennleGif:814802754672656404>`
    );
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/242dd112-5485-4f91-8868-c67ada9a4a65/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Gamer Logo Oluşturuldu");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gamer-logo","gamer-yazı", "game-foto"],
  permLevel: 0
};

exports.help = {
  name: "gamerlogo",
  description: "Yazdığınız yazıyı bannera çevirir.",
  usage: "alev <yazı>"
};
