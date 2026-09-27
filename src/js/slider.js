export class Slider {
  constructor() {
    this.init();
  }

  init() {
    this.position = 0;
    this.controls = document.querySelectorAll(".slider__control");
    this.qty = this.controls.length;
    this.row = document.querySelector(".slider__row");

    if (!this.row) return;

    const prevBtn = document.querySelector(".slider__button--prev");
    const nextBtn = document.querySelector(".slider__button--next");

    prevBtn.addEventListener("click", () => this.goTo(this.position - 1));
    nextBtn.addEventListener("click", () => this.goTo(this.position + 1));

    this.controls.forEach((control, i) =>
      control.addEventListener("click", () => this.goTo(i)),
    );
  }

  goTo(target) {
    this.position = (target + this.qty) % this.qty;
    this.row.style.transform = `translateX(${-this.position * 100}%)`;
    this.updateControlsUI();
  }

  updateControlsUI() {
    this.controls.forEach((control, i) => {
      control.classList.toggle("slider__control--active", i === this.position);
    });
  }
}
