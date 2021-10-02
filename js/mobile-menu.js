
(() => {
  const menuBtnRef = document.querySelector('.menu-open');
  const mobileMenuRef = document.querySelector('.mobmenu');
  const mobileBtnClose = document.querySelector('.mobmenu-close');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
})();