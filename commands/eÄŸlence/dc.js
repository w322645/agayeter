const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = ['Odanız en son ne zaman temizlendi?','Hiç böcek yedin mi?','En İyi Arkadaşın Kim','Hiç bir çerezi reddettin mi?','Bir havuza işedin mi','Para harcamaktan pişman olduğunuz bir şey var mı?','En sevdiğin öğretmen kim?','Dans etmeyi veya şarkı söylemeyi sever misin?','Yaptığın En Salakça şey','Pişman Olduğun Bir Hata Yada VB...','En Çok Yaptığın Kötü Alışkanlığın ?','Yaptığın En Büyük Mallık :D `(Sorry) Bunları Sahibim Yazmadı aSDÇASF`','Sana kendini ne güvensiz hissettirir ?','En Utanç Verici Yaptığın Ve Devam Ettirdiğin Şey ?','En Komik Utanç Verici Bi anın','En Büyük Sırrın','Burdaki Kişiler Hakkındaki Düşündüklerin','Yaşadığın En kötü Arada Kalma Durumu','Hayatta Zorluklar Çektinmi','Efda Botunu Ne Kadar Seviyosun','En Büyük İhanetin','En çok Utandığın,Veya Yaptığın Şeyi Söyle','Köyde Yaptığın En çılgınca Şeyi Söyle','En Kötü Anını Anlat','Babana Veya Annene Söylediğin En büyük YALAN','Hiç Yapmam Dediğin Bİşi Yaptınmı,Yaptıysan Ne Yaptın','Sümüğünü Alıp Ağzına Sürdünmü ?','Arkadaşlarının Sevgilisinden Hoşlandığın Oldumu','Telefonunda arattığın en son şey nedir ?', 'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?', 'Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?', 'Bokunu Çıkarttığın Bir Durum ?']
    var cesaret = ['Komşulardan bir rulo tuvalet kağıdı isteyin','Bir ayağı ve ayakkabıyı çıkarın, böylece bir ayağı oyunun geri kalanı için çıplak olsun.','Aşkını ara ve ona `Aşık olmama yardım edemem` şarkısını söyle.','yak tırnaklarınızı bir mum boya ile boyayın','Komşunuzdan yemek isteyin.','Gözü bağlı iken odandan belirli bir eşya getir.','Parmağınızı, sanki orada sıkışmış gibi burnunuzun ucunda tutun.','Düz bir şekilde 3 dakika kaşlarını çattı','Bir diş sarımsak yiyin','Kendini Tuvalet kağıdına sar.','Tavuk dansı yap','Bir bardak suyu kafanın üzerinde tut ve dökmeden zıpla.','Aptal bir yüz selfie al','Maymun gibi davran','Ayak parmaklarınızın arasına jöle koyun ve 20 dakika orada bırakın.','15 dakika boyunca söylediğin her şeyden sonra, `whoa, ben iyiyim de`.','Galerindeki Fotorafları Chat E yolla !!','Anneni Çağırıp Deli Olduğunu Söyle Yoksa(Bir Aile Üyesini)','Sunucuda Birisine Eşşek Şakası Yap','Camdan Ben Aptalım Diye Bağır','Burnunu Karıştırıp Kameraya Göster','Mikrafona Osur','Kamera Açıp Salak Bi Poz Ver','İğrenç bir ses tonuyla şarkı söyle', 'Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat', 'Whatsappındaki son mesajlaşmanı bize oku', 'Çok yüksek bir sesle 3 saniye bağır']
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
    aliases: ['doğruluk-cesaret','dc'],
    permLevel: 0
};

exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};