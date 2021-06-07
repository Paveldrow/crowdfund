import { openMenu } from './main-menu.js';
import { addBookmark } from './add-bookmark.js';
import { backProjectMenu } from './back-project-menu.js';

const inputPay = document.querySelector('.back-project__input');
const totalSum = document.querySelector('.information__total');
const targetBar = document.querySelector('.information__bar');
const targetSum = document.querySelector('.information__target');

function setStatusBar () {
  const totalTarget = targetSum.textContent.replace(",", '');
  const total = totalSum.textContent.replace(",", '');
  targetBar.style.width = ((total / totalTarget) * 100) + '%';
}

const input = function () {
  totalSum.textContent = inputPay.value.toLocaleString('ja-JP');
}

inputPay.addEventListener('input', () => {
  sendPay()
  setStatusBar()
})


const sendPay = function () {
  if (inputPay.value !== undefined) {
    totalSum.textContent = (Number(totalSum.textContent.replace(',', '')) + Number(inputPay.value)).toLocaleString('ja-JP');
  };
  return totalSum.textContent;
};

openMenu();
addBookmark();
backProjectMenu();


input();
