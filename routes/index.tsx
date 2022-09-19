// deno-lint-ignore-file no-explicit-any

enum ProjectType {
  Web = "Web Development",
  Minecraft = "Minecraft Mod",
  Commission = "Commissioned Mod",
  Discord = "Discord Bot",
}

const links: { url: string; text: string }[] = [
  {
    url: "https://github.com/Jamalam360",
    text: "GitHub",
  },
  {
    url: "https://discord.jamalam.tech",
    text: "Discord Server (Contact Me)",
  },
  {
    url: "https://twitter.com/jamalamisadev",
    text: "Twitter",
  },
  {
    url: "https://ko-fi.com/jamalamdev",
    text: "Ko-Fi",
  },
  {
    url: "https://curseforge.com/members/jamalam360",
    text: "Curseforge",
  },
  {
    url: "https://modrinth.com/user/jamalam",
    text: "Modrinth",
  },
  {
    url: "https://maven.jamalam.tech",
    text: "Maven",
  },
];

const projects: ProjectProps[] = shuffle([
  {
    name: "Jamtastic",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/jamtastic",
    image: "/showcase/jamtastic.mp4",
    description: "A mod that adds in jam, which can be made of any food item.",
  },
  {
    name: "JamLib",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/jamlib",
    image:
      "https://github.com/JamCoreModding/JamLib/blob/main/src/main/resources/assets/jamlib/icon.png?raw=true",
    description: "A library used by all of my mods.",
  },
  {
    name: "Notify",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/notify",
    image:
      "https://github.com/JamCoreModding/Notify/blob/main/src/main/resources/assets/notify/icon.png?raw=true",
    description: "A mod that automatically checks for updates of your mods.",
  },
  {
    name: "NoTrample",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/notrample",
    image:
      "https://github.com/JamCoreModding/NoTrample/blob/main/src/main/resources/assets/notramplefabric/icon.png?raw=true",
    description:
      "A mod that prevents players from trampling farmland - my first mod.",
  },
  {
    name: "Offhand Overhaul",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/offhand-overhaul",
    image:
      "https://github.com/JamCoreModding/OffhandOverhaul/blob/main/src/main/resources/assets/offhandoverhaul/icon.png?raw=true",
    description:
      "A mod that allows configuring the behavior of the offhand slot when placing blocks.",
  },
  {
    name: "Reaping",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/reaping",
    image: "/showcase/reaping.mp4",
    description:
      "A mod that allows you to harvest animals in a cursed manner...",
  },
  {
    name: "RightClickHarvest",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/rightclickharvest",
    image: "/showcase/rightclickharvest.mp4",
    description: "A mod that allows you to harvest crops with right-click.",
  },
  {
    name: "TBBD",
    type: ProjectType.Minecraft,
    link:
      "https://www.curseforge.com/minecraft/mc-mods/totally-balanced-bone-drops",
    image:
      "https://github.com/JamCoreModding/TotallyBalancedBoneDrops/blob/main/src/main/resources/assets/tb-bone-drops/icon.png?raw=true",
    description: "A mod that adds configurable bone drops to entities.",
  },
  {
    name: "Trick or Treat",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/trick-or-treat",
    image:
      "https://github.com/samedifferent/TrickOrTreat/blob/fabric/src/main/resources/assets/trickortreat/icon.png?raw=true",
    description: "A mod which I ported to Fabric for MMD SpookyJam 2021.",
  },
  {
    name: "Utility Belt",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/utility-belt",
    image: "/showcase/utilitybelt.mp4",
    description: "A mod that adds in a second hotbar for tools.",
  },
  {
    name: "Doogle",
    type: ProjectType.Web,
    link: "https://dog.jamalam.tech",
    image:
      "https://github.com/dog-jamalam-tech/frontend/blob/main/static/doogle.png?raw=true",
    description:
      "A website that shows you photos of dogs! Made for a competition.",
  },
  {
    name: "Pinguino",
    type: ProjectType.Discord,
    link: "https://pinguino.jamalam.tech",
    image:
      "https://github.com/Jamalam360/assets/blob/main/Pinguino/pinguino-medium.jpg?raw=true",
    description:
      "A multi-purpose Discord bot, currently being completely rewritten.",
  },
  {
    name: "NoArchive",
    type: ProjectType.Discord,
    link: "https://github.com/JamCoreDiscord/NoArchive",
    image:
      "https://github.com/Jamalam360/assets/blob/main/jamcore.png?raw=true",
    description:
      "A Discord bot which can keep threads from archiving when desired.",
  },
  {
    name: "'Grow Mobs'",
    type: ProjectType.Commission,
    link: "https://www.youtube.com/watch?v=ZIt_7kOxYe0",
    image: "/showcase/growmobs.jpg",
    description: "A mod where you can grow mobs from seeds, for Jagster.",
  },
  {
    name: "LPA3227 Gear",
    type: ProjectType.Commission,
    link: "",
    image: "https://i.imgur.com/XWeAgmW.png",
    description: "A mod for for the LPA3227 SMP that adds in extra weapons.",
  },
  {
    name: "'Sock's Storms'",
    type: ProjectType.Commission,
    link: "",
    image: "/showcase/storms.mp4",
    description:
      "A mod where random, crazy storms happen every few minutes, for SocksFor1.",
  },
  {
    name: "'Sock's Enchantments'",
    type: ProjectType.Commission,
    link: "",
    image: "/showcase/enchantments.mp4",
    description: "A mod that adds in lots of enchantments, for SocksFor1.",
  },
  {
    name: "PBOSB",
    type: ProjectType.Commission,
    link: "",
    image: "/showcase/pbosb.mp4",
    description: "A mod that makes projectiles bounce off of slime blocks.",
  },
]);

