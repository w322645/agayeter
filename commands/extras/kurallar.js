const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`${client.user.username}`)
 .setDescription(`**• KURALLAR •**

__**Reklam**__
• Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve benzeri şekilde reklamlar yapmak yasaktır.

__**Küfür, Argo, Hakaret**__
• Her kanalda küfür etmek ve argo kullanmak yasaktır.
• Üyelere karşı hakaret etmek ve dalga geçme yasaktır.

__**Yetkililer ve Yetki**__
• Yetki istemek yasaktır.
• Yetkili alımları ile ilgili soru sormak yasaktır.
• Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır.
• Yetkililere saygılı olun.

__**Spam, Flood, Etiketleme**__
• Spam yapmak yasaktır.
• Bir kelimeyi sürekli bir mesajda yazmak yasaktır.
• Flood yapmak alt alta yazmak yasaktır.
• Bir üyeyi sürekli @etiketlemek yasaktır.

__**Din, Siyaset, Cinsellik**__
• Din ile ilgili konuşmak, tartışmak, kullanıcı adlarını din ile ilgili koymak yasaktır.
• Siyaset ile ilgili konuşmak, tartışmak, kullanıcı adlarını siyaset ile ilgili koymak yasaktır.
• 18+ fotoğraflar paylaşmak ve konuşmak yasaktır.

__**Kavga, Tartışmak**__
• Kavga etmek, kavgaya dahil olmak ve tartışmak yasaktır.
•Herhangi bir sorununuz varsa yetkiliye danışınız`)
.setImage("https://media.discordapp.net/attachments/803606148158586880/809095411393888297/image0.gif?width=360&height=46")
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: 'kuralları atar',
  usage: '!kurallar'
}; 