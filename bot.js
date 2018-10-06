const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';

client.on('message', message => {
    if(!message.member.hasPermissions('ADMINISTRATOR')) return;
    if(message.content.startsWith(prefix + 'bc')) {
    let args = message.content.split(' ').slice(1).join(' ');
    message.channel.send(`**:ballot_box_with_check: Sent.**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    m.send(`${args}\n${m}`);
    if(message.attachments.first()){
   m.sendFile(message.attachments.first().url).catch();
    }
    message.delete();
    })
    }
});

client.login(process.env.BOT_TOKEN);