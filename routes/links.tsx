/** @jsx h */
import { emphasised_text, h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";

//TODO(Jamalam360): Add the rest of my links

const links = [
  {
    name: "GitHub",
    path: "https://github.com/Jamalam360",
  },
  {
    name: "Curseforge",
    path: "https://curseforge.com/members/jamalam360",
  },
];

export default function Page(props: PageProps) {
  return (
    <div
      class={tw
        `p-8 flex flex-col justify-center items-center overflow-y-scroll`}
    >
      <Navbar path={props.route} />
      <div
        class={tw
          `w-10/12 flex flex-col justify-center items-center pt-24 text(xl center) font-semibold`}
      >
        {links.map((link) => <Link name={link.name} path={link.path} />)}
      </div>
    </div>
  );
}

function Link({ name, path }: { name: string; path: string }) {
  return (
    <div class={tw`flex flex-row justify-center items-center`}>
      <a
        href={path}
        class={tw`${emphasised_text} underline hover:font-bold duration-75`}
      >
        {name}
      </a>
    </div>
  );
}
