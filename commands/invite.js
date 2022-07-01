const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "邀請連結",
        "https://cdn.discordapp.com/attachments/921948590102945823/992437422765903902/download20220606131331.png"
      )
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(
        "[invite](https://discord.com/api/oauth2/authorize?client_id=992425784239210547&permissions=8&scope=bot)"
          
          
          
          
          
      )
  );
};