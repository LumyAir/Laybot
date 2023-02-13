const Discord = require('discord.js');
const bot = new Discord.Client({intents: 3276799});
const config = require('./config.js');


bot.login(config.token);

bot.on('ready', () => {
    console.log(`${bot.user.tag} est bien en ligne !`);
});