const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDY1MDM5NzAyMTgxOTM3MTcy.DiNP_Q.GlzDUI8NnD5lF4PuUkNiEL70exY");
