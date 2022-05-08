/** @jsx h */
import { emphasised_text, h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";

export default function Page(props: PageProps) {
  const flexCol = tw`flex flex-col justify-center items-center`;
  const paragraph = tw`p-4`;
  const emphasised = tw`${emphasised_text}`;

  return (
    <div
      class={tw`${flexCol} p-8 overflow-y-scroll`}
    >
      <Navbar path={props.route} />
      <div
        class={tw`${flexCol} w-10/12 pt-24 text(xl center) font-semibold`}
      >
        <p class={paragraph}>
          I'm <span class={emphasised}>Jamalam</span>, or{" "}
          <span class={emphasised}>James</span>{" "}
          if you prefer. I've been programming for{" "}
          <span class={emphasised}>4 years</span>, and have picked up a few
          languages proficiently in that time.
        </p>
        <p class={paragraph}>
          I primarily create Minecraft modifications for the{" "}
          Fabric mod-loader, and with my own mods I have amassed over{" "}
          <span class={emphasised}>1,000,000 downloads</span>. I also frequently
          work with content creators with{" "}
          <span class={emphasised}>millions of subscribers</span>.
        </p>
        <p class={paragraph}>
          I have also created my own Discord bot, Pinguino, which has an
          expansive range of commands and features. Pinguino is currently using
          {" "}
          <span class={emphasised}>Kotlin</span>, with the KordEx Discord
          framework.
        </p>
        <p class={paragraph}>
          More recently, I have expanded my efforts into web development with
          {" "}
          <span class={emphasised}>Preact</span>,{" "}
          <span class={emphasised}>Oak</span>, and{" "}
          <span class={emphasised}>Deno</span>.
        </p>
      </div>
    </div>
  );
}
