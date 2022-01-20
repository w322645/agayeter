const arezdb = require('quick.db');
module.exports.run = async(client, message) => {
    arezdb.delete(`otoisim_${message.guild.id}`)
    return message.reply("Sıfırlandı!")
};
module.exports.conf = {aliases: [], permLevel: 3};
module.exports.help = {name: "otoisim-sıfırla"}