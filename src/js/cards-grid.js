import products from "./products.json";

export class CardsGrid {
  constructor(modal) {
    this.modal = modal;
    this.category = "coffee";
    this.init();
  }

  init() {
    this.root = document.querySelector(".grid");
    this.grid = document.querySelector(".grid__container");
    this.template = document.getElementById("card-template");
    const offer = document.querySelector(".offer__tabs");
    const tabItems = offer.querySelectorAll(".tab-item");
    const btnShowMore = document.getElementById("show-more");

    if (!this.grid || !this.template || !offer) return;

    this.render();

    offer.addEventListener("click", (e) => {
      const currentBtn = e.target.closest(".tab-item");
      if (!currentBtn) return;
      const btnCategory = currentBtn.dataset.category;
      if (["coffee", "tea", "dessert"].includes(btnCategory)) {
        this.category = btnCategory;
        this.render();
        tabItems.forEach((btn) => btn.classList.remove("tab-item--active"));
        currentBtn.classList.add("tab-item--active");
      }
    });

    btnShowMore.addEventListener("click", () => {
      this.root.classList.add("grid--expanded");
    });
  }

  render() {
    this.grid.textContent = "";
    const filtered = products.filter(
      (product) => product.category === this.category,
    );
    filtered.length > 4
      ? this.root.classList.remove("grid--expanded")
      : this.root.classList.add("grid--expanded");
    filtered.forEach((product, index) => {
      const card = this.template.content.cloneNode(true);

      const image = card.querySelector(".card__image");
      image.src = `images/${this.category}-${index + 1}.jpg`;
      image.alt = product.name;

      card.querySelector(".card__name").textContent = product.name;
      card.querySelector(".card__text").textContent = product.description;
      card.querySelector(".card__price").textContent =
        `$${Number(product.price).toFixed(2)}`;

      const cardEl = card.firstElementChild;
      cardEl.addEventListener("click", () =>
        this.modal.openModal(product, image.src),
      );

      this.grid.append(card);
    });
  }
}
