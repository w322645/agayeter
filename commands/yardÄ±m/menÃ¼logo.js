const Discord = require("discord.js");
const db = require("quick.db");
  const talkedRecently = new Set();

exports.run = async (client, message, args) => {


  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  const logomenüamoğlu = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setAuthor("🔥 EF&DA'in Özel Logo Menüsüne hoşgeldin! 🔥")
    .setTitle(`🖼️ EF&DA'in Logo Menüye hoşgeldin! Prefix \`${prefix}\``)
    .setTimestamp()
     .setDescription(
      `> **» ${prefix}çapa-logo** : Deniz Çapası temalı logo üretirsiniz.\n> **» ${prefix}panter-logo** : Panter temalı logo üretirsiniz.\n> **» ${prefix}şirket-logo** : Şirket temalı logo üretirsiniz.\n> **» ${prefix}hayalet-logo** : hayalet temalı logo üretirsiniz.\n> **» ${prefix}tilki-logo** : tilki temalı logo üretirsiniz.\n> **» ${prefix}mor-ejderha-logo** : Mor Ejderha temalı logo üretirsiniz.\n> **» ${prefix}havalı-logo** : Havalı temalı logo üretirsiniz.\n> **» ${prefix}kobra-logo** : Kobra temalı logo üretirsiniz.\n> **» ${prefix}Çatal-logo** : Çatal temalı logo üretirsiniz.\n> **» ${prefix}şahin-logo** : Şahin temalı logo üretirsiniz.\n> **» ${prefix}efsane-logo** : Efsane temalı logo üretirsiniz.\n> **» ${prefix}grafiti-logo** : Grafiti temalı logo üretirsiniz.\n> **» ${prefix}renkli-logo** : Renk temalı logo üretirsiniz.\n> **» ${prefix}whatsapp-logo** : Whatsapp temalı logo üretirsiniz.\n> **» ${prefix}köpeklogo** : Köpek Temalı Logo Oluşturur.\n> **» ${prefix}ejderha-yazı** : Ejderha temalı logo üretirsiniz.\n> **» ${prefix}altınyazı** : Yazdığınız Metni Altın Logo Ya Dönüştürür.\n> **» ${prefix}yazı-foto** : Dinamik Logo Oluşturur.\n> **» ${prefix}yeşilyazı** : Yazdığınızı Yeşil Logo olarak Yazar.\n> **» ${prefix}basit-yazı** : Yazdığınız Yazıyı Basit Logo Yapar.\n> **» ${prefix}alev-yazı** : Yazdığınız Yazıyı Alevli Yazar.\n> **» ${prefix}arrow-yazı** : Bot Size Yazdığınıza Göre Arrow Logo Yapar.`
    )
    .setImage("https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2FLOGO.png?v=1621708544667");
  message.channel.send(logomenüamoğlu);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["L", "logolar", "lg"],
  permLevel: 0
};

exports.help = {
  name: "logo",
  category: "kullanıcı",
  description: "logo Menüsü.",
  usage: "!logo"
};
