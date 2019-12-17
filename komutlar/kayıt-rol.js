const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let rol = message.mentions.roles.first()
 let kontrol = db.fetch(`vrolk_${message.guild.id}`) 
  if(kontrol) {
    
     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if(!rol) return message.channel.send(' Selam Kayıt Tamamlandığı Zaman Verilecek Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz Örnek: $kayit-verilecek-rol-ayarla @üyeler')
  message.channel.send('Kayıt Olan Kullanıcılara Verilecek Rol, `'+kontrol+'` Rolünden, '+rol+' Rolü Şeklinde Ayarlandı.')
 db.set(`vrol_${message.guild.id}`, rol.id)   
    return
  }
  
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if(!rol) return message.channel.send('Selam Kayıt Tamamlandığı Zaman Verilecek Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz Örnek: $kayit-verilecek-rol-ayarla @üyeler')
  message.channel.send('Kayıt Olan Kullanıcılara Verilecek Otomatik Rol '+rol+' Şeklinde Ayarlandı.')
 db.set(`vrol_${message.guild.id}`, rol.id)  
  db.set(`vrolk_${message.guild.id}`, rol.name)   
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kayit-verilecek-rol-ayarla'], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-rol',
  description: 'taslak', 
  usage: 'kayit-verilecek-rol-ayarla'
};