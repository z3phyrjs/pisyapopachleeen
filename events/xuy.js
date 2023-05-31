const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
            client.user.setPresence({ activities: [{ name: 'activity' }], status: 'idle' }); 
client.user.setActivity('в очке своим пальчиком', { type: ActivityType.Playing });
    },
};