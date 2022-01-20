const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
   var hengover = '#36393f'
  if(db.has(`prefix_${message.guild.id}`)){
    var prefix = db.fetch(`prefix_${message.guild.id}`)
  }
  else {var prefix = "?"}
  var ökanal = await db.fetch(`önerikanal_${message.guild.id}`);
  var önerikanalı = message.guild.channels.cache.find(
    channel => channel.id === ökanal
  );
  if (!ökanal)
    return message.channel.send(new Discord.MessageEmbed().setColor(hengover).setDescription(
      `:frowning:  **Maalesef Bir Öneri Kanalı Ayarlanmamış.** :arrow_right: \`Ayarlamak İçin ${prefix}öneri-kanal #kanal\` `
    ));

  var oneri = args.join(" ").slice(0);
  if (!oneri) {
    message.channel.send(new Discord.MessageEmbed().setColor(hengover).setDescription(
      `**:frowning:  Hey Dostum Yanlış Kullanıyorsun. Merak Etme Ben Burdayım <:10:853187868046131201>** \n :arrow_right: \`Örnek: ${prefix}öneri Efda Oy Vermeyen Banlansın\``
    ));

    return;
  } else {
    const embed = new Discord.MessageEmbed()
      .setTitle("Yeni Bir Öneri Var!")
      .addField(":diamonds: Öneren Kullanıcı:", `${message.author.tag}`)
      .addField(`:flashlight: Öneri`, oneri)
      .setColor("hengover")
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`Efda Corpation©`);

    önerikanalı.send(embed).then(m => {
      m.react("☑️");
      m.react("❌");
    });
  }

  message.channel.send(new Discord.MessageEmbed().setColor(hengover).setDescription(
    `:white_check_mark: **Öneriniz başarıyla alındı!** \n :pen_ballpoint:  _Önerin ${önerikanalı} kanalına düştü_`
  )).then(x => {x.delete({timeout: 3000})});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istek"],
  permLevel: 0
};
exports.help = {
  name: "öneri",
  description: "ö",
  usage: "ö"
};
