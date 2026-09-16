// data
import { coffee } from './data';

export function fillGrid() {
  const grid = document.querySelector(".grid__container");
  const template = document.getElementById("card-template");

  if (!grid || !template) return;

  grid.textContent = "";

  coffee.forEach((product) => {
    const card = template.content.cloneNode(true);

    const image = card.querySelector(".card__image");
    image.src = `/images/coffee-${product.id}.jpg`;
    image.alt = product.name;

    card.querySelector(".card__name").textContent = product.name;
    card.querySelector(".card__text").textContent = product.description;
    card.querySelector(".card__price").textContent = `$${product.price.toFixed(2)}`;

    grid.append(card);
  });
}
