const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = ('../ayarlar.json')

exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let p = client.ayarlar.prefix;
  
  let rol = message.mentions.roles.first();
  let kanal = message.mentions.channels.first();
  
  if (!rol) return message.channel.send(` Otorolü ayarlamak için bir rol **etiketlermisin?** Örnek kullanım; \`${p}otorol-ayarla @rol #kanal\``)
  if (!kanal) return message.channel.send(` Otorolü ayarlamak için bir kanal **etiketlermisin?** Örnek kullanım; \`${p}otorol-ayarla @rol #kanal\``)
  
  if (db.has(`otorol_${message.guild.id}.rol`) === true) {
    db.set(`otorol_${message.guild.id}.rol`, rol.id)
    db.set(`otorol_${message.guild.id}.kanal`, kanal.id)
    
    message.channel.send(` Otorol ${rol}, kanalı ${kanal} olarak **değiştirildi!**`)
  }
  if (db.has(`otorol_${message.guild.id}.rol`) === false) {
    db.set(`otorol_${message.guild.id}.rol`, rol.id)
    db.set(`otorol_${message.guild.id}.kanal`, kanal.id)
    
    message.channel.send(` Otorol ${rol}, kanalı ${kanal} olarak **ayarlandı!**`)
  }
}
exports.conf = {
  guildOnly : true,
  enabled : true,
  aliases : [],
  permLvl : 3,
  kategori : `Ayarlar`
}
exports.help = {
  name : "otorol",
  description : "Sunucuya katılan kişiye otomatik rol verir.",
  usage : "otorol-ayarla @rol #kanal"
}