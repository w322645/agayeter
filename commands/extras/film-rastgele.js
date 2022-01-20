const Discord = require('discord.js');
const film = require('film-apisi')
exports.run = async (client, message, args) => {
    let engin = args[0]
    if(!engin) return message.channel.send('Lütfen bir tür giriniz (dizi/film)')
    async function rastgele() {
        let sonuç = await film.rastgele(engin).catch(err => {message.channel.send(`hata 404 inga \n \n ${err}`);});
        const embed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle(sonuç.ad +" Filmi")
        .addField('📽 Ad:', sonuç.ad)
        .addField('🎞 Tür:', sonuç.türü)
        .addField('📺 Yıl:', sonuç.yıl)
        .addField('⚔️ Puan', sonuç.puan)
        .setImage(sonuç.poster)
return message.channel.send(embed)
}
   rastgele()
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'film-rastgele'
};