export function burger() {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__panel');
  let isOpen = false;

  burger.addEventListener('click', () => {
    burger.classList.toggle('on');
    menu.classList.toggle('on');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.toggle('no-scroll');
    isOpen = !isOpen;
  });

  document.querySelectorAll('.header__link').forEach((n) =>
    n.addEventListener('click', close),
  );

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') close();
  })

  const obj =  window.matchMedia('(min-width: 769px)');
  obj.addEventListener('change', close)

  function close() {
    if (isOpen === false) return;
    burger.classList.remove('on');
    menu.classList.remove('on');
    document.body.classList.remove('no-scroll');
    isOpen = false;
  }
}
