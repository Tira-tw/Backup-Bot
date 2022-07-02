const backup = require('discord-backup');

exports.run = async (client, message, args) => {

    // 成員權限
    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send('<:3523win11erroicon:992428262083022898> 你需要擁有管理員權限才能進行備份');
    }

    const backupID = args.join(' ');

    backup.fetch(backupID).then(() => {

        message.channel.send('<:unabletoload:982568208194224198> 伺服器頻道、角色、設置都將被清除 , 你想執行嗎？請填寫 `-confirm` or `cancel`!');

        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['-confirm', 'cancel'].includes(m.content), {
            time: 60000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === '-confirm';
            collector.stop();
            if (confirm) {

                backup.load(backupID, message.guild).then(() => {

                    return message.author.send('備份加載成功！');
            
                }).catch((err) => {
            
                    if (err === 'No backup found')
                        return message.channel.send('<:3523win11erroicon:992428262083022898> 找不到備份ID '+backupID+'!');
                    else
                        return message.author.send('<:3523win11erroicon:992428262083022898> 發生錯誤： '+(typeof err === 'string') ? err : JSON.stringify(err));
            
                });

            } else {
                return message.channel.send('<:3523win11erroicon:992428262083022898> 取消');
            }
        })

        collector.on('end', (collected, reason) => {
            if (reason === 'time')
                return message.channel.send('<:3523win11erroicon:992428262083022898> 等待過程太久 , 請重試。');
        })

    }).catch(() => {
        return message.channel.send('<:3523win11erroicon:992428262083022898> 找不到備份ID '+backupID+'!');
    });

};
