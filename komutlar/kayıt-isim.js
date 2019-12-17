const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let isim = args.slice(0).join(' ');
  if(isim.length < 5) return message.channel.send('İsim Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `$isim-sistemi [-uye-]|[-yas-]`')
  
 message.channel.send('Kayıt Olan Kullanıcıların İsimlerini '+isim+' Bu Şekle Göre Düzenleyeceğim.') 
 db.set(`isim_${message.guild.id}`, isim)  

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['isim-sistemi'], 
  permLevel: 0
};

exports.help = {
  name: 'isimsistemi',
  description: 'taslak', 
  usage: 'isimsistemi'
};