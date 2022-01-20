const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  ///////////////////////////
  var amcıkss = [
    "ööehh, kapasiki, heçkır, tiriversti, am sarması, gibi kelimeleri türk küfür terminolojisi katan, küfürün tanrısı olarak nitelendirilebilecek üstat",
    "fako beri bak beri beri",
    "mikrofon alabilmen için dj nicki yapacaksın dj eruhlu",
    "seni hap diye yutar bok diye sıçarım",
    "mırkeke, kırmaniçizani, senin ananla oturup karşılıklı ay çekirdeği çitleyeyim:dd",
    "bu var ya amma göt yalar moruk.",
    "git temizle lan namusunu, git öldür karını.",
    "mavi leğende yıkanan orospu çocuğu seni.",
    "evet arkadaşlar... şimdi gelelim hayatın gerçeklerine; fako arkadaşa bakıyor musunuz?:(",
    "ananı atla kaçırayım fako. pelerin giyeyim tarkan gibi böyle.",
    "ananın resmine uçarak kelebekleme tekme atayım.",
    "eşekle dolaşan kahpenin evladı seni",
    "biraz içerlemiş gibisin eruhlu?",
    "vola komtan eledim poff etti.",
    "gidip bilgisayarın amına koyacaksın moruk ne formatlla uğraşıyorsun.",
    "allah beni bir kuş edicek. senin yakınına konucam. sana bir tokat atıcam. o burnunu sıkacam burnunu.",
    "gördüğünüz gibi orospu çocuklarının istilası altındayız arkadaşlar.",
    "dino dino dino geh geh geh",
    "belediyeye rüşvet verip evini yıktıracam camdan atacam gururunla oynayacam",
    " bıyıklara bak bu ne paspas yapar"
  ];
  var veritabanı = amcıkss[Math.floor(Math.random() * amcıkss.length)];
  ///////////////////////////
  const vrs = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail(
      "https://img5.apk.tools/img/ycYyxtFj1W6OjXQ3Bu4hm8JsK6PKBsiwOXBQVjtx2c69eFeGhJu3NudYCF22E5nlQJ4=s300"
    )
    .setTitle("Sönmez Reis Diyor Ki:")
    .setDescription(`${veritabanı}`);
  message.channel.send(vrs);
  ///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sönmez-reis"],
  permLevel: 4
};

exports.help = {
  name: "sönmezreis"
};
