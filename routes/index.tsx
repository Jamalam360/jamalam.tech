// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const links: { url: string; text: string }[] = [
  {
    url: "https://github.com/Jamalam360",
    text: "GitHub",
  },
  {
    url: "https://discord.jamalam.tech",
    text: "Discord Server (Contact Me)",
  },
  {
    url: "https://twitter.com/jamalamisadev",
    text: "Twitter",
  },
  {
    url: "https://ko-fi.com/jamalamdev",
    text: "Ko-Fi",
  },
];

export default function Home() {
  return (
    <div
      class={tw
        `h-full min-h-screen bg-gray-200 flex flex-col p-6 md:px-12 md:py-6 font-roboto`}
    >
      <div
        class={tw`flex flex-col md:flex-row md:items-center`}
      >
        <p class={tw`text(2xl orange-500)`}>Jamalam</p>
        <p class={tw`text-xl font-light pt-6 md:pl-24 md:pt-0`}>
          Developer of all manner of things.
        </p>
      </div>

      <div class={tw`flex flex-col md:flex-row pt-16`}>
        <div
          class={tw`flex flex-col`}
        >
          <p class={tw`text-xl font-light`}>Notable Projects</p>
          <div class={tw`flex flex-col items-center md:flex-row md:flex-wrap`}>
            <Project
              name="Test"
              type="Web Development"
              description="This is a test project I did not make."
              image="https://images.squarespace-cdn.com/content/v1/57ab52ba197aeaaea85623cd/1634813171483-DCLR0ZF0BFN4POOA2DP7/winden-rebecca-mapes+%281%29.png?format=500w"
            />
            <Project
              name="Test"
              type="Web Development"
              description="This is a test project I did not make."
              image="https://images.squarespace-cdn.com/content/v1/57ab52ba197aeaaea85623cd/1634813171483-DCLR0ZF0BFN4POOA2DP7/winden-rebecca-mapes+%281%29.png?format=500w"
            />
            <Project
              name="Test"
              type="Web Development"
              description="This is a test project I did not make."
              image="https://images.squarespace-cdn.com/content/v1/57ab52ba197aeaaea85623cd/1634813171483-DCLR0ZF0BFN4POOA2DP7/winden-rebecca-mapes+%281%29.png?format=500w"
            />
            <Project
              name="Test"
              type="Web Development"
              description="This is a test project I did not make."
              image="https://images.squarespace-cdn.com/content/v1/57ab52ba197aeaaea85623cd/1634813171483-DCLR0ZF0BFN4POOA2DP7/winden-rebecca-mapes+%281%29.png?format=500w"
            />
            <Project
              name="Test"
              type="Web Development"
              description="This is a test project I did not make."
              image="https://images.squarespace-cdn.com/content/v1/57ab52ba197aeaaea85623cd/1634813171483-DCLR0ZF0BFN4POOA2DP7/winden-rebecca-mapes+%281%29.png?format=500w"
            />
            <Project
              name="Test"
              type="Web Development"
              description="This is a test project I did not make."
              image="https://images.squarespace-cdn.com/content/v1/57ab52ba197aeaaea85623cd/1634813171483-DCLR0ZF0BFN4POOA2DP7/winden-rebecca-mapes+%281%29.png?format=500w"
            />
            <Project
              name="Test"
              type="Web Development"
              description="This is a test project I did not make."
              image="https://images.squarespace-cdn.com/content/v1/57ab52ba197aeaaea85623cd/1634813171483-DCLR0ZF0BFN4POOA2DP7/winden-rebecca-mapes+%281%29.png?format=500w"
            />
          </div>
        </div>
        <div class={tw`flex flex-col md:w-2/3`}>
          <SidebarSection title="About">
            <p class={tw`text-lg font-light`}>I am the best.</p>
          </SidebarSection>
          <SidebarSection title="Skills">
          </SidebarSection>
          <SidebarSection title="Links">
            <div class={tw`flex flex-col`}>
              {links.map((link) => (
                <a
                  class={tw`text(lg orange-500) font-light`}
                  href={link.url}
                  target="_blank"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </SidebarSection>
        </div>
      </div>

      <div class={tw`pb-4 pt-6 flex justify-center`}>
        <p class={tw`text-base font-extralight`}>
          Copyright © {new Date().getFullYear()} Jamalam.
        </p>
      </div>
    </div>
  );
}

interface ProjectProps {
  name: string;
  type: string;
  image: string;
  description: string;
}

function Project(props: ProjectProps) {
  return (
    <div
      class={tw`flex flex-col w-full md:w-1/4 p-6`}
    >
      <div class={tw`p-2 md:p-4 rounded border-solid border-2 border-gray-300`}>
        <img class={tw`rounded-lg`} src={props.image} alt={props.description} />

        <div class={tw`flex flex-row pt-4`}>
          <p class={tw`font-light`}>{props.name}</p>
          <div class={tw`flex-grow`} />
          <p class={tw`font-light`}>{props.type}</p>
        </div>

        <p class={tw`pt-4 font-light`}>{props.description}</p>
      </div>
    </div>
  );
}

interface SidebarSectionProps {
  title: string;
  children: any;
}

function SidebarSection(props: SidebarSectionProps) {
  return (
    <details>
      <summary
        class={tw`text-xl font-light cursor-pointer select-none`}
      >
        {" " + props.title}
      </summary>
      <div class={tw`p-2`}>
        {props.children}
      </div>
    </details>
  );
}
