const Discord = require('discord.js');
const db = require("quick.db");
const { translate } = require('bing-translate-api');



exports.run = async (client, message, args) => {
  
     var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
  let dil = args[0]
  if(!dil) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle("UYARI !").setDescription('Lütfen çevrilecek dili belirtin!'))
  let engin = args.slice(1).join(' ')
  if(!engin) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle("UYARI !").setDescription(`Lütfen ${dil} çevrilecek kelimeyi giriniz`))
 let res = translate(engin, null, dil).catch(err => {message.channel.send(new Discord.MessageEmbed().setTitle("UYARI !").setFooter("WARNİNG").setColor("#36393f").setDescription(`**Dili Bulamadım !** \n\n **Örnek:** \`${p}çeviri\` \`(dil)\` \`(kelime)\` \n\n\n**Ülke Kodları⬇️**\n
 **Arapça:**	\`ar-XA\`	|**Bulgarca:**	\`bg\`
 **Hırvatça:**	\`hr\`	|**Çekçe:**	\`cs\`
 **Danca:**	\`da\`	|**Almanca:**	\`de\`
 **Yunanca:**	\`el\`	|**İngilizce:**	\`en\`
 **Estonca:**	\`et\`	|**İspanyolca:**	\`es\`
 **Fince:**	\`fi\`	|**Fransızca:**	\`fr\`
 **İrlandaca:**	\`ga\`	|**Hintçe:**	\`hi\`
 **Macarca:**	\`hu\`	|**İbranice:**	\`he\`
 **İtalyanca:**	\`it\`	|**Japonca:**	\`ja\`
 **Korece:**	\`ko\`	|**Letonca:**	\`lv\`
 **Litvanca:**	\`lt\`	|**Felemenkçe:**	\`nl\`
 **Norveççe:**	\`no\`	|**Lehçe:**	\`pl\`
 **Portekizce:**	\`pt\`	|**İsveççe:**	\`sv\`
 **Rumence:**	\`ro\`	|**Rusça:**	\`ru\`
 **Sırpça:**	\`sr-CS\`	|**Slovakça:**	\`sk\`
 **Slovence:**	\`sl\`	|**Tay Dili:**	\`th\`
 **Türkçe:**	\`tr\`	|**Ukraynaca:**	\`uk-UA\`
 **Çince (Basitleştirilmiş):**	\`zh-chs\`|**Çince (Geleneksel):**	\`zh-cht\`
 \n\n\nError ⬇️\n \`${err}\``));});
 let kelime = await (await res).text
 let çeviri = await (await res).translation
 let yenidil = await (await res).language.to
 const embed = new Discord.MessageEmbed()
 .setColor("#36393f")
 .setTitle(`\`${engin}\` Kelimesi nin Çevirisi`)
 .setDescription(`**Kelime:** \`${kelime}\` \n \n **Çeviri sonucu:** \`${çeviri}\` \n \n **Çevrilen dil:** \`${yenidil}\``)
 .setFooter("EFDA ÇEVİRİ")
 return message.channel.send(embed).catch(err => {message.channel.send(`Kelimeyi Çeviremedim \n \n ${err}`);});
 


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çeviri','translate'],
  permLevel: 0
};

exports.help = {
  name: 'çevir'
};