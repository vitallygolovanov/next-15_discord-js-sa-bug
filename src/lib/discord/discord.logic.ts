/**
 * *.logic.ts files are used to define the purely server-side logic of the corresponding *.actions.ts file.
 */
import { REST, Routes } from "discord.js";
import "server-only";

const rest = new REST({ version: '10' });

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