const Discord = require("discord.js");
const data = require("quick.db");


exports.run = async (client, message, args) => {
  var sahip = ("275926652842934272")
         var e = data.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription(
          `<@!${sahip}> **Veriler Toplanıyor,Lütfen Bekleyiniz Sahip...  <a:ttnet:764635922917621791>**`
        )
    )
    .then(m => {
      setTimeout(() => {

        m.edit(
          new Discord.MessageEmbed()
            .setColor("#36393f")
            .setDescription(`\`\`\`bash\n'Buyur Sahip !'\n\`\`\`\n\nKomut listesinde \`${client.commands.size}\` adet komut bulunmaktadır.\n\n**${client.commands.map(props => props.help.name).join("-")}**\n\n__**Yardım İçin:**__ \`${p}yardım\``
   
        ));
      }, 7500);
    });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "komutlar"
};
