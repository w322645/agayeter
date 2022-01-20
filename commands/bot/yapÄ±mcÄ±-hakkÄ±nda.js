const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async(client, message, args) => {
  
var prefix = db.fetch(`prefix_${message.guild.id}`)
if(!prefix){
  var prefix = "?"
}
  const torbaci = new Discord.MessageEmbed()
        .setColor("#36393f")
        .setTitle(`<a:visidi:820284700132245594> Hakkında →\`Efe Sualp Sözügerçek\``)
        .setDescription(`\`\`\`bash\n''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''\n\`\`\`\n:globe_with_meridians: __**Web Site Adresim**__ → *https://efdabot.ml/*
        
<:2506_Steam:826232539055259658> __**Steam Profilim**__ → *https://steamcommunity.com/id/sualp_w3q*

<:Discord:826238346694492200> __**Discord Sunucumuz**__ → *https://discord.gg/efda*

<:instagram:826232877242777641> __**İnstagram**__ → *https://www.instagram.com/efdabot/*

<:facebook:826232538884341811> __**Facebook**__ → *https://is.gd/FacebookEFDA*

<:youtube:826234736249667646> __**YouTube**__ → *https://is.gd/EfeSualpYoutube*
\`\`\`bash\n''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''\n\`\`\`
:telephone: __**Destek İçin :**__ \`${prefix}destek\` __**Yazmanız Yeterli**__

:purple_heart:28.01.2021:white_heart:  :heartbeat:EF:infinity:DA:heartbeat:`)
        .setFooter(client.user.username)
  message.channel.send(torbaci)
  };
exports.conf = {
  aliases: ["yapımcı-hakkında","yapımcıhakkında"],
  permLevel: 0
};
exports.help = {
  name: "hakkında"
}

