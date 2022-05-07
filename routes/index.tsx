/** @jsx h */
import { emphasised_text, h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";

export default function Page(props: PageProps) {
  return (
    <div class={tw`p-8 flex flex-col justify-center items-center`}>
      <Navbar path={props.route} />
      <Intro />
    </div>
  );
}

function Intro() {
  return (
    <div class={tw`w-10/12 flex flex-row justify-center items-center pt-24`}>
      <div class={tw`px-6`}>
        <p class={tw`text-4xl font-semibold py-2`}>
          Hi! I'm <span class={tw`${emphasised_text}`}>Jamalam</span>.
        </p>
        <p class={tw`text-xl font-medium py-2`}>
          I'm a{" "}
          <span class={tw`${emphasised_text}`}>
            software developer
          </span>{" "}
          from the UK, working on Minecraft, Discord bots, and the web. I always
          strive to make the{" "}
          <span class={tw`${emphasised_text}`}>best product</span> I can.
        </p>
      </div>
      <img
        class={tw`w-80 px-6`}
        src="/placeholder.png"
        alt="Profile Picture"
      />
    </div>
  );
}
