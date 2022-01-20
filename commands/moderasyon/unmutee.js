const Discord = require("discord.js");
const qdb = require("quick.db");
const ms = require("ms");
const ayarlar = require("../../config.json");
  const talkedRecently = new Set();
exports.run = async (client, message, args) => {

  var muterole1 = qdb.fetch(`muteroluid_${message.guild.id}`);
  var muterole2 = message.guild.roles.cache.find(r => r.id === muterole1);
  if (!muterole2) {
    try {
      muterole2 = await message.guild.roles.create({
        data: {
          name: "Mutelendi",
          color: "#ffff00",
          permissions: []
        },
        reason: "Mute Rolü!"
      });
      qdb.set(`muteroluid_${message.guild.id}`, muterole2.id);

      message.guild.channels.cache.forEach(async channel => {
        await channel.createOverwrite(muterole2, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SPEAK: false
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  var kisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!kisi)
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription("Susturmasını Açmam için bir kullanıcı etiketleyiniz")
    );

  if (!kisi.roles.cache.find(r => r.id === muterole2.id))
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription(
          "<a:5430_Diamond:814532975948726272> Kişi Daha Önce Sustururlmamış"
        )
    );

  var reason = args.slice(1).join(" ");

  if (reason) {
    await kisi.roles.remove(muterole2.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription(
          `<a:5430_Diamond:814532975948726272> ${kisi}  Susturulması Açıldı\n\n<a:5430_Diamond:814532975948726272> __Nedeni:__ **${reason}**\n\n<a:3957_diamond_light:814532941429604362> __Yetkili__ **${message.author}**`
        )
    );
  } else {
    await kisi.roles.remove(muterole2.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription(
          `<a:5430_Diamond:814532975948726272> ${kisi}Susturulması Açıldı \n\n<a:3957_diamond_light:814532941429604362> __Yetkili__ **${message.author}**`
        )
    );
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["susturaç", "unmute"],
  permLevel: 1,
  kategori: "sunucu"
};

exports.help = {
  name: "unmute",
  description: "susturmasını kaldırır.",
  usage: "unmute {@kişi} {sebep}"
};
