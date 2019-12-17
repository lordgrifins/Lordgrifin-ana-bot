const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('**» Moderasyon Komutları**')
.setTimestamp()
.addField('**» Ototag Sistemi**', '`!ototag ♆ | -uye-` veya `!ototagkapat` yazmalısınız.')
.addField('**» Küfürengel Sistemi**', '`!küfürengel aç` veya `!küfürengel kapat` yazmalısınız.')
.addField('**» Reklamkick Sistemi**', '`!reklamkick aç` veya `!reklamkick kapat` yazmalısınız.')
.addField('**» Özelhoşgeldin Sistemi**', '`!özelhoşgeldin <yazı>`')
.addField('**» Sunucukur Sistemi**', '`$sunucukur`')
.addField('**» Hgbb Sistemi**', '`!hgbb-ayarla <#kanal>`')
.addField('**» Kayıt Sistemi**', '`!kayitsistemi`')
.addField('**» Everyonengelle Sistemi**', '`!everyonengel aç` veya `$everyonengel kapat` yazmalısınız.')
.addField('**» Ban Sistemi**', '`!ban @uye`')
.addField('**» Herkestenrolal Sistemi**', '`!herkestenrolal @role`')
.addField('**» Herkeserolver Sistemi**', '`!herkeserolver @role`')
.setFooter('© 2019 LordGraffin', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['moderasyon'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};