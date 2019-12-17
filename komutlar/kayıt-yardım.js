const Discord = require('discord.js');
exports.run = (client, message, args) => { 
  
 let yardım = new Discord.RichEmbed()
 .setAuthor(`${client.user.username} `,client.user.avatarURL)
 .setColor('#F2DA2C')
 .addField('• `$kayit-kanal-ayarla #kanal 》`', 'Üyelerin Kayıt Olacağı Kanal')
 .addField('• `$kanal-ayarla #kanal 》`', 'Üyeler Kayıt Olunca Bildirim Yollanan Kanal')
 .addField('• `$isim-sistemi -uye- -yas- 》`', 'Üye İsim Sistemi Özgürce Yerleştirin Değişkenler -uye- -yas- Yaş Seçeneği Ekelemezseniz Yaşı Sormayacaktır.')
  .addField('• `$kayit-verilecek-rol-ayarla @rol 》`', 'Kayıt Olan Kullanıcıya Otomatik Verilecek Rol')
   .addField('• `$kayıt-alınacak-rol-ayarla @rol 》`', 'Kayıt Olan Kullanıcıdan Otomatik Alınacak (Silinecek) Rol')
   .addField('• `$kayit-sistemi-kapat 》`', 'Kayıt Sistemini Kapatır Ve Tüm Ayarları Sıfırlar.')
   .addField('• `$giriş-sistemi Hoşgeldin -uye- Kayıt Olmak İçin $kayıt mahmut 18 》`', 'Giriş Mesajını Özgürce Editleyebilirsiniz Değişkenler -uye- -uyetag-') 
 .setDescription('KAYIT Sistemi Kullanımı')
 message.channel.send(yardım)
 

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kayitsistemi'], 
  permLevel: 0
};

exports.help = {
  name: 'kayitsistemi',
  description: 'kayitsistemi', 
  usage: 'kayitsistemi'
};