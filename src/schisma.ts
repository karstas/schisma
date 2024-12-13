import 'module-alias/register';
import dotenv from 'dotenv';
import { GatewayIntentBits, Partials, Client } from 'discord.js';
import ready from './events/ready';
dotenv.config();

const schisma = new Client({
    intents: [
    ],
    partials: [Partials.Channel]
  });
  

ready(schisma) 

schisma.login(process.env.DISCORD_TOKEN);

console.log('cebola');