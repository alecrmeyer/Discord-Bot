// Load up the discord.js library
const Discord = require("discord.js");


const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {

  console.log(`Bot Ready`);

  client.user.setActivity(`Showering`);
});

client.on("guildCreate", guild => {

  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {

});


client.on("message", async message => {

  if(message.author.bot) return;


  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


if(command == "ping")
{
  message.channel.send("@everyone, hello gamers.");
}



});

client.login(config.token);
