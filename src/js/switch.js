export function setSwitchDarkMode() {
  const htmlElement = document.querySelector("html");
  const switchElement = document.querySelector(".header__theme-switch");
  htmlElement.dataset.theme = localStorage.getItem("mode") ?? "light";

  switchElement.addEventListener("click", () => {
    const mode = localStorage.getItem("mode");
    const newMode = mode === "dark" ? "light" : "dark";
    htmlElement.dataset.theme = newMode;
    localStorage.setItem("mode", newMode);
  });
}
