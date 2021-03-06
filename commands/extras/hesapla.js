const Discord = require("discord.js");
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
const db = require('quick.db');

exports.run = function(client, message, args) {
     var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
  
  var soru = args.join(" ");

  if (!soru)
    return message.reply(`**Bir işlem belirtin.** \`Örnek\`: **${p}hesapla <işlem>**`
    );
  else {
    let cevap;
    try {
      cevap = math.eval(soru);
    } catch (err) {
     return message.channel.send("**Hatalı işlem: **" + err);
    }

    const Embedmatador = new Discord.MessageEmbed()

      .addField("Soru", soru)
      .addField("Cevap", cevap);

    return message.channel.send(Embedmatador);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "hesapla",
  description: "Belirtilen işlemi yapar.",
  usage: "hesapla <işlem>"
};
