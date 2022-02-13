const Discord = require('discord.js');
const db = require('quick.db')
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['🥒', '🍎', '🍅', '🍋', '🐻'];

exports.run = function(client, message) {

    var slot1 = slots[Math.floor(Math.random() * slots.length)];
    var slot2 = slots[Math.floor(Math.random() * slots.length)];
    var slot3 = slots[Math.floor(Math.random() * slots.length)];

     var paras = ["5000000"];
      var parasik = paras[Math.floor(Math.random() * paras.length)];

      
    if (slot1 === slot2 && slot1 === slot3) {
       db.add(`para_${message.author.id}`, parasik)
        message.channel.send(stripIndents`
        ${slot1} : ${slot2} : ${slot3}
        Tebrikler, kazandınız!
        `);
    } else {
        message.channel.send(stripIndents`
        ${slot1} : ${slot2} : ${slot3}
        Eyvah, kaybettin!
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