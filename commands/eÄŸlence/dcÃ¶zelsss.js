const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = ['Senin İçin Boyumu Yoksa İşlevimi (`yoksa hem 19cm olup hemde hızlı olmasımı`)','Hızlımı İstersin Yoksa Yavaşmı','Sexte En Çok Yapmak İstediğinşey','Nasıl Bir Sex Yapmak İstersin `Detaylı Anlat`','Porno İzledinmi İzlediysen En son Ne zaman','62 Çekmeyi Düşündünmü','62 en son ne zaman çektin','Sabah ya da yatmadan hemen önce ilk şey daha seksi olduğumu düşünüyor musun?','Hiç öğretmenle seks yapmayı hayal ettin mi? Varsa hangisi?','Fetişin Varmı Varsa Neler','Hiç Amına Parmağını Arasına Soktunmu','Am a dokunma Hissi Nasıl bişi','Sike Dokunma Hissiyatı Nasıl','Hiç 31 Çektinmi','En kötü cinsel deneyiminizden bahsedi','Hiç arabada seks yaptın mı','Bana kullanmak istediğiniz oral tekniği tanımlayarak mümkün olduğunca azgın beni alın','En sevdiğiniz seks hangisi? Yumuşak ve tatlı mı yoksa agresif ve yaramaz mı?']
    var cesaret = ['DAHA YAZMADIM SAKİNN']
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi? \n\n\`Burda Yaşanan Burda Kalır\`')
    let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Lütfen sadece **doğruluk (d)** veya **cesaret (c)** ile cevap verin.`) 
        }
        if (choice == 'cesaret' || choice == 'c') uwu = true
    }
    if (uwu) {
        message.channel.send(`${cesaretcevap}`)

    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'özeldc',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};