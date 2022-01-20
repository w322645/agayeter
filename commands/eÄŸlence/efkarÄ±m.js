const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let member = message.guild.member(
    message.mentions.users.array()[0] || message.guild.members.cache.get(args[0])
  );
  let member2 = message.guild.member(
    message.mentions.users.array()[1] || message.guild.members.cache.get(args[1])
  );
  var s = message.author;
  if (member2) {
    var s = member2.user;
  }
  if (!member) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ölçmek İçin Birini Etiketlemelisin Mesala @deneme gibi`)
      .setColor("RANDOM")
      .setTimestamp();
    message.channel.send({ embed });
    return;
  }

  var anasonuc = Math.floor(Math.random() * 101);
  var kalp = "";
  var akalp = "";
  if (Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
    var c = 0;
    for (var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
      kalp += "🚬";
      c++;
    }
    for (var x = c; x < 10; x++) {
      akalp += `🚭`;
    }
  } else {
    var kalp = "🚭";
    var akalp = "🚭🚭🚭🚭🚭🚭🚭🚭";
  }
  var yorum = `Hayallerimiz Bir Kül Gibi Uçtu :/ `;
  if (anasonuc < 80) {
    var yorum = "Sakin Olun Kendinizi Kesmeyin Nede Olsa Bir İhtimal :)";
  }
  if (anasonuc < 60) {
    var yorum = "Müslüm Baba İyidir Dinleyip Dinleyip Çekin bi 70 lik.";
  }
  if (anasonuc < 40) {
    var yorum = "Sizinde Ufaktan Bi Ahmet Kaya Var Damarlarınızda ;)";
  }
  if (anasonuc < 20) {
    var yorum = "Efkar Zamanı Değil Agalar Bakın Keyfinize Gece Gene Deneyin ;)";
  }
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${member.user.tag} | ${s.tag}`)
    .setDescription(`Efkar Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
    .setColor("RANDOM")
    .setTimestamp();
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["efkar-ölçer","efkarım"],
  permLevel: 0
};

exports.help = {
    name: 'efkar',
  description: "İki kullanıcı sarasındaki aşkı ölçer.",
  usage: "aşkımı-ölç [@Kullanıcı] [@Kullanıcı]"
};
