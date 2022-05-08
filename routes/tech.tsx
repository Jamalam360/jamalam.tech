/** @jsx h */
import { emphasised_text, h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";

const title = `${emphasised_text} text-3xl font-semibold py-2`;
const paragraph = `p-4`;

export default function Page(props: PageProps) {
  const flexCol = tw`flex flex-col justify-center items-center`;

  return (
    <div
      class={tw`${flexCol} p-8 overflow-y-scroll`}
    >
      <Navbar path={props.route} />
      <div
        class={tw`${flexCol} w-10/12 pt-24 text(xl center) font-semibold`}
      >
        <Hardware />
      </div>
    </div>
  );
}

function Hardware() {
  return (
    <div class={tw`flex flex-col`}>
      <p class={tw`${title}`}>Hardware</p>
      <div class={tw`justify-start items-start text-left`}>
        <p class={tw`${paragraph}`}>
          I currently have a custom PC as my main machine, where I do most of my
          development.
        </p>
        <ul class={tw`${paragraph} text-center`}>
          <li>CPU: AMD Athlon X4 860K</li>
          <li>GPU: Nvidia GeForce GTX 1050ti</li>
          <li>RAM: 16GB DDR3</li>
          <li>OS: Windows 10</li>
        </ul>
        <p class={tw`${paragraph}`}>
          I also have a Dell Insprion laptop which I use for development on the
          go - hopefully it will get replaced by a{" "}
          <a class={tw`underline`} href="https://frame.work/">Framework</a>{" "}
          laptop soon.
        </p>
        <ul class={tw`${paragraph} text-center`}>
          <li>CPU: Intel i3-7100U</li>
          <li>GPU: Integrated Graphics</li>
          <li>RAM: 8GB DDR4</li>
          <li>OS: ZorinOS 16</li>
        </ul>
      </div>
    </div>
  );
}
