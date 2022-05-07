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
        <details>
          <summary class={tw`select-none ${emphasised_text}`}>
            Pinguino
          </summary>
          <div class={tw`flex flex-col items-center`}>
            <p class={tw`p-4`}>
              Pinguino is a Discord bot that I created to help my friends and I
              record out of context quotes via Discord, and it quickly grew out
              of hand from there.
            </p>
            <img
              src="https://user-images.githubusercontent.com/56727311/136711100-33c45895-51dd-4c3e-9937-c02aebae18dc.jpg"
              alt="Pinguino Icon"
              class={tw`w-64 rounded-xl`}
            />
            <p class={tw`p-4`}>
              At the moment, it's hurtling towards a V1.0.0 release, and has
              over 10,000 lines of code powering all of its features - from
              moderation, to fun, to spam protection. Pinguino is automatically
              deployed to my server via GitHub actions, and recently I have been
              creating a web configuration dashboard for it using{" "}
              <a class={tw`underline`} href="https://fresh.deno.dev/">fresh</a>.
            </p>
            <p class={tw`p-4`}>
              You can find Pinguino's source on{" "}
              <a
                class={tw`underline`}
                href="https://github.com/JamCoreDiscord/Pinguino"
              >
                GitHub
              </a>.
            </p>
          </div>
        </details>
        <details>
          <summary class={tw`select-none ${emphasised_text}`}>
            Pinguino
          </summary>
          <div class={tw`flex flex-col items-center`}>
            <p class={tw`p-4`}>
              Pinguino is a Discord bot that I created to help my friends and I
              record out of context quotes via Discord, and it quickly grew out
              of hand from there.
            </p>
            <img
              src="https://user-images.githubusercontent.com/56727311/136711100-33c45895-51dd-4c3e-9937-c02aebae18dc.jpg"
              alt="Pinguino Icon"
              class={tw`w-64 rounded-xl`}
            />
            <p class={tw`p-4`}>
              At the moment, it's hurtling towards a V1.0.0 release, and has
              over 10,000 lines of code powering all of its features - from
              moderation, to fun, to spam protection. Pinguino is automatically
              deployed to my server via GitHub actions, and recently I have been
              creating a web configuration dashboard for it using{" "}
              <a class={tw`underline`} href="https://fresh.deno.dev/">fresh</a>.
            </p>
            <p class={tw`p-4`}>
              You can find Pinguino's source on{" "}
              <a
                class={tw`underline`}
                href="https://github.com/JamCoreDiscord/Pinguino"
              >
                GitHub
              </a>.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
