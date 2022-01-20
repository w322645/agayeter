const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../../config.json");
const { stripIndents } = require("common-tags");
exports.run = (client, msg, args) => {
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  msg.reply("Sigara İçiyorum!").then(msg => {
    sleep(2000);

    msg
      .edit(" :smoking: :cloud:")

      .then(msg => {
        sleep(2000);
        msg
          .edit(" :smoking: :cloud: :cloud:")

          .then(msg => {
            sleep(2000);
            msg
              .edit(" :smoking: :cloud: :cloud: :cloud:  ")

              .then(msg => {
                sleep(2000);
                msg.edit("  :smoking: :cloud: :cloud: ").then(msg => {
                  sleep(1000);
                  msg.edit("  :smoking: :cloud: ");
                });
              });
          });
      });
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

var use = "sigaraiç";

exports.help = {
  name: use,
  description: use,
  usage: use
};
