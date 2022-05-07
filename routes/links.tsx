/** @jsx h */
import { h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";

export default function Page(props: PageProps) {
  return (
    <div class={tw`p-8 flex justify-center items-center`}>
      <Navbar path={props.route} />
    </div>
  );
}
