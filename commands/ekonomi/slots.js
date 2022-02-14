const Discord = require('discord.js');
const db = require('quick.db')
const math = require("math-expression-evaluator");
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['🥒', '🍎', '🍅', '🍋', '🐻'];

exports.run = function(client, message, args) {

  var oynamak = args[0]
 
    var slot1 = slots[Math.floor(Math.random() * slots.length)];
    var slot2 = slots[Math.floor(Math.random() * slots.length)];
    var slot3 = slots[Math.floor(Math.random() * slots.length)];


    if (isNaN(oynamak)) return message.reply('Para Miktarını Nası Sayısız Yazıcaksın?')

let parapara = db.fetch(`para_${message.author.id}`) || 0  

if (parapara < oynamak) return message.reply(`Para Miktarından Büyük bir Para Miktarıyla Slot Oyununu Oynayamassın :( \n\n **Paranız**\`${parapara}\``)
      
    if (slot1 === slot2 && slot1 === slot3) {
       db.add(`para_${message.author.id}`, +oynamak)
        message.channel.send(stripIndents`
        ${slot1} : ${slot2} : ${slot3}
        Tebrikler, kazandınız!

    Kazancınız = \`${+oynamak}\`
        `);
    } else {
      db.add(`para_${message.author.id}`,-oynamak)
        message.channel.send(stripIndents`
        ${slot1} : ${slot2} : ${slot3}
        Eyvah, kaybettin!

        Kaybettiğiniz = \`${-oynamak}\`
        `);   
    }
  

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slot',
  description: 'Slots oyunu oynatır',
  usage: 'slot'
};