/** @jsx h */
import { emphasised_text, h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";

const title = `${emphasised_text} text-3xl font-semibold py-2`;
const paragraph = `py-4`;

export default function Page(props: PageProps) {
  const flexCol = tw`flex flex-col justify-center items-center`;

  return (
    <div
      class={tw`${flexCol} p-8 overflow-y-scroll`}
    >
      <Navbar path={props.route} />
      <div
        class={tw`${flexCol} w-10/12 pt-12 text(xl center) font-semibold`}
      >
        <Hardware />
        <Software />
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
        <div class={tw`flex justify-center`}>
          <ul class={tw`${paragraph}`}>
            <li>CPU: AMD Athlon X4 860K</li>
            <li>GPU: Nvidia GeForce GTX 1050ti</li>
            <li>RAM: 16GB DDR3</li>
            <li>OS: Windows 10</li>
          </ul>
        </div>
        <p class={tw`${paragraph}`}>
          I also have a Dell Insprion laptop which I use for development on the
          go - hopefully it will get replaced by a{" "}
          <a class={tw`underline`} href="https://frame.work/">Framework</a>{" "}
          laptop soon.
        </p>
        <div class={tw`flex justify-center`}>
          <ul class={tw`${paragraph}`}>
            <li>CPU: Intel i3-7100U</li>
            <li>GPU: Integrated Graphics</li>
            <li>RAM: 8GB DDR4</li>
            <li>OS: ZorinOS 16</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Software() {
  return (
    <div class={tw`flex flex-col`}>
      <p class={tw`${title}`}>Software</p>
      <div class={tw`justify-start items-start text-left`}>
        <ul class={tw`${paragraph}`}>
          <li>
            Google Tasks and Google Calendar - to-do list and organisation
          </li>
          <li>IntelliJ Idea - Java and Kotlin development</li>
          <li>VS Code - TypeScript development</li>
          <li>GitHub/Git - VCS</li>
          <br />
          <li>Deno - JS/TS runtime</li>
          <li>Preact, fresh, and Tailwind - frontend web development</li>
          <li>Oak Server - Deno based HTTP server</li>
          <li>Mongo - database</li>
          <li>Fabric - mod development</li>
          <li>JUnit/GameTest API - testing</li>
          <li>Gradle - Java/Kotlin build system</li>
        </ul>
      </div>
    </div>
  );
}
