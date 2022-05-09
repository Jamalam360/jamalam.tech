/** @jsx h */
import { h, PageProps, tw } from "../client_deps.ts";

import Navbar from "../components/Navbar.tsx";
import Wrapper from "../components/Wrapper.tsx";

export default function Page(props: PageProps) {
  const flexCol = tw`flex flex-col justify-center items-center`;

  return (
    <Wrapper>
      <Navbar path={props.route} />
    </Wrapper>
  );
}
