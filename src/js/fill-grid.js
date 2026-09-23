// data
import products from "./products.json";
import { openModal } from "./modal";

export function fillGrid() {
  const grid = document.querySelector(".grid__container");
  const template = document.getElementById("card-template");

  if (!grid || !template) return;

  grid.textContent = "";

  let choice = "coffee";

  const filtered = products.filter((product) => product.category === choice);

  filtered.forEach((product, index) => {
    const card = template.content.cloneNode(true);

    const image = card.querySelector(".card__image");
    image.src = `images/coffee-${index + 1}.jpg`;
    image.alt = product.name;

    card.querySelector(".card__name").textContent = product.name;
    card.querySelector(".card__text").textContent = product.description;
    card.querySelector(".card__price").textContent = `$${Number(product.price).toFixed(2)}`;

    const cardEl = card.firstElementChild;
    cardEl.addEventListener("click", () => openModal(product));

    grid.append(card);
  });
}
