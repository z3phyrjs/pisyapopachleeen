const { EmbedBuilder, } = require('discord.js');

module.exports = {
    name: 'onhands',
  run: async (client, message, args) => {
    // Получение имени участника, чтобы обнять
    const memberName = args.join(' ');

    // Проверка, было ли указано имя участника
    if (!memberName) {
      return message.reply('Пожалуйста, укажите имя участника, которого вы хотите обнять.');
    }

    // Создание embed-сообщения
    const hands= message.mentions.members.first();
    const hugEmbed = new EmbedBuilder()
      .setColor('#FFAC1C') // Цвет в формате HEX (в данном случае - красный)
      .setTitle(` ${message.author.username} поднял ${hands.displayName}`)
      .setImage('https://media.tenor.com/SvOmKXm9RN8AAAAC/miyano-pick-up.gif'); // Замените ссылкой на изображение обнимашки

    // Отправка embed-сообщения
    message.channel.send({ embeds: [hugEmbed] });
  },
};