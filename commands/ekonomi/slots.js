const Discord = require('discord.js');
const db = require('quick.db')
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['🥒', '🍎', '🍅', '🍋', '🐻'];

exports.run = function(client, message, args) {

  var oynamak = args[0]
 
    var slot1 = slots[Math.floor(Math.random() * slots.length)];
    var slot2 = slots[Math.floor(Math.random() * slots.length)];
    var slot3 = slots[Math.floor(Math.random() * slots.length)];


if(!oynamak) return message.channel.send('Oynayacağınız Para Miktarını Giriniz')

let parapara =  db.fetch(`para_${message.author.id}`) || 0  


      
    if (slot1 === slot2 && slot1 === slot3) {
       db.add(`para_${message.author.id}`, oynamak + oynamak)
        message.channel.send(stripIndents`
        ${slot1} : ${slot2} : ${slot3}
        Tebrikler, kazandınız!

        Paran = ${parapara}
        `);
    } else {
      db.subtract(`para_${message.author.id}`,oynamak)
        message.channel.send(stripIndents`
        ${slot1} : ${slot2} : ${slot3}
        Eyvah, kaybettin!

        Paran = ${parapara}
        `);   
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slot',
  description: 'Slots oyunu oynatır',
  usage: 'slot'
};