const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.guild)
    return message.author.send(
      "Bu Komutu Sadece Sunucularda Kulanabilirsiniz!"
    );

  const say = new Discord.MessageEmbed()
    .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
    .addField("<a:ZilGif:814802772754301020> Sunucudaki üye sayısı", message.guild.memberCount)
    .addField(
      "<a:AyarGif:820286392647024741> Sunucudaki Bot Sayısı",
      message.guild.members.cache.filter(m => m.user.bot).size
    )
    .addField(
      "<a:online:814802770329993216> Çevrimiçi üye sayısı",
      message.guild.members.cache.filter(
        m => m.user.presence.status !== "offline"
      ).size
    )
    .addField(
      "<a:offline:814802767586787348> Çevrimdışı üye sayısı",
      message.guild.members.cache.filter(
        m => m.user.presence.status == "offline"
      ).size
    );

  message.channel.send(say);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 2
};

exports.help = {
  name: "gelişmiş-say",
  description: "Say"
};
