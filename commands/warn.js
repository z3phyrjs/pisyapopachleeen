const sqlite = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const { EmbedBuilder, } = require('discord.js');
const dbDir = path.join(__dirname, 'warns');
const dbPath = path.join(dbDir, 'database.sqlite');

// Создаем директорию, если она не существует
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir);
}

// Создаем подключение к базе данных
const db = sqlite(dbPath);

// Остальной код команды 'warn' остается без изменений
// ...


// Создание таблицы, если она не существует
db.exec(`
  CREATE TABLE IF NOT EXISTS warnings (
    user_id TEXT PRIMARY KEY,
    count INTEGER DEFAULT 0
  );
`);

module.exports = {
  name: 'warn',
  description: 'Выдает предупреждение пользователю.',
  usage: '<@пользователь> <причина>',
  run: async (client, message, args) => {
    // Проверяем, есть ли у пользователя права на выдачу предупреждений
    if (!message.member.permissions.has('KICK_MEMBERS')) {
      return message.reply('У вас недостаточно прав для использования этой команды.');
    }

    // Проверяем, был ли упомянут пользователь
    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('Вы должны упомянуть пользователя, которому хотите выдать предупреждение.');
    }

    // Проверяем, есть ли у пользователя права на выдачу предупреждений
    if (user.id === message.author.id) {
      return message.reply('Вы не можете выдать предупреждение самому себе.');
    }

    // Получаем остальные аргументы (причину предупреждения)
    const reason = args.slice(1).join(' ');

    // Получаем текущее количество предупреждений для пользователя из базы данных
    const statement = db.prepare('SELECT count FROM warnings WHERE user_id = ?');
    const row = statement.get(user.id);

    let warnings;
    if (!row) {
      warnings = 1;
      // Вставляем новую запись в базу данных для пользователя
      db.prepare('INSERT INTO warnings (user_id, count) VALUES (?, ?)').run(user.id, warnings);
    } else {
      warnings = row.count + 1;
      // Обновляем количество предупреждений в базе данных
      db.prepare('UPDATE warnings SET count = ? WHERE user_id = ?').run(warnings, user.id);
    }



    const hugged= message.mentions.members.first()
    const hugEmbed = new EmbedBuilder()
    .setColor('#FFAC1C') // Цвет в формате HEX (в данном случае - красный)
    .setTitle(`Пользователь ${hugged.displayName} получил предупреждение (${warnings} предупреждение). Причина: ${reason}`)
    .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/OOjs_UI_icon_alert-warning.svg/640px-OOjs_UI_icon_alert-warning.svg.png'); // Замените ссылкой на изображение обнимашки
message.channel.send({ embeds: [hugEmbed] });





  },
};