const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: '8ball',
  run: async (client, message, args) => {
    // Проверка, был ли задан вопрос
    if (!args[0]) {
      return message.reply('Пожалуйста, задайте вопрос шару предсказаний.');
    }

    // Варианты ответов шара предсказаний
    const answers = [
      'Да',
      'Нет',
      'Возможно',
      'Не уверен',
      'Спроси позже',
      'Сконцентрируйся и спроси еще раз',
      'Лучше не говорить тебе сейчас',
      'Я не могу предсказать это',
    ];

    // Получение случайного ответа
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    // Создание embed-сообщения
    const embed = new EmbedBuilder()
      .setColor('#000000') // Цвет в формате HEX (в данном случае - красный)
      .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/e/eb/Magic_eight_ball.png') // Замените ссылкой на изображение обнимашки
      .addFields(
        { name: 'Вопрос', value: args.join(' ') },
        { name: 'Ответ', value: randomAnswer }
      );

    // Отправка embed-сообщения
    message.channel.send({ embeds: [embed] });
  },
};