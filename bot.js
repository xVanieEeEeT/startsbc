const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Stars. || Broadcast", 'https://twitch.tv//9ivv')
    console.log('')
    console.log('')
    console.log('╔[════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged i as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informatins :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });

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
