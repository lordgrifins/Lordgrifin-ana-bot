const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let kontrol = db.fetch(`ototag_${message.guild.id}`)
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:626445972620443648> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  if(!kontrol) return message.channel.send('Ayarlamadığınız Bi Tag Sistemini Kapatmaya Çalışıyorsunuz Efendim :))')
  
   message.channel.send('Tag Sistemi DevreDışıdır')
  
  db.delete(`ototag_${message.guild.id}`)  
//CodEming /Yasin..  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['ototagkapat'], 
  permLevel: 0
};

exports.help = {
  name: 'ototagkapat',
  description: 'taslak', 
  usage: 'ototagkapat'
};