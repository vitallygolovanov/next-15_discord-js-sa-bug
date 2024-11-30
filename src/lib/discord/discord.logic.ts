/**
 * *.logic.ts files are used to define the purely server-side logic of the corresponding *.actions.ts file.
 */

import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import "server-only";

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN ?? '';
if (!BOT_TOKEN) throw new Error('Discord bot token not found');

const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);

// Call the Nitro Sticker Packs endpoint
export async function testDiscord() {
  console.log('Testing Discord');
  try {
    const response = await rest.get(Routes.stickerPacks());
    console.log('Nitro Sticker Packs:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}