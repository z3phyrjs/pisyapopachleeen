const { EmbedBuilder, } = require('discord.js');


module.exports = {
    name: 'status2',
    run: async (client, message, args) => {
        let onlineMembers = message.guild.members.cache.filter(member => member.presence?.status == "online").size
        let offlineMembers = message.guild.members.cache.filter(member => !member.presence || member.presence.status == "offline").size
        let awayMembers = message.guild.members.cache.filter(member => member.presence?.status == "idle").size
        let dndMembers = message.guild.members.cache.filter(member => member.presence?.status == "dnd").size

        const hugEmbed = new EmbedBuilder()
        .setColor('#FFAC1C') // Цвет в формате HEX (в данном случае - красный)
        .setTitle(`Онлайн: ${onlineMembers}, Оффлайн ${offlineMembers}, Спит: ${awayMembers}, Не Беспокоить: ${dndMembers}`)
        .setImage('https://media.tenor.com/3Mc4IqoPAxAAAAAM/anime-dance.gif'); // Замените ссылкой на изображение обнимашки
   message.channel.send({ embeds: [hugEmbed] });
      }
    }
  