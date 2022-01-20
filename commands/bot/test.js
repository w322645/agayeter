const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
   var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
  
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("GET", "https://api.collectapi.com/imdb/imdbSearchByName?query=inception");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("authorization", "apikey 0m0xUjMVjesqShG4z4W4UV:2R4cNsmr9fHjM0hqldYmCu");
  
  xhr.send(data);

  message.channel.send(xhr);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "test",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
