/** @jsx h */
import { h, RenderableProps, tw } from "../client_deps.ts";

export default function Wrapper(
  { children }: RenderableProps<{}>,
) {
  return (
    <div
      class={tw`p-8 flex flex-col justify-center items-center`}
    >
      {children}
    </div>
  );
}
