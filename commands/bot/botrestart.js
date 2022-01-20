const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
  var sifre = ('||efda123||')
 

message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setDescription('Botun yeniden başlatılmasına `onay` veriyorsanız, Şifreyi yazın.'))
.then(() => {
   
message.channel.awaitMessages(response => response.content === sifre , {
    max: 1,
    time: 30000,
    errors: ['time']
  ,
  })
  
  .then((dombili) => {
      
      message.channel.send(new Discord.MessageEmbed().setTitle("Restart İşlemi Başlatılıyor :YanpSnennleGif:").setColor("#36393f").setDescription(`**Bot Yeniden Başlatıldı Bi 12 Saniye Sonra Hizmetinizde Efendim** :YanpSnennleGif:`)).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor... :ttnet:`)
      process.exit(1);
    }).catch(console.error)
    }) 
    .catch(() => {
      message.channel.send('**Yeniden başlatma işlemi iptal edildi.**');
    });
}); 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-restart"],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: '[Admin Komutu]',
  usage: 'reboot'
};