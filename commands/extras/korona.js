const { MessageEmbed } = require('discord.js');
const translate = require('node-google-translate-skidz')
const moment = require('moment')
const ms = require('ms')
exports.run = function(client, message, args) {
  let ülkes = ['Ülkeler', 'ülkeler']
  if(ülkes.includes(args[0])){
   
    let embed = new MessageEmbed()
    .setTitle(`Covid-19 İstatistikleri için Geçerli Ülkeler`)
    .setDescription(`**Not:** Ülkelerin kısaltılmış kodlarını kullanın.`)
    .addField(`Ülkeler`, `Türkiye = TR\nBirleşik Krallık = GB\n Amerika Birleşik Devletleri = US\nAlmanya = DE\nDaha fazlası için [BANA TIKLA](https://www.nationsonline.org/oneworld/country_code_list.htm)`)
    message.channel.send(embed)
    return;
  }
      if(!args[0]){
      message.channel.send("Bir ülke kodu yazmalısın. Örneği: TR - GB - US - DE")


            return;
    }



    if(args[0]){
    let ülke = args[0]
    console.log(args[0])
    var request = require('request');
var options = {
  'method': 'GET',
  'url': `https://corona.lmao.ninja/v2/countries/${args[0]}`,
  'headers': {
  }
};
request(options, function (error, response,body) {
  if (error) throw new Error(error);
         body = JSON.parse(body);

  if(!body.country){
    message.channel.send("Böyle bir ülke yok yada yanlış kullandın! Ülke listesi için `!corona ülkeler` yazabilirsin.")
     
    return;
  }
if(!body.message){
translate({
  text: body.country,
  source: 'en',
  target: 'tr'
}, function(result) {
  console.log(result.translation);

  let isim = result.translation
  if(isim == 'UK') isim = "Birleşik Krallık"

  let embed =  new MessageEmbed()
  .setTitle(isim+ " Covid-19 İstatistik")
  .addField(`Toplam Vaka Sayısı:`, body.cases,true)
  .addField(`Toplam Ölü Sayısı:`, body.deaths,true)
  .addField(`Toplam İyileşme Sayısı:`, body.recovered,true)
  .addField(`Bugünki Vaka Sayısı:`, body.todayCases,true)
  .addField(`Bugünki Ölüm Sayısı:`, body.todayDeaths,true)
  .addField(`Net Vaka Sayısı:`, body.active,true)
  .addField(`Toplam Test Sayısı:`, body.tests, true)
  .addField(`Yoğun Bakımdakilerin Sayısı:`, body.critical, true)
  .addField(`Güncellenme Tarihi:`, `${moment(new Date(body.updated + ms("3h"))).format('YYYY-MM-DD HH:mm:ss')}`, true)
  .setThumbnail(body.countryInfo.flag)
message.channel.send(embed)
   

});
}
});

    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['virüs','korona','vaka'],
  permLevel: 0
};

exports.help = {
  name: 'corona',
  description: '',
  usage: ''
};