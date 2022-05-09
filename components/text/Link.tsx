/** @jsx h */
import { h, RenderableProps, tw } from "../../client_deps.ts";

export default function Link(
  { children, href }: RenderableProps<{ href: string }>,
) {
  return (
    <a class={tw`underline hover:font-bold duration-75`} href={href}>
      {children}
    </a>
  );
}
