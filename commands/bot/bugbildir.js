const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let istek = args.slice(0).join(" ");
  if (!istek)
    return message.channel.send("**Bug Bildirmek için Bir Bug Yazınız.** :x:");

  const embed = new Discord.MessageEmbed()
    .setTitle("EF&DA Bug Sistemi")
    .setColor("BLUE")
    .setDescription(
      `**🐞Bug Kanalı** ${message.channel.name} \n **🐞Bug Bildirilen Sunucu** \`${message.guild.name}\` \n **🐞Bugu Bildiren Kullanıcı** <@${message.author.id}> \n **🐞Bildirilen Bug :** \`${istek}\``
    );
  client.channels.cache.get("807538185679929384").send(embed);

  message.channel
    .send("Bug bildiriminiz gönderildi. :white_check_mark:🐞")
    .then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hatabildir", "bugbildir", "bug-bildir", "hata-bildir"],
  permLevel: 0
};

exports.help = {
  name: "bug-bildir",
  description: "İstek kodları belirtmeye yarar",
  usage: "istek-kod <istek>"
};
