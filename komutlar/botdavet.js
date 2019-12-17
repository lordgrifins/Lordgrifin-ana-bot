const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
  var embed = new Discord.RichEmbed()
  .setColor('BLUE')
  .setAuthor("LordGriffin")
    .addField('Bot Sunucusuna Katılmak İstermisin?')
    .addField(" Davet linki \n:https://discord.gg/5Ga39k")
    .addField(" Botumuzu sunucuna davet Etmek istersen https://discordapp.com/oauth2/authorize?client_id=655717788551348234&scope=bot&permissions=2146958847")
  message.channel.send({embed: embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['davetet'],
    permLevel: 0,
    
}

exports.help = {
    name: 'davet',
}