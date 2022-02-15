const Discord = require('discord.js');
const ayarlar = require('../../config');
const db = require('quick.db');
const ms = require('ms')
exports.run = async (client, message, args) => {
let kişi = message.mentions.users.first()

var AGA = args[1]

let parapara =  db.subtract(`para_${kişi.id}`, AGA) || 0  

if(!AGA) return message.channel.send('Sahibim Lütfen Bir Miktar Belirtiniz')
if(!kişi) return message.channel.send('Sahibim Lütfen Bir Kişi Belirtiniz')



const mesajks = new Discord.MessageEmbed()
.setDescription(`Ana Panelden ${kişi} Kişisinden ${AGA} Miktar Para Silindi Sahibim.`)
.setColor('GREEN')
message.channel.send(mesajks)




};
exports.conf = {
  aliases: ['parasil','para-al'],
  permLevel: 4
};

exports.help = {
  name: 'para-sil'
};