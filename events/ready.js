module.exports = (client) => {
    console.log(`已讀取Bot ${client.user.tag} 伺服器人數 ${client.channels.cache.size} 伺服器頻道人數 ${client.guilds.cache.size} 伺服器, 總共 ${client.users.cache.size} 人`);
};