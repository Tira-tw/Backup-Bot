const backup = require('discord-backup');
const config = require('../config.json');

exports.run = async (client, message, args) => {

    // 成員權限
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send('<:3523win11erroicon:992428262083022898>  你需要擁有管理員權限才能進行備份');
    }

    backup.create(message.guild).then((backupData) => {

        return message.channel.send('備份代碼已創立! \n 代碼: `'+backupData.id+'`! 請使用 `'+config.prefix+'load-backup '+backupData.id+'` 備份到另外一個伺服器\nBot會執行備份處理!');

    }).catch(() => {

        return message.channel.send('<:3523win11erroicon:992428262083022898>  出現錯誤，請檢查bot是否擁有管理員權限!');

    });

};
