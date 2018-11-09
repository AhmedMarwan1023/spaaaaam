const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1say#credits @! vM,Ahmeed,Șɱ#5209 1000
EMAIL ";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "509357857666236430"; // 509339028206649346
var channel = "509357857666236434";//509339028206649350
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Ahmeed , Ahmeed , Ahmeed , Ahmeed , Ahmeed , Ahmeed , I , Love , them , so , Mush , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);
