/** @jsx h */
import { h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";
import Wrapper from "../components/Wrapper.tsx";

import Strong from "../components/text/Strong.tsx";

export default function Page(props: PageProps) {
  return (
    <Wrapper>
      <Navbar path={props.route} />
      <Intro />
    </Wrapper>
  );
}

function Intro() {
  return (
    <div
      class={tw
        `w-10/12 flex flex(row wrap) md:flex-nowrap justify-center items-center pt-12`}
    >
      <div class={tw`px-2`}>
        <p class={tw`text-4xl font-semibold py-2`}>
          Hi! I'm <Strong>Jamalam</Strong>.
        </p>
        <p class={tw`text-xl font-medium py-2`}>
          I'm a{" "}
          <Strong>
            software developer
          </Strong>{" "}
          from the UK working on Minecraft modifications, Discord bots, and the
          web. I always strive to make the <Strong>best product</Strong> I can.
        </p>
      </div>
      <img
        class={tw`w-80 px-2 pt-4 md:pt-2`}
        src="/placeholder.png"
        alt="Profile Picture"
      />
    </div>
  );
}
