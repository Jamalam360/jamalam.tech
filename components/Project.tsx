/** @jsx h */
import { h, RenderableProps, tw } from "../client_deps.ts";

import Strong from "./text/Strong.tsx";

const detailsWrapper =
  `flex flex-col items-center justify-start items-start text-left`;

export default function Project(
  { children, title }: RenderableProps<{ title: string }>,
) {
  return (
    <div class={tw`flex flex-col items-center`}>
      <details>
        <summary>
          <Strong class="text-center select-none">
            {title}
          </Strong>
        </summary>
        <div class={tw`${detailsWrapper}`}>
          {children}
        </div>
      </details>
    </div>
  );
}
