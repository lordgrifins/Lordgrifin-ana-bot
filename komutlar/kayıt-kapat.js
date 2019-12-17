const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let kanal = db.fetch(`kanal_${message.guild.id}`)
  let rolal = db.fetch(`vrolak_${message.guild.id}`)
let rolver = db.fetch(`vrolk_${message.guild.id}`)
let isim = db.fetch(`isim_${message.guild.id}`)
let mesaj = db.fetch(`mesaj_${message.guild.id}`)
let kanallog = db.fetch(`kanalLog_${message.guild.id}`)
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

message.channel.send('Kayıt Sistemi Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')

  if(kanal) db.delete(`kanal_${message.guild.id}`)
  if(rolal) db.delete(`vrolak_${message.guild.id}`)
  if(rolver) db.delete(`vrolk_${message.guild.id}`)
if(isim) db.delete(`isim_${message.guild.id}`)
if(mesaj) db.delete(`mesaj_${message.guild.id}`)
if(kanallog) db.delete(`kanalLog_${message.guild.id}`)

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayit-sistemi-kapat',
  description: '.', 
  usage: 'kayit-sistemi-kapat'
};