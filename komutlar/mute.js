const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("**Lütfen Kullanıcı Gir.**");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Bunu Yapmaya Yetkin Yok! Geçerli Yetki `MANAGE_MESSAGES`");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("**Süreyi Girmeyi Unuttun! \nsaniye(s), Dakika(m), Saat(h), Gün(d) \#ÖRN; `$mute @kullanıcı 1m`**");

  await(tomute.addRole(muterole.id));
  message.reply(`**<@${tomute.id}> Adlı Kişi ${ms(ms(mutetime))} Saniye Kadar Mutelendi!**`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`**<@${tomute.id}> Adlı Kişinin Mutesi Kalktı!**`);
  }, ms(mutetime));


}
exports.conf = {
    enabled: true,
    aliases: ['mute'],
    permLevel: 3
};

exports.help = {
    name: 'mute',
    description: 'Çalan şarkı bitince aynı şarkıyı otomatik olarak tekrar oynatır.',
    usage: 'tekrar'
};

