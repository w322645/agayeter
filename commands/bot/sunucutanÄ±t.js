const discord = require("discord.js");
const talkedRecently = new Set();
exports.run = async (client, message, args) => {
var sunucu = client.guilds.cache.get("802615716078419998" /*SUNUCU ID*/)
var kişi = sunucu.members.cache.get(message.author.id)
  if(!kişi) message.channel.send(`discord.gg/efda`)
if(!kişi) return message.channel.send(new discord.MessageEmbed().setColor('#36393f').setThumbnail(client.user.avatarURL({dynamic: true})).setTitle('UYARI !').setDescription('Bu komutu kullanmak için sunucumuzda bulunmalısın! '))

  if (talkedRecently.has(message.author.id)) {
    message.channel.send(
      "Sunucu tanıt komutunu 24 saatte bir kullanabilirsiniz!"
    );
  } else {
    message.channel.createInvite({ maxAge: 0 }).then(invite => {
      const embed = new discord.MessageEmbed()
        .setColor("#36393f")
        .setTitle("Bir kişi sunucusunu tanıttı!")
        .setDescription(
          `<a:3957_diamond_light:814532941429604362> Sunucuya girmek için tıkla!](${invite}) \n \n <a:3957_diamond_light:814532941429604362> Üye sayısı: ${message.guild.memberCount} \n <a:3957_diamond_light:814532941429604362> İsmi: ${message.guild.name} \n <a:3957_diamond_light:814532941429604362> Tanıtım sahibi: <@${message.author.id}>`
        );
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 86400000); // yanlışsa düzeltin internete bakıp saniye cinsinden 1 günü yazın qweqwe

      client.channels.cache.get("818565209198952490").send(embed);
      return message.channel.send(
        `Sunucunu destek sunucumda tanıttım => \n\n →  https://discord.gg/QcVuqR39`
      );
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: "sunucu-tanıt"
};