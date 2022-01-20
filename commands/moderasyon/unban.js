const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {


  var guild = message.guild;
  var banlayan = message.author.tag;
  if (!args[0])
    return message.reply(
      new Discord.MessageEmbed()
        .setImage(
          "https://s3.gifyu.com/images/ezgif.com-gif-maker-17ce77b310641726e.gif"
        )
        .setColor("#36393f")
        .setDescription(
          "**<:okeys:820285379298328607> Banını Açacağım Kişinin İd sini Yazman Gerek ** \n\n Nasıl İd Alındığını Bilmiyosan Buyur ⬇️ "
        )
    );
  var kisi = args[0];
  var neden = args.slice(1).join(" ")
    ? `${args
        .slice(1)
        .join(
          " "
        )} <a:3957_diamond_light:814532941429604362> \n\n**Banlayan** __${banlayan}__`
    : `Neden Belirtilmemiş.<a:3957_diamond_light:814532941429604362>\n\n **Banlayan** __${banlayan}__`;

  await message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#36393f")
      .setTitle("BAN KALDIRILDI")
      .setDescription(
        `<a:4887_switch:814532974947074079> <@!${kisi}> Kişinin Kullanıcı Banı Açıldı \n\n<:okeys:820285379298328607> **Nedeni :** ${neden}`
      )
  );
  await guild.members.unban(kisi, neden);
};

exports.conf = {
  aliases: ["unban", "yasak-kaldır", "yasakkadlır"],
  permLevel: 2
};
exports.help = {
  name: "ban-kaldır",
  description: "Etiketlenen Kişinin Banını Kaldırır",
  usage: "unban {İD,si} {Nedeni}"
};
