/** @jsx h */
import { h, RenderableProps, tw } from "../../client_deps.ts";

export default function Strong(
  props: RenderableProps<{ class?: string }>,
) {
  return <span class={tw`text-cyan-600 ${props.class}`}>{props.children}</span>;
}
