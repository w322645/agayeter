const { MessageEmbed } = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
  var sahip = "852641223947845743"
  if(message.author.id !== sahip) return message.channel.send(
  new MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setDescription(`**Hey ${message.author.tag}!** Bu komutu sadece sahibim kullanabilir. <a:YanpSnennleGif:814802754672656404>`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
   var e = qdb.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
if(!args[0]) return message.channel.send(
new MessageEmbed()
  .setColor('#36393f')
  .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
  .setDescription(`Bir seçenek belirtmeniz gerekli! \`${p}bakım aç  /  ${p}bakım kapat\` <a:ttnet:764635922917621791>`)
  .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
)
 if(args[0] === "aç"){
  if(!qdb.has(`bakım_${client.user.id}`)){
    qdb.set(`bakım_${client.user.id}`, "açık")
    return message.channel.send(
    new MessageEmbed()
      .setColor('#36393f')
      .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setDescription(`Bakım modu açıldı sahibim! Bundan sonra senin dışında kimse komut kullanamayacak. <a:YanpSnennleGif:814802754672656404>`)
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )}
    else return message.channel.send(
    new MessageEmbed()
      .setColor('#36393f')
      .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setDescription(`Bakım modu zaten açık <a:YanpSnennleGif:814802754672656404>`)
     .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )
  };
  if(args[0] === "kapat"){
  if(qdb.has(`bakım_${client.user.id}`)){
    qdb.delete(`bakım_${client.user.id}`)
    return message.channel.send(
    new MessageEmbed()
      .setColor('#36393f')
      .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setDescription(`Bakım modu kapatıldı! Bundan sonra herkes komutları kullanabilir <a:YanpSnennleGif:814802754672656404>`)
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )}
    else return message.channel.send(
    new MessageEmbed()
      .setColor('#36393f')
      .setAuthor(`${client.user.username} Bakım Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setDescription(`Bakım modu zaten açık değil <a:YanpSnennleGif:814802754672656404>`)
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))        
    )
  };
  
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "bakım"
}