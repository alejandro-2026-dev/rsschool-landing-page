// data
import products from "./products.json";

export function initGrid(modal) {
  const root = document.querySelector(".grid");
  const grid = document.querySelector(".grid__container");
  const template = document.getElementById("card-template");
  const offer = document.querySelector(".offer__tabs");
  const tabItems = document.querySelectorAll(".tab-item");
  const btnShowMore = document.getElementById("show-more");

  if (!grid || !template || !offer) return;

  let choice = "coffee";
  fillGrid(root, grid, template, choice, modal);

  offer.addEventListener("click", (e) => {
    const currentBtn = e.target.closest(".tab-item");
    if (!currentBtn) return;
    const btnCategory = currentBtn.dataset.category;
    if (["coffee", "tea", "dessert"].includes(btnCategory)) {
      fillGrid(root, grid, template, btnCategory, modal);
      tabItems.forEach((btn) => btn.classList.remove("tab-item--active"));
      currentBtn.classList.add("tab-item--active");
    }
  });

  btnShowMore.addEventListener("click", () => {
    root.classList.add("grid--expanded");
  });
}

function fillGrid(root, grid, template, choice, modal) {
  grid.textContent = "";
  const filtered = products.filter((product) => product.category === choice);
  filtered.length > 4
    ? root.classList.remove("grid--expanded")
    : root.classList.add("grid--expanded");
  filtered.forEach((product, index) => {
    const card = template.content.cloneNode(true);

    const image = card.querySelector(".card__image");
    image.src = `images/${choice}-${index + 1}.jpg`;
    image.alt = product.name;

    card.querySelector(".card__name").textContent = product.name;
    card.querySelector(".card__text").textContent = product.description;
    card.querySelector(".card__price").textContent =
      `$${Number(product.price).toFixed(2)}`;

    const cardEl = card.firstElementChild;
    cardEl.addEventListener("click", () => modal.openModal(product, image.src));

    grid.append(card);
  });
}
