const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:626445972620443648> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let isimm = args.slice(0).join(' ');
  if(!isimm) return message.channel.send('ototag Kullanımı Örnek `$ototag 🔱| -uye-`')
  
   message.channel.send('Oto Tag Sistemi Ayarlanmıştır.\nUnutmayın Sunucuya Yeni Katılan Kullanıcılar içindir. Kapatmak İçin `$ototagkapat`')
  
    db.set(`ototag_${message.guild.id}`, isimm)  


  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['ototag'], 
  permLevel: 0
};

exports.help = {
  name: 'ototag',
  description: 'taslak', 
  usage: 'ototag'
};