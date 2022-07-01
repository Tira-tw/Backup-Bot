const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
client.config = config;

/* 讀取全部 */
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Event 已讀取: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();

/* 讀取全部功能 */
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Command 已讀取: ${commandName}`);
    });
});

// Bot登入
client.login(config.token);


//自訂狀態


client.on("ready", async () => {
  console.log(`${client.user.username} 已上線`);
  client.user.setActivity({
    name: `.help | ${client.guilds.cache.size}個伺服器`,
    type: "PLAYING",
 });
});
