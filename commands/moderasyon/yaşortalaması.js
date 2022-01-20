const Discord = require("discord.js")
const config = require("../../config")

module.exports.run = async (client, message, args) => {
    let yas8 = message.guild.members.cache.filter(x=> x.displayName.includes("8")).size; 
let yas9 = message.guild.members.cache.filter(x=> x.displayName.includes("9")).size;
let yas10 = message.guild.members.cache.filter(x=> x.displayName.includes("10")).size;
let yas11 = message.guild.members.cache.filter(x=> x.displayName.includes("11")).size;    
let yas12 = message.guild.members.cache.filter(x=> x.displayName.includes("12")).size;
let yas13 = message.guild.members.cache.filter(x=> x.displayName.includes("13")).size;
let yas14 = message.guild.members.cache.filter(x=> x.displayName.includes("14")).size;
let yas15 = message.guild.members.cache.filter(x=> x.displayName.includes("15")).size;
let yas18 = message.guild.members.cache.filter(x=> x.displayName.includes("18")).size;
let yas19 = message.guild.members.cache.filter(x=> x.displayName.includes("19")).size;
let yas20 = message.guild.members.cache.filter(x=> x.displayName.includes("20")).size;
let yas16 = message.guild.members.cache.filter(x=> x.displayName.includes("16")).size;
let yas17 = message.guild.members.cache.filter(x=> x.displayName.includes("17")).size;
let yas21 = message.guild.members.cache.filter(x=> x.displayName.includes("21")).size;
let yas22 = message.guild.members.cache.filter(x=> x.displayName.includes("22")).size;
let yas23 = message.guild.members.cache.filter(x=> x.displayName.includes("23")).size;
let yas24 = message.guild.members.cache.filter(x=> x.displayName.includes("24")).size;
let yas25 = message.guild.members.cache.filter(x=> x.displayName.includes("25")).size;
let yas26 = message.guild.members.cache.filter(x=> x.displayName.includes("26")).size;
let yas27 = message.guild.members.cache.filter(x=> x.displayName.includes("27")).size;
let yas28 = message.guild.members.cache.filter(x=> x.displayName.includes("28")).size;
let yas29 = message.guild.members.cache.filter(x=> x.displayName.includes("29")).size;
let yas30 = message.guild.members.cache.filter(x=> x.displayName.includes("30")).size;


let embed = new Discord.MessageEmbed()
.setColor('#36393f')
.setAuthor(message.guild.name, message.guild.iconURL({ dymaic: true}))
.setDescription(`Sunucudaki Yaş Ortalaması;
\`8 Yaş:\` **${yas8}** Kişi
\`9 Yaş:\` **${yas9}** Kişi
\`10 Yaş:\` **${yas10}** Kişi
\`11 Yaş:\` **${yas11}** Kişi
\`12 Yaş:\` **${yas12}** Kişi
\`13 Yaş:\` **${yas13}** Kişi
\`14 Yaş:\` **${yas14}** Kişi
\`15 Yaş:\` **${yas15}** Kişi
\`16 Yaş:\` **${yas16}** Kişi
\`17 Yaş:\` **${yas17}** Kişi
\`18 Yaş:\` **${yas18}** Kişi
\`19 Yaş:\` **${yas19}** Kişi
\`20 Yaş:\` **${yas20}** Kişi
\`21 Yaş:\` **${yas21}** Kişi
\`22 Yaş:\` **${yas22}** Kişi
\`23 Yaş:\` **${yas23}** Kişi
\`24 Yaş:\` **${yas24}** Kişi
\`25 Yaş:\` **${yas25}** Kişi
\`26 Yaş:\` **${yas26}** Kişi
\`27 Yaş:\` **${yas27}** Kişi
\`28 Yaş:\` **${yas28}** Kişi
\`29 Yaş:\` **${yas29}** Kişi
\`30 Yaş:\` **${yas30}** Kişi
`)
.setThumbnail(message.guild.iconURL({ dymaic: true}))
message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yaş-ortalaması"],
    permLevel: 2,
  }
  
  exports.help = {
    name: 'yaşortalaması'
    
  }  