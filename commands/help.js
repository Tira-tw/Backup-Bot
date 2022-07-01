const backup = require('discord-backup');
const config = require('../config.json');
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `create\`\` - 建立備份伺服器/群組 [建立備份ID稍微久一點 , 耐心等待]
 info <備份ID>\`\` - 查看備份ID資訊
 load <備份ID>\`\` - 讀取備份資訊執行!
 invite\`\` - 邀請備份Bot
 about\`\` - 關於Bot`;
  
  
    
  const revised = commands
    .split("\n")
    .map((x) => "• " + "``" + client.config.prefix + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "backup Bot 功能列表 [ made by.天然呆幻月#9076]",
        "https://cdn.discordapp.com/attachments/921948590102945823/992437422765903902/download20220606131331.png"
      )
      .setColor("A850C3")
      .setTimestamp()
      .setDescription(revised)
  );
};
