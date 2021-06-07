const buttonMenu = document.querySelector('.page-header__button-menu');
const menu = document.querySelector('.page-header__main-nav');

const openMenu = function () {
  buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('page-header__main-nav--opened');
    buttonMenu.classList.toggle('page-header__button-menu--opened');
  });
};


export { openMenu };
