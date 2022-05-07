/** @jsx h */
import { emphasised_text, h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";

export default function Page(props: PageProps) {
  return (
    <div class={tw`p-8 flex flex-col justify-center items-center`}>
      <Navbar path={props.route} />
      <div
        class={tw
          `w-10/12 flex flex-col justify-center items-center pt-24 text(xl center) font-semibold`}
      >
        <p class={tw`p-4`}>
          I'm <span class={tw`${emphasised_text}`}>Jamalam</span>, or{" "}
          <span class={tw`${emphasised_text}`}>James</span>{" "}
          if you prefer. I've been programming for{" "}
          <span class={tw`${emphasised_text}`}>4 years</span>, and have picked
          up a few languages proficiently in that time.
        </p>
        <p class={tw`p-4`}>
          I primarily create Minecraft modifications for the{" "}
          Fabric mod-loader, and with my own mods I have amassed over{" "}
          <span class={tw`${emphasised_text}`}>1,000,000 downloads</span>. I
          also frequently work with content creators with{" "}
          <span class={tw`${emphasised_text}`}>millions of subscribers</span>.
        </p>
        <p class={tw`p-4`}>
          I have also created my own Discord bot, Pinguino, which has an
          expansive range of commands and features. Pinguino is currently using
          {" "}
          <span class={tw`${emphasised_text}`}>Kotlin</span>, with the KordEx
          Discord framework.
        </p>
        <p class={tw`p-4`}>
          More recently, I have expanded my efforts into web development with
          {" "}
          <span class={tw`${emphasised_text}`}>Preact</span>,{" "}
          <span class={tw`${emphasised_text}`}>Oak</span>, and{" "}
          <span class={tw`${emphasised_text}`}>Deno</span>.
        </p>
      </div>
    </div>
  );
}
