const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("Kime Sarılıcaksın?");

const Embedmatador = new Discord.MessageEmbed()

    .setAuthor(" ")
    .setColor(`ORANGE`)
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} Adlı Kullanıcıyı Koynuna Soktu**`
    )

    .setImage(
               "https://media.giphy.com/media/bffDS2P9N4ZORgY4nD/giphy.gif"
 );
  return message.channel.send(Embedmatador);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sarıl','koynuna-sok'],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "sarıl",
  description: "İstediğiniz kişiyi öpersiniz.",
  usage: "öp"
};
