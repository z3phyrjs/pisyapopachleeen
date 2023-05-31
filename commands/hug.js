const { EmbedBuilder, } = require('discord.js');

module.exports = {
  name: 'hug',
  run: async (client, message, args) => {
    // Получение имени участника, чтобы обнять
    const memberName = args.join(' ');

    // Проверка, было ли указано имя участника
    if (!memberName) {
      return message.reply('Пожалуйста, укажите имя участника, которого вы хотите обнять.');
    }

    // Создание embed-сообщения
    const hugged= message.mentions.members.first();
    const hugEmbed = new EmbedBuilder()
      .setColor('#FFAC1C') // Цвет в формате HEX (в данном случае - красный)
      .setTitle(` ${message.author.username} обнимает ${hugged.displayName}`)
      .setImage('https://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif'); // Замените ссылкой на изображение обнимашки

    // Отправка embed-сообщения
    message.channel.send({ embeds: [hugEmbed] });
  },
};