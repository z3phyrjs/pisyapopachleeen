const DIG = require("discord-image-generation");
const { Client, GatewayIntentBits, AttachmentBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  name: 'stonk',
  description: 'Изменяет аватар пользователя',
  async run(client, message, args) {
      let avatar = message.author.displayAvatarURL({
          forceStatic: true,
          extension: 'png'
      });
      // Make the image
      let img = await new DIG.ConfusedStonk().getImage(avatar);
      // Add the image as an attachement
      let attach = new AttachmentBuilder(img).setName("stonk.png");
      message.channel.send({
          files: [attach]
      });
    }
  }