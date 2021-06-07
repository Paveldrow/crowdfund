const totalSum = document.querySelector('.information__total');
const targetBar = document.querySelector('.information__bar');
const targetSum = document.querySelector('.information__target');

function setStatusBar() {
  const totalTarget = targetSum.textContent.replace(",", '');
  const total = totalSum.textContent.replace(",", '');
  targetBar.style.width = ((total / totalTarget) * 100) + '%';
}

const sendPay = function () {
  const currentTarif = document.querySelector('.back-project__card--current');
  const inputPay = currentTarif.querySelector('.back-project__input');
  if (inputPay.value !== null) {
    totalSum.textContent = (Number(totalSum.textContent.replace(',', '')) + Number(inputPay.value)).toLocaleString('ja-JP');
  }
  return totalSum.textContent;
};

const addSponsorItem = function () {
  const sponsorTotal = document.querySelector('.information__sponsors');
  const sponsorConcat = Number(sponsorTotal.textContent.replace(',', '')) + 1
  sponsorTotal.textContent = sponsorConcat.toLocaleString('ja-JP');
}

const addedPay = function () {
  sendPay();
  addSponsorItem();
  setStatusBar();
};

export { addedPay };

