const Discord = require('discord.js');
const chancejs = require('chance');
const db = require('quick.db')
const chance = new chancejs();



exports.run = function(client, message, args) {

    var oynamak = args[0]
    
	let parapara = db.fetch(`para_${message.author.id}`) || 0  
const cevaplar = [
`Para Havaya Atıldı <a:efdacoin:942809802042650644>  \n\n ✅**Kazandınız** \`${+oynamak}\``,
`Para Havaya Atıldı <a:efdacoin:942809802042650644> \n\n ❌**Kaybettiniz** \`${-oynamak}\``
];
  
    if (parapara < oynamak) return message.reply(`Para Miktarından Büyük bir Para Miktarıyla Slot Oyununu Oynayamassın :( \n\n **Paranız**\`${parapara}\``)
  
    if (isNaN(oynamak)) return message.reply('Para Miktarını Nası Sayısız Yazıcaksın?')

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
	
	if (cevap === `Para Havaya Atıldı <a:efdacoin:942809802042650644>  \n\n ✅**Kazandınız** \`${+oynamak}\``) {
        db.add(`para_${message.author.id}`, +oynamak)
		 const embedyazı = new Discord.MessageEmbed()
		.setColor("GREEN")
		.setDescription(cevap)
		message.channel.send(embedyazı);
		
	} else if (cevap === `Para Havaya Atıldı <a:efdacoin:942809802042650644> \n\n ❌**Kaybettiniz** \`${-oynamak}\``) {
		db.add(`para_${message.author.id}`,-oynamak)
		const embedtura = new Discord.MessageEmbed()
		.setColor("RED")
		.setDescription(cevap)
	
		message.channel.send(embedtura);
		
	}
		

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};