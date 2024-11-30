"use client";
import { testDiscord_action } from "@/lib/discord/discord.actions";

export default function DiscordButton() {
  return (
    <button
      className="discord-button"
      onClick={async () => {
        await testDiscord_action();
      }}
    >
      <span>Test Discord Action</span>
    </button>
  );
}
