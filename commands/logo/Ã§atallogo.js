const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  
 if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
  const yazi = args.slice(0).join("+");

  if (!yazi)
    return message.channel.send(
      `**Lütfen yazı yazınız.** <a:YanpSnennleGif:814802754672656404>`
    );
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/f96a1235-6405-4313-b60d-1c5f8a252d23/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Çatal Logo Oluşturuldu");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çatal-logo","çatal-yazı", "çatal-foto"],
  permLevel: 0
};

exports.help = {
  name: "çatallogo",
  description: "Yazdığınız yazıyı bannera çevirir.",
  usage: "alev <yazı>"
};
