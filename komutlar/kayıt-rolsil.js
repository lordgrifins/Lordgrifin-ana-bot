const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let rol = message.mentions.roles.first()
 let kontrol = db.fetch(`vrolak_${message.guild.id}`) 
  if(kontrol) {
    
     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if(!rol) return message.channel.send('Selam Kayıt Tamamlandığı Zaman Otomatik Alınacak Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz Örnek: `$kayit-alinacak-rol-ayarla @üyeler`')
  message.channel.send('Kayıt Olan Kullanıcıdan Otomatik Alınacak (Silinecek) Rol, `'+kontrol+'` Rolünden, '+rol+' Rolü Şeklinde Ayarlandı.')
 db.set(`vrol_${message.guild.id}`, rol.id)   
    return
  }
  
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if(!rol) return message.channel.send('Selam Kayıt Tamamlandığı Zaman Otomatik Alınacak Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz Örnek: `$kayit-alinacak-rol-ayarla @üyeler`')
  message.channel.send('Kayıt Olan Kullanıcıdan Otomatik Alınacak (Silinecek)  Rol '+rol+' şeklinde Ayarlandı')
 db.set(`vrola_${message.guild.id}`, rol.id)  
  db.set(`vrolak_${message.guild.id}`, rol.name)   
  //CodEming.. / Yasin
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kayıt-alınacak-rol-ayarla'], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-rolal',
  description: 'taslak', 
  usage: 'kayıt-alınacak-rol-ayarla'
};