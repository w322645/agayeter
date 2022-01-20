const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

exports.run = (client, msg, args) => {
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
  if (msg.member.hasPermission("ADMINISTRATOR"))
    x = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("ADMINISTRATOR"))
    x = "<a:9612_uncheck_ravena:814532952795906049>";

  //Denetim kaydı
  if (msg.member.hasPermission("VIEW_AUDIT_LOG"))
    x2 = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("VIEW_AUDIT_LOG"))
    x2 = "<a:9612_uncheck_ravena:814532952795906049>";

  //Sunucuyu yönet
  if (msg.member.hasPermission("MANAGE_GUILD"))
    x3 = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("MANAGE_GUILD"))
    x3 = "<a:9612_uncheck_ravena:814532952795906049>";

  //Rolleri yönet
  if (msg.member.hasPermission("MANAGE_ROLES"))
    x4 = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("MANAGE_ROLES"))
    x4 = "<a:9612_uncheck_ravena:814532952795906049>";

  //Kanalları yönet
  if (msg.member.hasPermission("MANAGE_CHANNELS"))
    x5 = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("MANAGE_CHANNELS"))
    x5 = "<a:9612_uncheck_ravena:814532952795906049>";

  //üyeleri at
  if (msg.member.hasPermission("KICK_MEMBERS"))
    x6 = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("KICK_MEMBERS"))
    x6 = "<a:9612_uncheck_ravena:814532952795906049>";

  //üyeleri yasakla
  if (msg.member.hasPermission("BAN_MEMBERS"))
    x7 = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("BAN_MEMBERS"))
    x7 = "<a:9612_uncheck_ravena:814532952795906049>";

  //mesajları yönet
  if (msg.member.hasPermission("MANAGE_MESSAGES"))
    x8 = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("MANAGE_MESSAGES"))
    x8 = "<a:9612_uncheck_ravena:814532952795906049>";

  //kullanıcı adlarını yönet
  if (msg.member.hasPermission("MANAGE_NICKNAMES"))
    x9 = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("MANAGE_NICKNAMES"))
    x9 = "<a:9612_uncheck_ravena:814532952795906049>";
  //emojileri yönet
  if (msg.member.hasPermission("MANAGE_EMOJIS"))
    x10 = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("MANAGE_EMOJIS"))
    x10 = "<a:9612_uncheck_ravena:814532952795906049>";

  //webhookları yönet
  if (msg.member.hasPermission("MANAGE_WEBHOOKS"))
    x11 = "<a:1805_check_ravena:814532953698730064>";
  if (!msg.member.hasPermission("MANAGE_WEBHOOKS"))
    x11 = "<a:9612_uncheck_ravena:814532952795906049>";
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail("https://media.giphy.com/media/VVl0KCdvZe9ORF1Ywc/giphy.gif")
    .setAuthor(
      `Bu Sunucudaki Yetkilerin`,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setDescription(
      ` ${x} Yönetici \n${x2} Denetim Kaydını Görüntüle\n ${x3} Sunucuyu Yönet \n${x4} Rolleri Yönet \n${x5} Kanalları Yönet \n${x6} Üyeleri At \n${x7} Üyeleri Yasakla \n${x8} Mesajları Yönet \n${x9} Kullanıcı Adlarını Yönet \n${x10} Emojileri Yönet \n${x11} Webhook'ları Yönet`
    );
  msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: "yetkilerim",
  description: "Komutu kullandığınız sunucudaki yetkilerinizi gösterir.",
  usage: "yetkilerim"
};
