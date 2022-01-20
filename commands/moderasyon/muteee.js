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
          color: "RANDOM",
          permissions: []
        },
        reason: "Mute Rolü!"
      });
      qdb.set(`muteroluid_${message.guild.id}`, muterole2.id);

      message.guild.channels.cache.forEach(async channel => {
        await channel.createOverwrite(muterole2, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          READ_MESSAGE_HISTORY: false,
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
      "<a:5430_Diamond:814532975948726272> Susturmam İçin Bir Kullanıcı Etiketleyiniz"
    );

  var time = args[1];
  var reason = args.slice(2).join(" ");
  if (kisi.hasPermission("BAN_MEMBERS")) return message.reply(new Discord.MessageEmbed().setColor("#36393f").setDescription("**Yetkilileri Susturamam**"));

  if (!time) {
    if (reason) {
      await kisi.roles.add(muterole2.id);
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription(
            `<a:5430_Diamond:814532975948726272> ${kisi}**SINIRISIZ ŞEKİLDE SUSTURURLDU!**\n__Nedeni:__ **${reason}**\n\n<a:3957_diamond_light:814532941429604362> __Yetkili__ **${message.author}**`
          )
      );
    } else {
      await kisi.roles.add(muterole2.id);
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription(
            `<a:5430_Diamond:814532975948726272> ${kisi}**SINIRISIZ ŞEKİLDE SUSTURURLDU!**\n\n<a:3957_diamond_light:814532941429604362> __Yetkili__ **${message.author}**`
          )
      );
    }
  } else {
    if (reason) {
      await kisi.roles.add(muterole2.id);
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription(
            `<a:5430_Diamond:814532975948726272> ${kisi} **${time}** Süresince Susuturuldu!\n\n<a:5430_Diamond:814532975948726272> __Nedeni:__ **${reason}**\n\n<a:3957_diamond_light:814532941429604362> __Yetkili__ **${message.author}**`
          )
      );

      setTimeout(function() {
        if (kisi.roles.cache.find(r => r.id === muterole2.id)) {
          kisi.roles.remove(muterole2.id);
          message.channel.send(
            new Discord.MessageEmbed()
              .setColor("#36393f")
              .setDescription(
                `<a:5430_Diamond:814532975948726272> ${kisi} Susturulma Süresi Dolduğu İçin Susuturulması Kaldırılmıştır`
              )
          );
        }
      }, ms(time));
    } else {
      await kisi.roles.add(muterole2.id);
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription(
            `<a:5430_Diamond:814532975948726272> ${kisi} **${time}** Süresince Susturuldu!\n\n<a:3957_diamond_light:814532941429604362> __Yetkili__ **${message.author}**`
          )
      );
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sustur"],
  permLevel: 1,
  kategori: "sunucu"
};

exports.help = {
  name: "mute",
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: "EFDA"
};
