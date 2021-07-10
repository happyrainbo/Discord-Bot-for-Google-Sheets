// Keeping the bot alive
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require("fs");
const Discord = require("discord.js");
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

// TODO: Implement an actual solution instead of using global variables
global.URL =
  "https://script.google.com/macros/s/AKfycbw5V1j2yJjkvGo4xH3Hz2peW7vAAzB2VXf_YVwSLuC-_MpIeOE/exec";

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

// read command files in commands folder
const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

// set a new item in the Collection
// with the key as the command name and the value as the exported module
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

// runs when bot is ready
bot.once("ready", () => {
  console.log("This is the new version");
  console.log(`Login OK! ${bot.user.tag}`);
});

// runs when bot receives a message
bot.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  // remove extra whitespaces and splits string
  const args = message.content.slice(1).split(/ +/);
// pop args[0] and store args[0] into commandName
  const commandName = args.shift().toLowerCase();

  console.log(`Command "${commandName}" found`);

  const command =
    bot.commands.get(commandName) ||
    bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) {
    console.log(`Error: Command "${message.content}" cannot be found.`);
    return;
  }

  try {
    console.log("Trying to execute command");
    command.execute(message, args);
  } catch (error) {
    console.error(error);
  }
});

bot.login(token);
