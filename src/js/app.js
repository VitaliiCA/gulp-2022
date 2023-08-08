/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

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


// import MousePRLX from './libs/parallaxMouse'

// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();
// appAnimation();

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion.js';


BaseHelpers.checkWebpSupport();

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

new Tabs('tabs-example', {});


// const tabs = new Tabs('default-tabs', {});

//modal section service
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

//send request
document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    const recipientEmail = 'kalinin.vitaliy.ua@gmail.com';

    const data = {
      name: name,
      email: email,
      number: number,
    };

    fetch('https://example.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert('Форма успешно отправлена!');
        } else {
          alert('Произошла ошибка при отправке формы.');
        }
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке формы.');
      });
  });

new Accordion('.accordion', {
  shouldOpenAll: false, // true
  defaultOpen: [], // [0,1]
  collapsedClass: 'open',
});

