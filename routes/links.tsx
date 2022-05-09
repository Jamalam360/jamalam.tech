/** @jsx h */
import { h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";
import Wrapper from "../components/Wrapper.tsx";

import Strong from "../components/text/Strong.tsx";
import Link from "../components/text/Link.tsx";

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
  const flexCol = tw`flex flex-col justify-center items-center`;

  return (
    <Wrapper>
      <Navbar path={props.route} />
      <div
        class={tw`${flexCol} w-10/12 pt-12 text(xl center) font-semibold`}
      >
        {links.map((link) => <Link href={link.path}>{link.name}</Link>)}
      </div>
    </Wrapper>
  );
}
