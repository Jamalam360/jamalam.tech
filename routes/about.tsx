/** @jsx h */
import { h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";
import Wrapper from "../components/Wrapper.tsx";

import Strong from "../components/text/Strong.tsx";

export default function Page(props: PageProps) {
  const flexCol = tw`flex flex-col justify-center items-center`;
  const paragraph = tw`py-4`;

  return (
    <Wrapper>
      <Navbar path={props.route} />
      <div
        class={tw`${flexCol} w-10/12 pt-12 text-xl font-semibold`}
      >
        <p class={paragraph}>
          I'm <Strong>Jamalam</Strong>, or <Strong>James</Strong>{" "}
          if you prefer. I've been programming for{" "}
          <Strong>4 years</Strong>, and have picked up a few languages
          proficiently in that time.
        </p>
        <p class={paragraph}>
          I primarily create Minecraft modifications for the{" "}
          Fabric mod-loader, and with my own mods I have amassed over{" "}
          <Strong>1,000,000 downloads</Strong>. I also frequently work with
          content creators with <Strong>millions of subscribers</Strong>.
        </p>
        <p class={paragraph}>
          I have also created my own Discord bot, Pinguino, which has an
          expansive range of commands and features. Pinguino is currently using
          {" "}
          <Strong>Kotlin</Strong>, with the KordEx Discord framework.
        </p>
        <p class={paragraph}>
          More recently, I have expanded my efforts into web development with
          {" "}
          <Strong>Preact</Strong>, <Strong>Oak</Strong>, and{" "}
          <Strong>Deno</Strong>. I use <Strong>TailwindCSS</Strong> for styling.
        </p>
      </div>
    </Wrapper>
  );
}
