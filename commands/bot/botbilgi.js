const moment = require('moment')
require('moment-duration-format');
const os = require('os');
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const dizi = []
        client.guilds.cache.find((item, i) => {
            dizi.push(item.memberCount)
        })
        var toplam = 0
        for (var i = 0; i < dizi.length; i++) {
            if (isNaN(dizi[i])) {
                continue;
            }

            toplam += Number(dizi[i])
        }
        const uptime = moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")

        const embed = new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription("```fix\n EFDA BOT İSTATİSTİK \n```")
            .setTitle('🔬 İstatistik 🔬')
            .setThumbnail(client.user.displayAvatarURL({ size: 1024 }))
            .addField('👥 Kullanıcı Sayısı', toplam, true)
            .addField('📼 Sunucu Sayısı', client.guilds.cache.size, true)
            .addField('📟 Kanal Sayısı', client.channels.cache.size, true)
            .addField('⏲ Çalışma Süresi', uptime, true)
            .addField('🧬 Node.JS Versiyon', process.version, true)
            .addField('🔋 Ram Kullanımı', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(0), true)
            .addField('💽 CPU', `\`\`\`${os.cpus().map(i => i.model)[0]}\`\`\``)
            .addField('💊 Bit', os.arch(), true)
            .addField('📲 İşletim Sistemi', os.platform(), true)

        message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["i","botbilgi"],
    permLevel: 0
  };
  
  exports.help = {
    name: "istatistik",
    category: "kullanıcı",
    description: "Moderasyon Menüsü.",
    usage: "!moderasyon"
  };
  