function shuffle(a: any[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Home() {
  return (
    <div
      id="main"
      class="h-full min-h-screen bg-gray-200 flex flex-col p-6 md:px-12 md:py-6"
    >
      <div class="flex flex-col text-center md:flex-row md:items-center">
        <p class="text(2xl orange-500) md:text-3xl">Jamalam</p>
        <p class="text-xl md:text-2xl font-light pt-6 md:pl-24 md:pt-0">
          Developer of all manner of things.
        </p>
      </div>

      <div class="flex flex-col md:flex-row pt-8 md:pt-6">
        <div class="flex flex-col items-stretch md:w-3/4 md:flex-row md:flex-wrap">
          {projects.map((project) => <Project {...project} />)}
        </div>
        <div class="flex-grow" />
        <div class="flex flex-col md:w-1/3">
          <SidebarSection title="About">
            <p class="text-lg md:text-xl font-light">
              Hey! I'm Jamalam, or James, a developer from the UK. I primarily
              work on Minecraft, but I'm also interested in web development,
              amongst other things. I am open to any opportunities for custom
              mod commissions, so feel free to reach out to me via Discord
              (linked below) to discuss your needs - please note that I cannot
              provide assets/art myself, although I do have contacts who I am
              able to source assets from for commissions.
            </p>
          </SidebarSection>
          <SidebarSection title="Skills">
            <ul class="md:pl-8 text-lg md:text-xl list-disc">
              <li>
                <p class="font-light">
                  Fabric & Quilt Modding
                </p>
              </li>
              <li>
                <p class="font-light">
                  Multiplatform Modding (Architectury)
                </p>
              </li>
              <li>
                <p class="font-light">
                  Web Development (fresh)
                </p>
              </li>
              <li>
                <p class="font-light">TailwindCSS</p>
              </li>
              <li>
                <p class="font-light">
                  Discord Bot Development (Kord Extensions)
                </p>
              </li>
              <li>
                <p class="font-light">TypeScript</p>
              </li>
              <li>
                <p class="font-light">Kotlin</p>
              </li>
              <li>
                <p class="font-light">Java</p>
              </li>
            </ul>
          </SidebarSection>
          <SidebarSection title="Links">
            <div class="flex flex-col">
              {links.map((link) => (
                <a
                  class="text(lg orange-500) md:text-xl font-light"
                  href={link.url}
                  target="_blank"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </SidebarSection>
        </div>
      </div>

      <div class="pb-4 pt-6 flex justify-center">
        <p class="text-base md:text-2xl font-extralight">
          Copyright © {new Date().getFullYear()} Jamalam.
        </p>
      </div>
    </div>
  );
}

interface ProjectProps {
  name: string;
  link: string;
  type: string;
  image: string;
  description: string;
}

function Project(props: ProjectProps) {
  return (
    <div class="flex flex-col w-full md:w-1/2 py-2 md:pr-4">
      <div class="h-full p-4 rounded border-solid border-2 border-gray-400 md:text-xl">
        {props.link != ""
          ? (
            <a
              class={`font-light h-8 md:text-2xl ${
                !(props.link == "") ? "text-orange-500" : ""
              }`}
              href={props.link}
              target="_blank"
            >
              {props.name}
            </a>
          )
          : <p class="font-light h-8 md:text-2xl">{props.name}</p>}
        <div class="flex justify-center pt-4">
          {props.image.endsWith(".mp4")
            ? (
              <video controls autoPlay loop class="md:h-96 rounded-lg">
                <source src={props.image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
            : (
              <a href={props.image} target="_blank">
                <img
                  loading="lazy"
                  class="rounded-lg md:h-96 object-scale-down md:object-cover"
                  src={props.image}
                  alt={props.description}
                />
              </a>
            )}
        </div>

        <div class="flex flex-row pt-4">
          <p class="font-light text-gray-600">{props.type}</p>
        </div>

        <p class="pt-4 font-light">{props.description}</p>
      </div>
    </div>
  );
}

interface SidebarSectionProps {
  title: string;
  children: any;
}

function SidebarSection(props: SidebarSectionProps) {
  return (
    <details>
      <summary class="text-xl font-light cursor-pointer select-none">
        {" " + props.title}
      </summary>
      <div class="p-2">
        {props.children}
      </div>
    </details>
  );
}
