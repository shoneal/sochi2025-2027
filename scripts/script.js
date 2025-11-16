const header = document.querySelector(".header");
const headerButton = document.querySelector(".header__hidden__button");
const headerMainProgressBar = document.querySelector(".header__text__progress");
const headerProgressBar = document.querySelector(
  ".header__hidden__progress__bar"
);
const backButton = document.querySelector(".right__header__button");

window.addEventListener("scroll", function (event) {
  const y = scrollY;
  if (y > 1500) {
    headerButton.classList.add("header__open__button");
    backButton.classList.add("right__header__button__open");
  } else {
    headerButton.classList.remove("header__open__button");
    backButton.classList.remove("right__header__button__open");
  }
  if (y > 5) {
    header.classList.add("header__shadow");
    headerMainProgressBar.classList.add("header__text__progress__open");
    headerProgressBar.classList.add("header__hidden__progress__bar__open");
  } else {
    header.classList.remove("header__shadow");
    headerMainProgressBar.classList.remove("header__text__progress__open");
    headerProgressBar.classList.remove("header__hidden__progress__bar__open");
  }
});

function progressBar() {
  // Узнаем на сколько страница прокручена
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  // Узнаем высоту всей страницы
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // Получаем в % на сколько прокручена страница
  let scrolled = (scroll / height) * 100;

  // Подставляем % прокрутки в ширину нашей линии
  document.querySelector(".header__text__progress__bar").style.blockSize =
    scrolled + "%";
  document.querySelector(".header__hidden__progress__bar").style.inlineSize =
    scrolled + "%";
}

// Запускаем функцию, когда пользователя скролит
window.addEventListener("scroll", progressBar);
