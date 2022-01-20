const Discord = require("discord.js");
const db = require("quick.db");
const talkedRecently = new Set();

exports.run = (client, message, args) => {


  var e = db.fetch(`prefix_${message.guild.id}`);
  if (e) {
    var p = e;
  }
  if (!e) {
    var p = "?";
  }
  if (!message.member.hasPermission("MUTE_MEMBERS"))return message.channel.send(new Discord.MessageEmbed().setTitle("UYARI !!").setColor("#36393f").setDescription("<a:3957_diamond_light:814532941429604362> `Bu komutu kullanabilmek için` **Kişileri Sustur** `yetkisine sahip olmalısın`")
    );
  let kanal = args[1];
  let kullanici = message.mentions.members.first();
  if (!kanal)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#36393f")
      .setDescription(`\n\n**ÖR:** ${p}taşı @kişi (id) \n\n**Kanalı id almak için ⬇️** `)
        .setImage("https://media.giphy.com/media/ri5Ni6VQ28c8DlBBeM/giphy.gif")
        .setTitle(
          ` <a:3957_diamond_light:814532941429604362> Kanal (İD) belirtmedin`
        )
    );
  if (!kullanici) return message.channel.send("Kullanıcıyı belirtmedin");

  kullanici.voice
    .setChannel(`${kanal}`)
    .then(() =>
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setTitle("BAŞARILI !")
          .setDescription(
            `<a:5430_Diamond:814532975948726272> ${kullanici} \n\n <a:5430_Diamond:814532975948726272> :loud_sound:**<#${kanal}>** adlı kanala taşındı`
          )
      )
    )
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["üyeyitaşı"],
  permLevel: 0
};

exports.help = {
  name: "taşı",
  description: "İstediğiniz kişiniyi bir sesli kanaldan diğerine taşır.",
  usage: "taşı [kullanıcı] [kanal id]"
};
