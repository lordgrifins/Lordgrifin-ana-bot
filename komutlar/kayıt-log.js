const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    let kanal = message.mentions.channels.first()
 let kontrol = db.fetch(`kanalLog_${message.guild.id}`)
  
  if(kontrol) {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if(!kanal) return message.channel.send('Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: `$kanal-ayarla #logkanal`')
  
  message.channel.send('Sunucunuzda, `'+kontrol+'` Olan kayıt Log kanalını,'+kanal+' Olarak Ayarladım.')
db.set(`kanal_${message.guild.id}`, kanal.id)   
  return
  }
  
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:626445972620443648> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if(!kanal) return message.channel.send('Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: `$kanal-ayarla #logkanal`')
  
  message.channel.send('Kayıt Log Kanalını '+kanal+' Olarak Ayarladım.')
db.set(`kanalLog_${message.guild.id}`, kanal.id)  
 


};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kanalayarla'], 
  permLevel: 0
};

exports.help = {
  name: 'kanal-ayarla',
  description: 'taslak', 
  usage: 'kanal-ayarla'
};