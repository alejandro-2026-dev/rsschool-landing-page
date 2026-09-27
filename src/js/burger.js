export class Burger {
  constructor() {
    this.init();
  }

  init() {
    this.burger = document.querySelector(".header__burger");
    this.menu = document.querySelector(".header__panel");
    if (!this.burger || !this.menu) return;
    this.isOpen = false;

    this.burger.addEventListener("click", () => {
      if (this.isOpen) this.close();
      else this.open();
    });

    this.menu.addEventListener("click", (e) => {
      if (e.target.closest(".header__link")) this.close();
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") this.close();
    });

    window
      .matchMedia("(min-width: 769px)")
      .addEventListener("change", this.close);
  }

  open = () => {
    if (this.isOpen === true) return;
    this.burger.classList.add("on");
    this.menu.classList.add("on");
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("no-scroll");
    this.isOpen = true;
  };

  close = () => {
    if (this.isOpen === false) return;
    this.burger.classList.remove("on");
    this.menu.classList.remove("on");
    document.body.classList.remove("no-scroll");
    this.isOpen = false;
  };
}
