const { Events, ActivityType } = require('discord.js');
module.exports = {
    name: 'xuy',
    run: async (client, message, args) => {
            client.user.setPresence({ activities: [{ name: 'activity' }], status: 'idle' }); 
client.user.setActivity('в очке своим пальчиком', { type: ActivityType.Playing });
    },
};