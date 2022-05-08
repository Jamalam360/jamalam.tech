/** @jsx h */
import { emphasised_text, h, tw } from "../client_deps.ts";

const pages = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "posts",
    path: "/posts",
  },
  {
    name: "links",
    path: "/links",
  },
];

export default function Navbar({ path }: { path: string }) {
  return (
    <div class={tw`flex flex-row flex-wrap md:flex-nowrap`}>
      {pages.map((page) => (
        <a
          class={tw`text(xl) px-4 font-semibold hover:font-bold duration-75 ${
            page.path == path
              ? tw`${emphasised_text} underline underline-offset-8`
              : ``
          }`}
          href={page.path}
        >
          {page.name}
        </a>
      ))}
    </div>
  );
}
