// Menu opening module

const buttonMenu = document.querySelector('.page-header__button-menu');
const menu = document.querySelector('.page-header__main-nav');

const openMenu = function () {
  buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('page-header__main-nav--opened');
    buttonMenu.classList.toggle('page-header__button-menu--opened');
  });
};

// Bookmark module

const buttonBookmark = document.querySelector('.bookmark');

const addBookmark = function () {
  buttonBookmark.addEventListener('click', (evt) => {
    evt.preventDefault();
    buttonBookmark.classList.toggle('bookmark--current');
  });
};

// Payment module

const totalSum = document.querySelector('.information__total');
const targetBar = document.querySelector('.information__bar');
const targetSum = document.querySelector('.information__target');

function setStatusBar() {
  const totalTarget = targetSum.textContent.replace(",", '');
  const total = totalSum.textContent.replace(",", '');
  targetBar.style.width = ((total / totalTarget) * 100) + '%';
};

const sendPay = function () {
  const currentTarif = document.querySelector('.back-project__card--current');
  const inputPay = currentTarif.querySelector('.back-project__input');
  if (inputPay.value !== undefined) {
    totalSum.textContent = (Number(totalSum.textContent.replace(',', '')) + Number(inputPay.value)).toLocaleString('ja-JP');
  };
  return totalSum.textContent;
};

const addSponsorItem = function () {
  const sponsorTotal = document.querySelector('.information__sponsors');
  const sponsorConcat = Number(sponsorTotal.textContent.replace(',', '')) + 1
  sponsorTotal.textContent = sponsorConcat.toLocaleString('ja-JP');
}

const addedPay = function () {
  sendPay();
  setStatusBar();
  addSponsorItem()
};

const buttonsBackProjectReward = document.querySelectorAll('.donate-card__button');
const donateButtonClose = document.querySelector('.back-project__button-close');
const buttonBackProject = document.querySelector('.button--back-project');
const paymentCards = document.querySelectorAll('.back-project__card');
const donateBlock = document.querySelector('.back-project');
const sendPaymentButton = donateBlock.querySelectorAll('.donate-card__button');
const paymentComplitePopup = document.querySelector('.payment-complited');
const buttonClosePaymentComplite = document.querySelector('.payment-complited__button');

const openBackProject = function () {
  for (let i = 0; i < buttonsBackProjectReward.length; i++) {
    buttonsBackProjectReward[i].addEventListener('click', function () {
      donateBlock.classList.add('back-project--opened');
    });
  };

  buttonBackProject.addEventListener('click', function () {
    donateBlock.classList.add('back-project--opened');
  });
};

const closeBackProject = function () {
  donateButtonClose.addEventListener('click', function () {
    donateBlock.classList.remove('back-project--opened');
  });
};

const removeSelectedPayment = () => {
  const currentCard = document.querySelectorAll('.back-project__card--current');
  if (currentCard.length === 0) {
    return false;
  } else {
    currentCard.forEach(current => {
      current.classList.remove('back-project__card--current');
    });
  }
};

const selectPaymentHandler = function () {
  if (!this.classList.contains('donate-card--disabled')) {
    removeSelectedPayment()
    this.classList.add('back-project__card--current');
  };
};

const selectPayment = function () {
  for (let i = 0; i < paymentCards.length; i++) {
    paymentCards[i].onclick = selectPaymentHandler;
  };
};

const sendPaymentHandler = function () {
  donateBlock.classList.remove('back-project--opened');
  addedPay();

  showPaymentComplited();
  closePaymentComplited();
};

const sendPayment = function () {
  for (let i = 0; i < sendPaymentButton.length; i++) {
    sendPaymentButton[i].onclick = sendPaymentHandler;
  };
};

const showPaymentComplited = function () {
  paymentComplitePopup.classList.add('payment-complited--opened');
  closePaymentComplited();
};

const closePaymentComplited = function () {
  buttonClosePaymentComplite.addEventListener('click', function () {
    paymentComplitePopup.classList.remove('payment-complited--opened');
  });
};

const backProjectMenu = function () {
  openBackProject();
  selectPayment();
  sendPayment();
  closeBackProject();
};

openMenu();
addBookmark();
backProjectMenu();
