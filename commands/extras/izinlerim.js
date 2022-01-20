const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let user = message.mentions.members.first();

  if (!user) user = message.member;

  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;

  //yönetici
  if (user.hasPermission("ADMINISTRATOR"))
    x = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("ADMINISTRATOR"))
    x = "<a:9612_uncheck_ravena:814532952795906049>";

  //Denetim kaydı izimlerim
  if (user.hasPermission("VIEW_AUDIT_LOG"))
    x2 = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("VIEW_AUDIT_LOG"))
    x2 = "<a:9612_uncheck_ravena:814532952795906049>";

  //Sunucuyu yönet
  if (user.hasPermission("MANAGE_GUILD"))
    x3 = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("MANAGE_GUILD"))
    x3 = "<a:9612_uncheck_ravena:814532952795906049>";

  //Rolleri yönet
  if (user.hasPermission("MANAGE_ROLES"))
    x4 = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("MANAGE_ROLES"))
    x4 = "<a:9612_uncheck_ravena:814532952795906049>";

  //Kanalları yönet
  if (user.hasPermission("MANAGE_CHANNELS"))
    x5 = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("MANAGE_CHANNELS"))
    x5 = "<a:9612_uncheck_ravena:814532952795906049>";

  //üyeleri at
  if (user.hasPermission("KICK_MEMBERS"))
    x6 = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("KICK_MEMBERS"))
    x6 = "<a:9612_uncheck_ravena:814532952795906049>";

  //üyeleri yasakla
  if (user.hasPermission("BAN_MEMBERS"))
    x7 = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("BAN_MEMBERS"))
    x7 = "<a:9612_uncheck_ravena:814532952795906049>";

  //mesajları yönet
  if (user.hasPermission("MANAGE_MESSAGES"))
    x8 = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("MANAGE_MESSAGES"))
    x8 = "<a:9612_uncheck_ravena:814532952795906049>";

  //kullanıcı adlarını yönet
  if (user.hasPermission("MANAGE_NICKNAMES"))
    x9 = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("MANAGE_NICKNAMES"))
    x9 = "<a:9612_uncheck_ravena:814532952795906049>";

  //emojileri yönet
  if (user.hasPermission("MANAGE_EMOJIS"))
    x10 = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("MANAGE_EMOJIS"))
    x10 = "<a:9612_uncheck_ravena:814532952795906049>";
  if (user.hasPermission("MANAGE_WEBHOOKS"))
    x11 = "<a:1805_check_ravena:814532953698730064>";
  if (!user.hasPermission("MANAGE_WEBHOOKS"))
    x11 = "<a:9612_uncheck_ravena:814532952795906049>";
  let embed = new Discord.MessageEmbed()

    .setColor("#36393f")
    .setTitle(`${user.user.tag}'ın İzinleri:`)
    .setDescription(
      `${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`
    )
    .addField(
      "Başında <a:9612_uncheck_ravena:814532952795906049> olanlar o yetkiye sahip olunmadığını gösterir. \nBaşında <a:1805_check_ravena:814532953698730064>  olanlar o yetkiye sahip olunduğunu gösterir.",
      `Efda İzinler Menüsü`
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["izinler"],
  permLevel: 0
};

exports.help = {
  name: "izinler",
  description:
    "Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.",
  usage: "yetkilerim"
};
