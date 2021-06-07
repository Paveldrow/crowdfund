const buttonBookmark = document.querySelector('.bookmark');

const addBookmark = function () {
  buttonBookmark.addEventListener('click', (evt) => {
    evt.preventDefault();
    buttonBookmark.classList.toggle('bookmark--current');
  });
}

export {addBookmark};
