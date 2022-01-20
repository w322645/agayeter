const Discord = require ("discord.js")

exports.run = async (client, message, args) => {
  
  const arabalan = new Discord.MessageEmbed()
  .setTitle("Ver Ayarı 32 Den!!")
  .setColor('#d60c0c')
  .setImage("https://img-s2.onedio.com/id-58f87e5f4416335a11e6887f/rev-0/w-500/s-8d35821c12a98c8d66043dedc7bd71d2c351c3e6.gif")
  .setThumbnail("https://i.hizliresim.com/aFJOaF.png")
  .setFooter("BABA ARA GAZ VER BAYILMASIN MOTOR")
  message.channel.send(arabalan)


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tofaş", "araba"]
};

exports.help = {
  name: "car",
  description: "ambulans geliyo gibi işte nolcak başka",
  usage: "!ambulans nolabilir yaw başka"
};   //・FadeAway