// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

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
];

const projects: ProjectProps[] = shuffle([
  {
    name: "Jamtastic",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/jamtastic",
    image: "https://github.com/JamCoreModding/Jamtastic/raw/main/demo.gif",
    description: "A mod that adds in jam, which can be made of any food item.",
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
    image: "https://github.com/JamCoreModding/Reaping/raw/1.19/demo.gif",
    description:
      "A mod that allows you to harvest animals in a cursed manner...",
  },
  {
    name: "RightClickHarvest",
    type: ProjectType.Minecraft,
    link: "https://www.curseforge.com/minecraft/mc-mods/rightclickharvest",
    image:
      "https://github.com/JamCoreModding/RightClickHarvest/blob/1.18-1.19/demo.gif?raw=true",
    description: "A mod that allows you to harvest crops with right-click.",
  },
  {
    name: "Totally Balanced Bone Drops",
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
    name: "'Grow Mobs'",
    type: ProjectType.Commission,
    link: "https://www.youtube.com/watch?v=ZIt_7kOxYe0",
    image: "https://img.youtube.com/vi/ZIt_7kOxYe0/maxresdefault.jpg",
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
    image: "https://i.imgur.com/sxUOKvA.gif",
    description:
      "A mod where random, crazy storms happen every few minutes, for SocksFor1.",
  },
  {
    name: "'Sock's Enchantments'",
    type: ProjectType.Commission,
    link: "",
    image: "https://i.imgur.com/sgXrRKn.gif",
    description: "A mod that adds in lots of enchantments, for SocksFor1.",
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
      class={tw
        `h-full min-h-screen bg-gray-200 flex flex-col p-6 md:px-12 md:py-6 font-roboto`}
    >
      <div
        class={tw`flex flex-col md:flex-row md:items-center`}
      >
        <p class={tw`text(2xl orange-500)`}>Jamalam</p>
        <p class={tw`text-xl font-light pt-6 md:pl-24 md:pt-0`}>
          Developer of all manner of things.
        </p>
      </div>

      <div class={tw`flex flex-col md:flex-row pt-16`}>
        <div
          class={tw`flex flex-col`}
        >
          <p class={tw`text-xl font-light pb-2`}>Notable Projects</p>
          <div class={tw`flex flex-col items-stretch md:flex-row md:flex-wrap`}>
            {projects.map((project) => <Project {...project} />)}
          </div>
        </div>
        <div class={tw`flex-grow`} />
        <div class={tw`flex flex-col md:w-2/3`}>
          <SidebarSection title="About">
            <p class={tw`text-lg font-light`}>
              Hey! I'm Jamalam, or James, a developer from the UK. I primarily
              work on Minecraft, but I'm also interested in web development,
              amongst other things. I am open to any opportunities for custom
              mod commissions, so feel free to reach out to me via Discord
              (linked below) to discuss your needs.
            </p>
          </SidebarSection>
          <SidebarSection title="Skills">
            <ul class={tw`md:pl-2 list-disc`}>
              <li>
                <p class={tw`text-lg font-light`}>Fabric & Quilt Modding</p>
              </li>
              <li>
                <p class={tw`text-lg font-light`}>
                  Multiplatform Modding (Architectury)
                </p>
              </li>
              <li>
                <p class={tw`text-lg font-light`}>Web Development (fresh)</p>
              </li>
              <li>
                <p class={tw`text-lg font-light`}>TailwindCSS</p>
              </li>
              <li>
                <p class={tw`text-lg font-light`}>
                  Discord Bot Development (Kord Extensions)
                </p>
              </li>
              <li>
                <p class={tw`text-lg font-light`}>TypeScript</p>
              </li>
              <li>
                <p class={tw`text-lg font-light`}>Kotlin</p>
              </li>
              <li>
                <p class={tw`text-lg font-light`}>Java</p>
              </li>
            </ul>
          </SidebarSection>
          <SidebarSection title="Links">
            <div class={tw`flex flex-col`}>
              {links.map((link) => (
                <a
                  class={tw`text(lg orange-500) font-light`}
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

      <div class={tw`pb-4 pt-6 flex justify-center`}>
        <p class={tw`text-base font-extralight`}>
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
    <div
      class={tw`flex flex-col w-full md:w-1/3 pr-2 pl-0 py-2 md:pr-4`}
    >
      <div class={tw`h-full p-4 rounded border-solid border-2 border-gray-300`}>
        <div class={tw`flex justify-center`}>
          <a href={props.image} target="_blank">
            <img
              loading="lazy"
              class={tw`rounded-lg md:h-96 object-scale-down md:object-cover`}
              src={props.image}
              alt={props.description}
            />
          </a>
        </div>

        <div class={tw`flex flex-row pt-4`}>
          <a
            class={tw`font-light ${
              !(props.link == "") ? "text-orange-500" : ""
            }`}
            href={props.link == "" ? undefined : props.link}
            target="_blank"
          >
            {props.name}
          </a>
          <div class={tw`flex-grow`} />
          <p class={tw`font-light`}>{props.type}</p>
        </div>

        <p class={tw`pt-4 font-light`}>{props.description}</p>
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
      <summary
        class={tw`text-xl font-light cursor-pointer select-none`}
      >
        {" " + props.title}
      </summary>
      <div class={tw`p-2`}>
        {props.children}
      </div>
    </details>
  );
}
