const Discord = require("discord.js");
  const talkedRecently = new Set();
exports.run = (client, message, args) => {



  let kanal = args.slice(0).join(" ");
  let guild = message.guild;
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setTitle("Bunun için gerekli iznin yok")
    );
  if (kanal.length < 1)
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setTitle(
          "<a:5430_Diamond:814532975948726272> Lütfen oluşturacağım kanalın adını yaz."
        )
    );
  message.delete();
  guild.channels.create(kanal, "text");
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#36393f")
      .setTitle("<a:5430_Diamond:814532975948726272> Yazı Kanalı Oluşturuldu")
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazı-kanal-aç", "kanal-oluştur"],
  permLevel: 3
};

exports.help = {
  name: "yazı-kanal-aç",
  description: "Bir ses kanalı açar",
  usage: "ses-kanal-aç [açmak istediğiniz kanalın adı]"
};
