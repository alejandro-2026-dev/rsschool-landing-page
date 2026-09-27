import "modern-normalize";
import "../styles/vars.css";
import "../styles/main.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/hero.css";
import "../styles/favorite.css";
import "../styles/about.css";
import "../styles/download.css";
import "../styles/grid.css";
import "../styles/offer.css";
import "../styles/card.css";
import "../styles/modal.css";

import { CardsGrid } from "./cards-grid";
import { Burger } from "./burger";
import { Slider } from "./slider";
import { Modal } from "./modal";

setSwitchDarkMode();
const modal = new Modal();
new CardsGrid(modal);
new Burger();
new Slider();

function setSwitchDarkMode() {
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
