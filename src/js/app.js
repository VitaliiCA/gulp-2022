/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
} from './modules';

VANTA.NET({
  el: '#vanta',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x1fe1f2,
  backgroundColor: 0x0,
  points: 18.0,
  maxDistance: 21.0,
  spacing: 18.0,
});

// import appAnimation from './animation/appAnimation';
// import BurgerMenu from './modules/BurgerMenu';

// import Tabs from 'modules/Tabs';

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'

// import Swiper, { Navigation, Pagination } from 'swiper';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();
// appAnimation();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
// new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
// togglePopupWindows();

// const tabs = new Tabs('default-tabs', {});

const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

function showModal(event) {
  event.preventDefault();
  const modalId = this.getAttribute('href');
  document.querySelector(modalId).style.display = 'block';
}

function closeModal(event) {
  event.preventDefault();
  const modal = this.closest('.modal');
  modal.style.display = 'none';
}

const liItems = document.querySelectorAll('.services-card__item');
for (let i = 0; i < liItems.length; i++) {
  liItems[i]
    .querySelector('.services-card__link')
    .addEventListener('click', showModal);
}

for (let j = 0; j < closeBtns.length; j++) {
  closeBtns[j].addEventListener('click', closeModal);
}
