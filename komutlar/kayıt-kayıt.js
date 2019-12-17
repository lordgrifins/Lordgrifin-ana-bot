const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => { 
  let kanal = await db.fetch (`kanal_${message.guild.id}`)
  let rolal = await db.fetch(`vrola_${message.guild.id}`)
  let rolver = await db.fetch(`vrol_${message.guild.id}`)
  let isim = await db.fetch(`isim_${message.guild.id}`)
  let mesaj = await db.fetch(`mesaj_${message.guild.id}`)
  let kanallog = await db.fetch(`kanalLog_${message.guild.id}`)

  if(!isim) {
    message.channel.send('İsim sistemi kapalı olduğu için, kayıt sistemi çalıştırılamadı! `c!isimsistemi` yazarak aktif hale getirebilirsiniz.')
    return
  }
  if(kanal && message.channel.id !== kanal) {
    message.channel.send('Sadece Kayıt Kanalından Kayıt Olabilirsiniz.').then(mesaj => mesaj.delete(5000))
    return
  }
//CODEMİNG / Yasin..
  let isim2 = args[0]
  let yaş = args[1]

  if(isim.includes('-uye-') && !isim.includes('-yas-')) {
    if(!isim2) return message.channel.send('Seni Kayıt Etmem İçin Bir İsim Girmelisin : `c!kayıt Mahmut`')
    if(kanallog) {
      client.channels.get(kanallog).send(':scroll: '+message.author+' İçin Kayıt İşlemi Başarı İle Tamamlandı.:clipboard:') 
      var isimm = await db.fetch(`isim_${message.guild.id}`).replace("-uye-", `${isim2}`)
      message.guild.member(message.member).setNickname(isimm)
    }
    
    if(rolver) {
      message.member.addRole(rolver)
    }
    
    if(rolal) {
      message.member.removeRole(rolal)
    }
    message.channel.send(':scroll: '+message.author+' Kaydınız Oluşturuldu.')
    return  
  }
  
  if(isim.includes('-uye-') && isim.includes('-yas-')) { // bu ne? yaş varsa isim yoksa ne la
    if(!isim2) return message.channel.send('Seni Kayıt Etmem İçin Bir İsim Girmelisin : `$kayıt Mahmut 18`')
    if(!yaş) return message.channel.send('Yaş İçin En Az 1 Basamak Belirtebilirsin. Örnek: `$kayıt Mahmut 18`')
    if(yaş.length < 2) return message.channel.send('Yaş İçin En Fazla 2 Basamak Belirtebilirsin. Örnek: `$kayıt Mahmut 18`')
    if(isNaN(args[1])) return message.channel.send('Yaş İçin Sayı Girmelisin. Örnek: `$kayıt Mahmut 18`')
    if(kanallog) {
      client.channels.get(kanallog).send(':scroll: '+message.author+' İçin Kayıt İşlemi Başarı İle Tamamlandı.:clipboard:') 
      var isimm = await db.fetch(`isim_${message.guild.id}`).replace("-uye-", `${isim2}`).replace("-yas-", `${yaş}`)
      message.guild.member(message.member).setNickname(isimm)
      message.channel.send(':scroll: '+message.author +' Kaydınız Oluşturuldu.')
      return
    }

    if(rolver) {
      message.member.addRole(rolver)
    }
    if(rolal) {
      message.member.removeRole(rolal)
    } 
  }
};

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: 'kayıt', 
  usage: 'kayıt'
};