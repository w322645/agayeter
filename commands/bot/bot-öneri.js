const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  var hengover = '#36393f'
  let istek = args.slice(0).join(" ");
  if (!istek)
    return message.channel.send(new Discord.MessageEmbed().setTitle("Başarısız ❌ ").setColor(hengover).setDescription("**Öneri Yapmak İçin Birşey Yazmalısınız.** :x:"));

  const embed = new Discord.MessageEmbed()
    .setTitle("EF&DA Bot Öneri Sistemi")
    .setColor(hengover)
    .setDescription(
      `**🆕Öneri Yapılan Kanal** ${message.channel.name} \n **🆕Öneri Yapılan Discord Sunucusu** \`${message.guild.name}\` \n **🆕Öneri Yapan Kullanıcı** <@${message.author.id}> \n **🆕 Yapılan Öneri :** \`${istek}\``
    );
  client.channels.cache.get("874635777026437140").send(embed);

  message.channel
    .send(new Discord.MessageEmbed().setTitle('Başarılı ✅').setColor(hengover).setDescription("Öneri Bildiriminiz Başarılı Bir Şekilde Gönderildi. :white_check_mark:🆕"))
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botöneri','efda-öneri'],
  permLevel: 0
};

exports.help = {
  name: "bot-öneri",
  description: "İstek kodları belirtmeye yarar",
  usage: "istek-kod <istek>"
};
