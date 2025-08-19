/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
<<<<<<< HEAD:src/js/main.js
// import { MousePRLX } from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import { BaseHelpers } from './helpers/base-helpers';
import { PopupManager } from './modules/popup-manager';
import { BurgerMenu } from './modules/burger-menu';
import { Tabs } from './modules/tabs';
import { Accordion } from './modules/accordion';
=======

// import {
//   isWebp,
//   headerFixed,
//   togglePopupWindows,
//   addTouchClass,
//   addLoadedClass,
// } from './modules';

// VANTA.NET({
//   el: '#vanta',
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.0,
//   minWidth: 200.0,
//   scale: 1.0,
//   scaleMobile: 1.0,
//   // color: 0x0,
//   backgroundColor: 0xffffff,
//   color: 0x474B4F,
//   // backgroundColor: 0x222629,
//   points: 18.0,
//   maxDistance: 21.0,
//   spacing: 18.0,
// });

VANTA.DOTS({
  el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x959595,
  color2: 0x848484,
  backgroundColor: 0xffffff,
  size: 2.90,
  spacing: 15.00,
  speed: 2.0,
  showLines: false

})

// import appAnimation from './animation/appAnimation';
// import BurgerMenu from './modules/BurgerMenu';

// import Tabs from 'modules/Tabs';

// import { MousePRLX } from './libs/parallaxMouse'


// import MousePRLX from './libs/parallaxMouse'

// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
// isWebp();
// appAnimation();

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion.js';
>>>>>>> 689a7537b28868e04bb5eacba25443a36b05a01b:src/js/app.js


BaseHelpers.checkWebpSupport();

BaseHelpers.calcScrollbarWidth();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

new Tabs('tabs-example', {
	onChange: (data) => {
		console.log(data);
	},
});

<<<<<<< HEAD:src/js/main.js
new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});
=======

// const tabs = new Tabs('default-tabs', {});

//modal section service
// const modals = document.querySelectorAll('.modal');
// const closeBtns = document.querySelectorAll('.close');

// function showModal(event) {
//   event.preventDefault();
//   const modalId = this.getAttribute('href');
//   document.querySelector(modalId).style.display = 'block';
// }

// function closeModal(event) {
//   event.preventDefault();
//   const modal = this.closest('.modal');
//   modal.style.display = 'none';
// }

// const liItems = document.querySelectorAll('.services-card__item');
// for (let i = 0; i < liItems.length; i++) {
//   liItems[i]
//     .querySelector('.services-card__link')
//     .addEventListener('click', showModal);
// }

// for (let j = 0; j < closeBtns.length; j++) {
//   closeBtns[j].addEventListener('click', closeModal);
// }
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

function showModal(event) {
  event.preventDefault();
  const modalId = this.getAttribute('href');
  const modal = document.querySelector(modalId);
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(event) {
  event.preventDefault();
  const modal = this.closest('.modal');
  modal.style.display = 'none';
  document.body.style.overflow = ''; 
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



//send request

//

>>>>>>> 689a7537b28868e04bb5eacba25443a36b05a01b:src/js/app.js
