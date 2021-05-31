const buttonMenu = document.querySelector('.page-header__button-menu');
const menu = document.querySelector('.page-header__main-nav');

buttonMenu.addEventListener('click', () => {
  menu.classList.toggle('page-header__main-nav--opened');
  buttonMenu.classList.toggle('page-header__button-menu--opened');
});


const buttonBookmark = document.querySelector('.bookmark');

buttonBookmark.addEventListener('click', (evt) => {
  evt.preventDefault();
  buttonBookmark.classList.toggle('bookmark--current');
});


const targetSumm = document.querySelector('.target');
const targetBar = document.querySelector('.information__bar');



const getIntegerSum = function () {
  const integerSum = targetSumm.textContent.slice(1).split(",");
  const total = integerSum[0];
  targetBar.style.width = total + '%';
}

getIntegerSum();
