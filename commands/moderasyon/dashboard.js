exports.run = async(client, message, args) => {
    const Discord = require("discord.js")
    const config = require("../../config")
    message.channel.send(new Discord.MessageEmbed().setTitle("EFDA").setColor("#36393f").setDescription(`
    Sunucuda toplam **•** **${message.guild.memberCount}** Üye
    Son 1 **Saatte** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}**
    Son 1 **Günde** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}**
    Son 1 **Haftada** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}**
    Son 1 **Ayda** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000).size}**`)
    .setThumbnail(message.guild.iconURL())
    .setFooter(message.guild.name, message.guild.iconURL())
    .setTimestamp())
    message.react(config.onayemoji)
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["dashboard"],
    permLevel: 0

  }

  exports.help = {
    name: "dashboard"
  };