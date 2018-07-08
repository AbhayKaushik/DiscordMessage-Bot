'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({debug: true});

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const hook = new Discord.WebHookClient('weebhook id','webhook token');

app.intent('ENTER THE INTENT NAME', (conv, {ENTER THE PARAMETER NAME}) => {
    conv.close('Sure,I'll message them on Discord');
});

hook.send('Let's play PUBG friends!');

client.on("ready", () => {
  console.log("I am ready!");
});

client.login(config.token);

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);







