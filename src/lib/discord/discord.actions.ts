/**
 * *.actions.ts files are used to define the server-side actions that can be called by the client.
 * 
 * Comment out both the import and the call to testDiscord() and the error goes away.
 */

"use server";
import { testDiscord } from "./discord.logic"; // Comment this line out and the error goes away

export async function testDiscord_action() {
  console.log("Discord action executed");
  // Do auth (not shown)

  // Do action
  await testDiscord();  // Comment this line out and the error goes away

  return { success: "whatever" };
}