import type { APIContext } from "astro";

export async function GET(_ctx: APIContext): Promise<Response> {
	return Response.redirect("https://discord.gg/invite/88PWg5TySd", 301);
}
