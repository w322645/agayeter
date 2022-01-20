const Discord = require("discord.js");
const axios = require("axios");

exports.run = async (client, message, args) => {
  const city = args[0];
  if (!city)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("UYARI !")
        .setColor("#36393f")
        .setDescription("Şehir adı girmelisiniz.")
    );
  axios
    .get(
      `https://api.collectapi.com/pray/single?ezan=Yats%C4%B1&data.city=${city.toLowerCase()}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: "apikey 209GY5jfK0k8zfMSRdKPDE:5cFsZvJ3VJI6r6AAnZ97vw"
        }
      }
    )
    .then(res => {
      const messageEmbed = new Discord.MessageEmbed()
        .setColor("#36393f")
      .setThumbnail("https://abload.de/img/cami-resimleri-mosqueqfurv.png")
        .setImage("https://cdn.glitch.com/40ded9b9-4b85-4390-964f-f833d4715f75%2FASDKASDHBUAYSBDBHAS.png?v=1619494880227")
        .setTitle(`**Aranan Şehir** \`${city}\``)
        .setDescription(
          `
           > **${city}** şehri için iftar saati **${res.data.result[0].time}.**
           \`\`\`Kalan Süre: ${res.data.result[0].hour} ${res.data.result[0].min}\`\`\`
        `
        )
        ;

      message.channel.send(messageEmbed);
    })
    .catch(err => {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTitle(`Aranan Yer= \`${city}\` Malesef Bulunamadı`)
          .setColor("#36393f")
          .setDescription(
            "Bir sorun ortaya çıktı. Komudu doğru kullandığınızdan emin olun."
          )
      );
      console.log(err);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "iftar"
};
