const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  var renk = '#36393f'
  const kıllıam = new Discord.MessageEmbed()
	.setTitle("`EFDA BAĞIŞ`")
  .setColor(renk)
  .addField(`Papara İban`,`Yakında Eklenicek`)
	.addField(`İninal İban`,`Yakında Eklenicek`)
	.addField(`Akbank İban`,`Yakında Eklenicek`)
	.addField(`Diğer Kartlar İban`,`Daha Sonra Yakında Eklenicek`)
  .addField(`Diğer Kartlar İban`,`Daha Sonra Yakında Eklenicek`)
	.addField(`Diğer Kartlar İban`,`Daha Sonra Yakında Eklenicek`)
	.addField(`Diğer Kartlar İban`,`Daha Sonra Yakında Eklenicek`)
	.addField(`Diğer Kartlar İban`,`Daha Sonra Yakında Eklenicek`)
  .setImage('https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2Fyeni2.png?v=1621792931950')
  .setDescription('\`\`\`bash\n"Efda Bota Bağış Yapmak İçin Aşağıdaki Yerler Kullanabilir Ve Bize Maddi Açıdan Destek Olabilirsiniz. \n Bu Davranışınız İçin Sizlere Minnetarız Çok Teşekkür Ederiz \n Unutmayınız Siz Yoksanız Biz Bir Hiç Siz Varsanız Biz Sizin İçin Varız :)"\n\`\`\` \n\n **EFDA Sunar**',"Teşekkürler")
	message.channel.send(kıllıam);
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["EFDA","efda","para","money","support"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "bağış",
  category: "kullanıcı",
  description: "bağış",
  usage: "!efda"
};
