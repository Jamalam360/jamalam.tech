const updateText = (switcher: HTMLParagraphElement, dark: boolean) => {
  switcher.textContent = dark ? "Light Mode" : "Dark Mode";
};

function getLocalStoragePreference(): boolean | null {
  return localStorage.getItem("dark") == null ? null : localStorage.getItem("dark") === "true";
}

function setLocalStoragePreference(dark: boolean) {
  localStorage.setItem("dark", dark ? "true" : "false");
}

function getOSPreference() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function setGiscusTheme(dark: boolean) {
  const giscusIframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
  if (giscusIframe && giscusIframe.contentWindow) {
    giscusIframe.contentWindow.postMessage(
      {
        giscus: { setConfig: { theme: dark ? "dark" : "light" } },
      },
      { targetOrigin: "https://giscus.app" }
    );
  }
}

function setDarkModePreference(dark: boolean) {
  document.body.classList.toggle("dark", dark);
  setLocalStoragePreference(dark);
  updateText(document.querySelector<HTMLParagraphElement>(".switcher")!, dark);
  setGiscusTheme(dark);
}

let dark = false;

document.addEventListener("DOMContentLoaded", () => {
  let localPreference = getLocalStoragePreference();
  if (localPreference !== null) {
    dark = localPreference;
  }

  if (localPreference === null) {
    dark = getOSPreference();
  }

  setDarkModePreference(dark);

  document.querySelector<HTMLParagraphElement>(".switcher")?.addEventListener("click", () => {
    dark = !dark;
    setDarkModePreference(dark);
  });

  const giscusContainer = document.querySelector("#giscus-container");

  if (giscusContainer) {
    new MutationObserver(() => {
      setGiscusTheme(dark);
    }).observe(giscusContainer, { attributes: true, childList: true, subtree: true });
  }
});
