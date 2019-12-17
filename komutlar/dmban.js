const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
 
  if (!message.guild.members.get(client.user.id).hasPermission("KICK_MEMBERS")) return message.channel.send(`${client.emoji.hayir} yetkiniz Yok. `)
 
  
  let user = message.mentions.users.first()  
   
  if(!user) return message.channel.send(`${client.emoji.hayir} adam seç oç`)    
   
 
  
     if (client.user.id === user.id) return message.channel.send(`${client.emoji.hayir} Beni mi atican oç!`)

  if (!user) return message.channel.send(`${client.emoji.hayir} Sunucudan uzaklaştıracağın kullanıcıyı belirtmelisin!`)
   if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send(`yetkim yok oç`)
  else  if (!message.guild.member(user).bannable) return message.channel.send(`Kullanıcını Sunucudan atmak için yetkim yok.`)
 
  message.channel.send(`**${user.tag}** Atmak istiyorsan evet Yazman Yeterli.`)
    message.channel.awaitMessages(res => res.content === 'evet' && res.author.id === message.author.id, { max: 1,  time: 10000, errors: ['time'],  })
  
      .then((collected) => {
    message.guild.member(user).kick()
   message.reply("Kullanıcı Sunucudan atıldı.").then(anan => anan.delete(2000))
}).catch(() => message.channel.send(' 10 saniye doldu Tekrar Deneyin.') );
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: "Kullanıcıları At",
  kategori: "yetkili",
 };

exports.help = {
  name: 'at',
  description: 'Belirttiğiniz kullanıcıyı atarsınız',
  usage: 'at <üye> [sebep]',
  
    enname: 'kick',
  endescription: 'Belirttiğiniz kullanıcıyı atarsınız',
  enusage: 'kick <member> [reason]'
};