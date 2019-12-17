const Discord = require('discord.js');
exports.run = (client, message, args) => { 
  
message.channel.send('Merhaba Tag Sistemi Kullanımı İçin Birkaç Taktik Vereceğim\n Sunucunuza Girenlere Oto Tag Vermek İçin `$ototag 🔱| -uye-` \n Kapatmak İçin `$ototagkapat`')  

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['ototag-yardim'], 
  permLevel: 0
};

exports.help = {
  name: 'tagsistemi',
  description: 'taslak', 
  usage: 'tagsistemi'
};