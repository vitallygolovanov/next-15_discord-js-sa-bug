"use client";
import { testDiscord_action } from "@/lib/discord/discord.actions";

export default function DiscordButton() {
  return (
    <button className="discord-button" onClick={testDiscord_action}>
      <span>Test Discord Action</span>
    </button>
  );
}