const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  var e = db.fetch(`prefix_${message.guild.id}`);
  if (e) {
    var p = e;
  }
  if (!e) {
    var p = "?";
  }
  let store = args.slice(0).join("+");
  let link = `https://play.google.com/store/search?q=` + store;
  if (!store)
    return message.channel.send(
      `**Kullanımı:** \`${p}playstore <arayacağın oyun veya program>\``
    );
  if (!link) return message.channel.send("Oyun veya program bulunamadı.");
  let embed = new Discord.MessageEmbed()

    .setColor("#36393f")
    .setTimestamp()
    .addField("Aranıyor:", `${args.slice(0).join(" ")}`)
    .addField("Aranan isim:", `${args.slice(0).join(" ")}`)
    .addField("Bulunan link:", `${link}`)
    .setFooter("PlayStore", message.author.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  aliases: ["googleplay"]
};

exports.help = {
  name: "playstoredeara",
  description: "Google store'de istediğini ara bul..",
  usage: "googleplaystore"
};
