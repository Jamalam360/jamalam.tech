const TRANSITION = "transform 0.3s ease-in-out, width 0.3s ease-in-out";

const update = (document: Document, path: string) => {
  const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".nav-links > li > .nav-link");
  const underline = document.querySelector<HTMLDivElement>(".nav-underline")!;

  links.forEach((link) => {
    if (path.startsWith(link.getAttribute("href")!)) {
      underline.innerText = link.innerText;
      underline.style.transform = `translateX(${link.getBoundingClientRect().x}px)`;
      underline.style.top = `${link.getBoundingClientRect().y}px`;
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links > li > .nav-link");
  const underline = document.querySelector<HTMLDivElement>(".nav-underline")!;

  update(document, window.location.pathname);

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      update(document, link.getAttribute("href")!);
    });
  });

  window.addEventListener("resize", () => {
    underline.style.transition = "none";
    update(document, window.location.pathname);
    underline.style.transition = TRANSITION;
  });

  let timeout: number | null = null;
  document.querySelector(".nav-links")!.addEventListener("mouseleave", () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      update(document, window.location.pathname);
    }, 100);
  });

  underline.style.transition = TRANSITION;
});
