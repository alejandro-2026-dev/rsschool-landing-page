// global
import 'modern-normalize';
import '../styles/vars.css';
import '../styles/main.css';

// shared
import '../styles/header.css';
import '../styles/footer.css';

// home
import '../styles/hero.css';
import '../styles/favorite.css';
import '../styles/about.css';
import '../styles/download.css';

// catalog
import '../styles/grid.css';
import '../styles/offer.css';
import '../styles/card.css';
import '../styles/modal.css';

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

fillGrid();



