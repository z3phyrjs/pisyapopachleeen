const { EmbedBuilder, } = require('discord.js');

module.exports = {
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
      .setTitle(` ${message.author.username} даёт подщёчину ${hugged.displayName}`)
      .setImage('https://media.tenor.com/PTONt_7DUTgAAAAC/batman-slap-robin.gif'); // Замените ссылкой на изображение обнимашки

    // Отправка embed-сообщения
    message.channel.send({ embeds: [hugEmbed] });
  },
};