/** @jsx h */
import { emphasised_text, h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";

const title = `${emphasised_text} text-3xl font-semibold py-2`;
const summary = `text-center select-none hover:font-bold duration-75`;
const paragraph = `py-4`;
const image = `w-64 rounded-xl`;
const detailsWrapper =
  `flex flex-col items-center justify-start items-start text-left`;

export default function Page(props: PageProps) {
  const flexCol = tw`flex flex-col justify-center items-center`;

  return (
    <div
      class={tw`${flexCol} p-8`}
    >
      <Navbar path={props.route} />
      <div
        class={tw
          `${flexCol} w-10/12 space-y-4 pt-12 text(xl center) font-semibold`}
      >
        <Minecraft />
        <Discord />
        <Web />
      </div>
    </div>
  );
}

function Minecraft() {
  return (
    <div>
      <p class={tw`${title}`}>
        Minecraft
      </p>
    </div>
  );
}

function Discord() {
  return (
    <div>
      <p class={tw`${title}`}>Discord</p>
      <div class={tw`flex flex-col items-center`}>
        <details>
          <summary class={tw`${summary}`}>
            Pinguino
          </summary>
          <div class={tw`${detailsWrapper}`}>
            <p class={tw`${paragraph}`}>
              Pinguino is a Discord bot that I created to help my friends and I
              record out of context quotes via Discord, and it quickly grew out
              of hand from there.
            </p>
            <img
              src="https://user-images.githubusercontent.com/56727311/136711100-33c45895-51dd-4c3e-9937-c02aebae18dc.jpg"
              alt="Pinguino Icon"
              class={tw`${image}`}
            />
            <p class={tw`${paragraph}`}>
              At the moment, it's hurtling towards a V1.0.0 release, and has
              over 10,000 lines of code powering all of its features - from
              moderation, to fun, to spam protection. Pinguino is automatically
              deployed to my server via GitHub actions, and recently I have been
              creating a web configuration dashboard for it using{" "}
              <a class={tw`underline`} href="https://fresh.deno.dev/">fresh</a>.
            </p>
            <p class={tw`${paragraph}`}>
              Pingunio's main source code is written in{" "}
              <span class={tw`${emphasised_text}`}>Kotlin</span>, with the
              KordEx framework. It interacts with a MongoDB database with a
              library called KMongo, to store configurations and other data.
              Pinguino's new website is being written in{" "}
              <span class={tw`${emphasised_text}`}>TypeScript</span>, with{" "}
              <a class={tw`underline`} href="https://deno.land/">Deno</a>{" "}
              as its runtime, and{" "}
              <a class={tw`underline`} href="https://fresh.deno.dev">fresh</a>
              {" "}
              for SSR and hydration. The site is hosted on{" "}
              <a class={tw`underline`} href="https://deno.com/deploy">
                Deno Deploy
              </a>.
            </p>
            <p class={tw`${paragraph}`}>
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
          <summary class={tw`${summary}`}>
            NoArchive
          </summary>
          <div class={tw`${detailsWrapper}`}>
            <p class={tw`${paragraph}`}>
              NoArchive was a Discord bot created using{" "}
              <span class={tw`${emphasised_text}`}>Kotlin</span>{" "}
              and KordEx, like Pinguino. Its purpose was to prevent threads in
              our Discord server from archiving (as they usually do within one
              week of inactivity). NoArchive was my first bot built using
              KordEx, and it also interacts with a MongoDB database.
            </p>
            <img
              src="https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F883352428546756638%2F17d825efba27aa2f16105c41a612beca.png%3Fsize%3D128&w=128&q=75"
              alt="NoArchive Icon"
              class={tw`${image}`}
            />
            <p class={tw`${paragraph}`}>
              NoArchive has been marked deprecated as Pinguino now has this
              feature, but you can find the source code on{" "}
              <a
                class={tw`underline`}
                href="https://github.com/JamCoreDiscord/NoArchive"
              >
                GitHub
              </a>
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}

function Web() {
  return (
    <div>
      <p class={tw`${title}`}>Web</p>
    </div>
  );
}
