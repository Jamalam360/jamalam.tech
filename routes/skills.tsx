/** @jsx h */
import { emphasised_text, h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";

const title = `${emphasised_text} text-3xl font-semibold py-2`;
const paragraph = `py-4`;

export default function Page(props: PageProps) {
  const flexCol = tw`flex flex-col justify-center items-center`;
  const listItem = tw`flex flex-col`;

  return (
    <div
      class={tw`${flexCol} p-8`}
    >
      <Navbar path={props.route} />
      <div
        class={tw`${flexCol} w-10/12 pt-12 text(xl center) font-medium`}
      >
        <div class={tw`flex flex-col justify-center items-center text-center`}>
          <p class={tw`${paragraph}`}>
            I use multiple languages, libraries, and frameworks to create my
            projects.
          </p>

          <Section
            title="Minecraft"
            items={["Java", "Fabric", "Architectury"]}
          />

          <Section
            title="Web"
            items={["TypeScript", "Deno", "Preact", "fresh", "Oak"]}
          />

          <Section
            title="Discord"
            items={["Kotlin", "Kord", "Kord Extensions"]}
          />

          <Section
            title="Testing"
            items={["JUnit", "Mojang GameTest API", "Deno Testing API"]}
          />

          <Section
            title="Other"
            items={["Git", "GitHub Actions (CI/CD)", "Gradle", "Nginx"]}
          />
        </div>
      </div>
    </div>
  );
}

function Section({ items, title }: { items: string[]; title: string }) {
  return (
    <details>
      <summary class={tw`text-center select-none hover:font-bold duration-75`}>
        <p class={tw`${emphasised_text}`}>{title}</p>
      </summary>
      <div class={tw`text-left`}>
        <ul>
          {items.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </details>
  );
}
