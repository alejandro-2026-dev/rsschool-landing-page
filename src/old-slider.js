export function slider() {
  let currentStep = 0;
  const number_slides = 3;
  const prevBtn = document.querySelector(".slider__button--prev");
  const nextBtn = document.querySelector(".slider__button--next");
  const controls = document.querySelectorAll(".slider__control");
  const row = document.querySelector(".slider__row");

  if (!row) return;

  prevBtn.addEventListener("click", () => buttonClickHandler(-1));
  nextBtn.addEventListener("click", () => buttonClickHandler(1));

  function buttonClickHandler(direction) {
    currentStep = (currentStep + direction) % number_slides;
    if (currentStep < 0) currentStep = number_slides - 1;
    row.style.transform = `translateX(${-currentStep * 100}%)`;
    controls.forEach((control, index) => {
      if (index !== currentStep)
        control.classList.remove("slider__control--active");
      else control.classList.add("slider__control--active");
    });
  }

  controls.forEach((control, index) =>
    control.addEventListener("click", () =>
      buttonClickHandler(index - currentStep),
    ),
  );
}
