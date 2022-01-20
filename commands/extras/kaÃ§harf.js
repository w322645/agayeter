const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../../config.json");
const { stripIndents } = require("common-tags");
exports.run = (client, msg, args) => {
  var harf = args.slice().join(" ");

  var khs = harf.length;

  msg.reply("Yazdığınız kelime " + khs + " harf");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kh"],
  permLevel: 0
};

var use = "kaçharf";

exports.help = {
  name: "kelimekaçharf",
  description: "use",
  usage: "use"
};
