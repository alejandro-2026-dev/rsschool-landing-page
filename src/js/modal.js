export class Modal {
  constructor() {
    this.module = null;
    this.product = null;
    this.imageSrc = null;
    this.size = 0;
    this.adds = new Set();
    this.initModal();
  }

  initModal() {
    this.modal = document.querySelector(".modal");
    if (!this.modal) return;

    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal || e.target.closest(".modal__button"))
        this.closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeModal();
    });

    const size_container = this.modal.querySelector(".modal__size--tabs");
    size_container.addEventListener("click", (e) => {
      const targetTab = e.target.closest(".tab-item");
      if (targetTab) {
        this.size = Number(targetTab.dataset.index);
        this.renderPrice();
        targetTab.classList.add("tab-item--active");
        const tabs = size_container.querySelectorAll(".tab-item");
        tabs.forEach((item) => {
          if (item !== targetTab) item.classList.remove("tab-item--active");
        });
      }
    });

    this.modal
      .querySelector(".modal__adds--tabs")
      .addEventListener("click", (e) => {
        const targetTab = e.target.closest(".tab-item");
        if (targetTab) {
          const numIndex = Number(targetTab.dataset.index);
          if (this.adds.has(numIndex))
            this.adds.delete(numIndex);
          else
            this.adds.add(numIndex);
          this.renderPrice();
          targetTab.classList.toggle("tab-item--active");
        }
      });
  }

  openModal(product, imageSrc) {
    this.product = product;
    this.imageSrc = imageSrc;
    this.size = 0;
    this.adds.clear();
    this.fillModal();
    this.modal.classList.remove("hidden");
    document.body.classList.add("no-scroll");
  }

  closeModal() {
    this.modal.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  }

  fillModal() {
    const template = document.getElementById("tab-template");

    const image = this.modal.querySelector(".modal__image");
    image.src = this.imageSrc;
    image.alt = this.product.name;

    this.modal.querySelector(".modal__name").textContent = this.product.name;
    this.modal.querySelector(".modal__description").textContent =
      this.product.description;
    this.modal.querySelector(".modal__price").textContent =
      `$${Number(this.product.price).toFixed(2)}`;

    // sizes
    const sizeTabs = this.modal.querySelector(".modal__size--tabs");
    sizeTabs.textContent = "";
    Object.entries(this.product.sizes).forEach(([key, value], index) => {
      const tab = this.createTab(
        template,
        key.toUpperCase(),
        value.size,
        index,
      );
      if (index === 0) tab.classList.add("tab-item--active");
      sizeTabs.append(tab);
    });

    // additives
    const addsTabs = this.modal.querySelector(".modal__adds--tabs");
    addsTabs.textContent = "";
    this.product.additives.forEach((additive, index) => {
      addsTabs.append(
        this.createTab(template, index + 1, additive.name, index),
      );
    });
  }

  createTab(template, icon, text, index) {
    const tab = template.content.cloneNode(true).firstElementChild;
    tab.querySelector(".tab-item__icon").textContent = icon;
    tab.querySelector(".tab-item__text").textContent = text;
    tab.dataset.index = index;
    return tab;
  }

  renderPrice() {
    const sizes = ["s", "m", "l"];
    const initPrice = Number(this.product.price);
    const addForSize = Number(this.product.sizes[sizes[this.size]]["add-price"]);
    const addForAdds = this.product.additives
      .filter((_, ind) => this.adds.has(ind))
      .reduce((acc, item) => {
        return acc + Number(item["add-price"]);
      }, 0);
    const total = initPrice + addForSize + addForAdds;
    const element = document.querySelector(".modal__price");
    element.innerText = `$${total.toFixed(2)}`;
  }
}
