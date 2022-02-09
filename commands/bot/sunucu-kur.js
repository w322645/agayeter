const Discord = require('discord.js')

exports.run = async (client, message, args) => {


if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu sadece sunucu sahibi kullanabilir!"); //Yetkisini kontrol ediyoruz
        if (!message.member.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Bu komutu uygulamak için ``Kanalları Yönet`` yetkisine ihtiyacım var."); //Botun yetkisi kontrol ediyoruz

        var filter = m => m.author.id === message.author.id;
        message.guild.channels.cache.filter(channel => channel.delete()); 

       
        message.guild.channels.create("--BİLGİ--", {
            type: "category"
        }).then(c => {
            var bilgikanallari = c.id;
            message.guild.channels.create("--YAZI KANALLARI--", {
                type: "category"
            }).then(c => {
                var yazıkanallari = c.id;
                message.guild.channels.create("--SES KANALLARI--", {
                    type: "category"
                }).then(c => {
                    var seskanallari = c.id;
                   
                    message.guild.channels.create("📗kurallar📗", {
                        type: "text",
                        parent: bilgikanallari
                    })
                    message.guild.channels.create("📢duyurular📢", {
                        type: "text",
                        parent: bilgikanallari
                    })

                    message.guild.channels.create("💬genel-sohbet💬", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("💬genel-sohbet2💬", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("📷foto-sohbet📷", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("📷foto-sohbet2📷", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("🎮oyun-sohbet🎮", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("🎮oyun-sohbet2🎮", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("🤖bot-kullanım🤖", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("🤖bot-kullanım2🤖", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("💬diğer💬", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("💬diğer2💬", {
                        type: "text",
                        parent: yazıkanallari
                    })

                    message.guild.channels.create("💬Sohbet 1💬", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("💬Sohbet 2💬", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("💬Sohbet 3💬", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("🎵Müzik 1🎵", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("🎵Müzik 2🎵", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("🎵Müzik 3🎵", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("🎮Oyun 1🎮", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("🎮Oyun 2🎮", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("🎮Oyun 3🎮", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Diğer 1", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Diğer 2", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Diğer 3", {
                        type: "voice",
                        parent: seskanallari
                    })

                })
            })
        })
    };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["sunucu-kur"],
        permLevel: 4
      };
      
      exports.help = {
        name: "deneme",
        description: "sunucu kur deneme sualp",
        usage: "deneme @kullanıcı"
      };