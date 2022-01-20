const virus = require("discord.js");
const db = require('quick.db')
exports.run = async (client, message, args) => {
  var prefix = db.fetch(`prefix_${message.guild.id}`)
  if(!prefix){
    var p = "?"
  }
  if(prefix){
    var p = prefix
  }
  if (!args[0]) {
    
    const hata = new virus.MessageEmbed()
      .setColor("ORANGE")
      .setFooter('Film Ekletmek İçin Destek Sunucuma Gelin')
      .setTitle("Doğru Kullanım:").setDescription(`
      - ${p}film-öner aksiyon

      - ${p}film-öner korku
      
      - ${p}film-öner bilimkurgu
      `);
    message.channel.send(hata);
  }
  // korku
  if (args[0] === "aksiyon") {
    var aksdizi = [
      "**La Casa De Papel** Profesör olarak adlandırılan bir suç dehası, tarihin en büyük soygununu yapmayı planlar. Amacı İspanya Kraliyet Darphanesine girmektir. Bunun için de işlerinde uzman olan 8 suçludan oluşan bir ekip kurar. Ekip, 5 aylık bir eğitim sürecinden geçer ve bu sürede her ihtimali hesaba katarak soygunu kusursuz bir hale getirirler. Artık her şey hazırdır. 8 kişi, rehineleri de yanlarına alarak kendilerini İspanya Kraliyet Darphanesine kitler fakat hiç hesaba katmadıkları olaylar gerçekleşir.",
      "**Project Power** Hapın şehirde yayılması, bölgenin suç oranında ciddi bir artışa neden olunca yerel bir polis harekete geçer. Hapın yaratılmasından sorumlu olanların peşine düşen polis, bu süreçte genç bir satıcı ve intikam arzusu içinde olan eski bir askerle birlik olur.",
      "**Bloodshot** Durdurulamaz Güç, öldürülmesinin ardından Bloodshot olarak tekrar hayata döndürülen bir askerin hikayesini konu ediyor. Asker olan Ray Garrison ve karısı öldürüldüğünde, kimliklerini gizleyen bir grup bilim insanı harekete geçer. Bilim insanları nano teknoloji sayesinde Ray'ı hayata geri döndürür.",
      "**Boss Level** hiç bitmeyen bir zaman döngüsüne hapsolan emekli özel kuvvetler subayının hikayesini konu ediyor. Roy Pulver, ülkesine uzun süre hizmet eden ve bir süre önce emekli olan özel kuvvetler subayıdır. Cinayete kurban giden Roy, öldüğü günün sürekli tekrarlandığı bir zaman döngüsüne hapsolduğu keşfeder.",
      "**Asla Pes Etme**Jake (Sean Faris) okulda yenidir ve görünüşe göre sadece okulun güzel kızı (Amber Heard) tarafından dostça karşılanmıştır. Tam herşeyin yoluna gireceğini düşündüğündeyse dövüş klübünün başarılı ismi Ryan'la (Cam Gigandet) kanlı bir kavgaya tutuşur ve dayak yer.",
      "**The Eternals** kozmik varlıklar olan Celestiallar'ın milyonlarca yıl önce insanlar üzerinde deneyler yaparak Eternallar ve Deviantlar'ı yaratma hikayesini anlatıyor. Süper güçlere sahip iki grup, hangi ırkın daha yüce olduğunu kanıtlamak için tarih boyunca birbiriyle mücadele ediyor."
      // aksiyon dizisi sevmiyorum :(
    ];
    var aksiyondata = aksdizi[Math.floor(Math.random() * aksdizi.length)];
    const aksiyon = new virus.MessageEmbed()
      .setColor("RED")
      .setTitle("İşte Sana Önderdiğim Film:")
    .setFooter('Film Ekletmek İçin Destek Sunucuma Gelin')
      .setThumbnail("http://purepng.com/public/uploads/large/purepng.com-soldiersoldiersweapon-holderfighterwar-fighterwarriorarmy-1421526972206ddfn4.png")
      .setDescription(`${aksiyondata}`);
    message.channel.send(aksiyon);
  }
  // kurgu
  if (args[0] === "korku") {
    var krkdata = [
      "**O** Stephen King'in aynı isimli popüler romanından sinemaya uyarlanan O (It), küçük bir kasabada çocukların kaybolmasıyla gün yüzüne çıkmaya başlayan bir gizemin peşinden giden bir grup çocuğun hikâyesini anlatıyor.",
      "**#ALIVE** #Alive, Cho il Hyung tarafından yönetilen ve Yoo Ah-in ile Park Shin-hye'yin iki genç yetişkini canlandırdığı zombi kıyametini konu alan Güney Kore yapımı bir film. ... Birçok insan evde sıkışıp kaldı ve bazen Yoo Ah-in ve Park Shin-hye gibi yemek için mücadele etti.",
      "**Countdown** Countdown, bir uygulamadan hayattaki son günlerini yaşadığını öğrenen genç bir kadının hikayesini konu ediyor. Genç bir hemşire, insanların en zaman öleceğini tahmin eden bir uygulamayı indirir.",
      "**Hayal Adası** Hayal Adası, eğlenmek için bir adaya giden bir grup insanın yaşadıkları konu ediliyor. Bir grup insan, gönüllerince eğlenecekleri, hayallerindeki birçok şeyi gerçekleştirebilecekleri Fantasy Island'a gider. Fakat adada onları bekleyen düşlediklerinden oldukça farklıdır.",
      "**Death Note** Death Note (デスノート Desu Nōto, Türkçe: Ölüm Defteri), Japonya'da Tsugumi Ooba tarafından yazılıp Takeshi Obata tarafından resimlenen bir mangadır. On yedi yaşındaki lise öğrencisi Light Yagami'nin, bir şinigaminin düşürdüğü doğaüstü bir defteri (Ölüm Defteri) bulup kendini nasıl Yeni Dünyanın Tanrısı yaptığını anlatır.",
      "**Polaroid** Halka ile Son Durak serisinin atmosferini yaşatan Polaroid filmi lisede dışlanan Bird Fitcher'ı temel alıyor. Bird günün birinde eski bir fotoğraf makinesi bulur. Polaroid türü bu fotoğraf makinesi çok hoşuna gider. Ancak kısa bir süre sonra makinede bir şeylerin yanlış olduğunu anlar. Kimin fotoğrafını çekse, çektiği kişiler trajik ölümler yaşamaktadır. Genç kız ve arkadaşlarının hayatta kalabilmek için bir günden az zamanları vardır ve lanetli makinenin sırrını çözmek zorundalardır...",
      "**Görünmez Adam**Cecilia zengin ve akıllı bir bilim adamıyla evlidir. Ancak fziksel ve duygusal şiddet içeren bu evlilikten kurtulman için Cecilia dostlarının yardımını alır ve ortadan kaybolur. Bir süre sonra Cecilia'nın kocası hayatını kaybeder ve akıl almaz servetinin büyük bir kısmını Cecilia'ya bırakır.",
      "**Sessizlik** (İsveççe: Tystnaden), yönetmenliğini Ingmar Bergman'ın üstlendiği 1963 yapımı İsveç filmidir. Ingrid Thulin ve Gunnel Lindblom'un başrollerini paylaştığı yapım iki kız kardeşin eve dönüş yolculuğunda yaşadıklarını konu almaktadır. Film, Bergman'ın Tanrının Sessizliği üçlemesini tamamlamıştır."
    ];
    var korkudata = krkdata[Math.floor(Math.random() * krkdata.length)];
    const korku = new virus.MessageEmbed()
      .setColor("BLACK")
      .setTitle("İşte Sana Önderdiğim Film:")
      .setThumbnail("http://i.hizliresim.com/Knlb0N.png")
    .setFooter('Film Ekletmek İçin Destek Sunucuma Gelin')
      .setDescription(`${korkudata}`);
    message.channel.send(korku);
  }
  // bilim kurgu
  if (args[0] === "bilimkurgu") {
    var blmdata = [
      "**Stranger Things** Ufak bir kasabada küçük bir çocuk kaybolunca, gizli deneyler, korkutucu doğaüstü güçler ve tuhaf bir küçük kızın da parçası olduğu bir gizem ortaya çıkar.",
      "**The Rain** Danimarkalı iki kardeş, yağmurla gelen ve İskandinavya nüfusunun çoğunu yok eden ölümcül virüstün kurtulmayı başarmıştır. Kendilerine yeni bir dünya kurmak isteyen kardeşler güvenli bir yer bulmak için yolculuğa çıkarlar.\n\n***EKLETMEK İSTEDİĞİNİZ FİLMLERİ BOT SAHİBİNE SÖLEYİN***"
    ];
    var blmkrgdata = blmdata[Math.floor(Math.random() * blmdata.length)];
    const blmkurgu = new virus.MessageEmbed()
      .setColor("GREEN")
      .setTitle("İşte Sana Önderdiğim Film:")
    .setFooter('Film Ekletmek İçin Destek Sunucuma Gelin')
      .setThumbnail(
        "https://www.pngkit.com/png/full/1-16854_superman-png-superman-png-transparent.png"
      )
      .setDescription(`${blmkrgdata}`);
    message.channel.send(blmkurgu);
  }
  ///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["film-öner"],
  permLevel: 0
};

exports.help = {
  name: "filmöner"
};
