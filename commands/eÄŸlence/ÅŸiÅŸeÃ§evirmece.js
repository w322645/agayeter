const Discord = require('discord.js');
const db = require('quick.db');




exports.run = async (client, message, args) => {
   var e = db.fetch(`prefix_${message.guild.id}`)
  if(e){
    var prefix = e
  }
  if(!e){
    var prefix = "?"
  }


if(message.mentions.users.array().length<2) return message.channel.send("Doğru kullanım ``"+prefix+"şişeçevir <@kişiler(en az 2 kişi)>``");
    var liste = message.mentions.users.array();
    liste.push(message.author);
    var skisi = liste[Math.floor(Math.random()*message.mentions.users.array().length)];
    var ckisi = liste[Math.floor(Math.random()*message.mentions.users.array().length)];
    if(skisi.id == ckisi.id) var ckisi = liste[Math.floor(Math.random()*message.mentions.users.array().length)];
    if(skisi.id == ckisi.id) var ckisi = liste[Math.floor(Math.random()*message.mentions.users.array().length)];
    if(skisi.id == ckisi.id) var ckisi = liste[Math.floor(Math.random()*message.mentions.users.array().length)];
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("Şişe çevirmece")
    .setColor('#36393f')
    .setDescription("Şişe çevriliyor...")
    .setImage("https://img-s2.onedio.com/id-571679ae91b7bac822c1f485/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-67cac562c3aef9570fbeda5948334c469b3be244.gif")).then(message=>{
        setTimeout(function(){
            message.edit(new Discord.MessageEmbed()
            	.setColor('#36393f')
            .setTitle("Şişe çevirmece")
            .setDescription(`${skisi} ${ckisi}'e soruyor`))
        },3500)
    });
   message.channel.send
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['şişe-çevirmece','şişeçevir','şişeçevirmece'],
  permLevel: 0
};

exports.help = {
  name: "şişe-çevir",
  description: "İki kullanıcı sarasındaki aşkı ölçer.",
  usage: "aşkımı-ölç [@Kullanıcı] [@Kullanıcı]"
};