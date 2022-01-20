const Discord = require('discord.js');
const moment = require('moment-timezone');
exports.run = async(theartist, message, plasmic) => {
let tarihh = new Date().getTime()
message.channel.send(new Discord.MessageEmbed().setDescription(`\`\`\`fix\nEurope/Istanbul\n\`\`\`\n\n**Saat şu anda:** \`${moment.tz("Europe/Istanbul").format('HH.mm')}\``))
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['st','time','saat'],
permLevel: 0
};

exports.help = {
name: "saat-kaç",
description: "taslak",
usage: "saat-kaç"
};
