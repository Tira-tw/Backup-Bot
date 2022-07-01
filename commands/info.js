const Discord = require('discord.js');
const backup = require('discord-backup');

exports.run = async (client, message, args) => {

    // 成員權限
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send('<:3523win11erroicon:992428262083022898> 你需要擁有管理員權限才能進行備份!');
    }

    const backupID = args.join(' ');

    if (!backupID)
        return message.channel.send('<:3523win11erroicon:992428262083022898>  請指定有效備份ID！');

    backup.fetch(backupID).then((backup) => {

        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
        const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

        const embed = new Discord.MessageEmbed()
            .setAuthor('備份資訊', backup.data.iconURL)
            .addField('伺服器名稱', backup.data.name)
            .addField('大小', backup.size + ' kb')
            .addField('創建於', formattedDate)
            .setFooter('備份ID: '+backup.id);

        return message.channel.send(embed);

    }).catch((err) => {

        if (err === '找不到備份')
            return message.channel.send('<:3523win11erroicon:992428262083022898>  找不到備份ID '+backupID+'!');
        else
            return message.channel.send('<:3523win11erroicon:992428262083022898>  發生錯誤： '+(typeof err === 'string') ? err : JSON.stringify(err));

    });

};
