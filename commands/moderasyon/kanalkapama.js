const Discord = require("discord.js");
const db = require('quick.db');
  const talkedRecently = new Set();
exports.run = async (client, message, args) => {


   var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
  
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
  return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField(
          "Hata",
          `•\`${p}kapat\`Kullanabilmek için , \`Kanalları Yönet\` **Yetkisine sahip olmanız gerekir**.`
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/768502339375857714/768796763040907284/Ekran_Alnts.PNG"
        )
    );

  

  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });


  message.channel.send("**Sohbet Kanalı `Yazılamaz` Durumuna Getirilmiştir.**");
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sohbet-kapat","sohbetkapat","kanalkapat","kanal-kapat"],
  permLevel: 1
};

exports.help = {
  name: 'kapat',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'kapat'
};