const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanmak için yeterli izne sahip değilsin.`)
let kişi = message.mentions.members.first();
let erkekrol = '651463811399811073'
 var silrol = message.guild.roles.get('651463819234770987');   
      
  message.member.removeRole(silrol);  
let isim = args[1]

if(!isim) return

if(!kişi) return 
  kişi.addRole(651463811399811073)
  kişi.addRole(651463819234770987)
kişi.setNickname(`${isim}`)
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${kişi} Başarıyla  kaydettim.`)

 );
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['erkek'],
    permLevel: 0
}

exports.help = {
    name: 'erkek'
}