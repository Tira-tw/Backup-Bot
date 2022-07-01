const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "About",
        "https://cdn.discordapp.com/attachments/921948590102945823/992437422765903902/download20220606131331.png"
      )
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(
        "```\n關於Bot\n```\n [Backup Bot](https://discord.com/api/oauth2/authorize?client_id=992425784239210547&permissions=8&scope=bot)\n此Bot為開源Bot , 並非本人製作! , 本人只提供翻譯!\n> [作者代碼](https://github.com/Androz2091/backups-bot) \n > [源代碼作者 [Androz2091]](https://github.com/Androz2091/) \n > [代碼翻譯 [天然呆幻月#9076]](https://github.com/Tira-tw/)\n > [翻譯代碼](https://github.com/Tira-tw/Backup-Bot/)\n ```\nBot開發者\n```\n <@848164182334898216> | [[天然呆幻月#9076]](https://top.gg/user/212975187460038656)"
          
          
          
          
          
      )
  );
};