/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/remuveCard.js
function remuveCard() {
  const cardDelete = document.querySelectorAll('.cardItem');
  cardDelete.forEach(el => {
    el.addEventListener('click', event => {
      let evt = event.target;
      if (evt.classList.contains('cross')) {
        el.remove();
      }
    });
  });
}
;// CONCATENATED MODULE: ./src/js/draggingAndDropping.js


function draggingAndDropping() {
  const tasksListElement = document.querySelectorAll(`.cards`);
  tasksListElement.forEach(elem => {
    const taskElements = elem.querySelectorAll(`.cardItem`);
    for (const task of taskElements) {
      task.draggable = true;
    }
    elem.addEventListener(`dragstart`, evt => {
      evt.target.classList.add(`selected`);
    });
    elem.addEventListener(`dragend`, evt => {
      evt.target.classList.remove(`selected`);
    });
    const getNextElement = (cursorPosition, currentElement) => {
      const currentElementCoord = currentElement.getBoundingClientRect();
      const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
      const nextElement = cursorPosition < currentElementCenter ? currentElement : currentElement.nextElementSibling;
      return nextElement;
    };
    elem.addEventListener(`dragover`, evt => {
      evt.preventDefault();
      const activeElement = elem.querySelector(`.selected`);
      const currentElement = evt.target;
      const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`cardItem`);
      if (!isMoveable) {
        return;
      }
      const nextElement = getNextElement(evt.clientY, currentElement);
      if (nextElement && activeElement === nextElement.previousElementSibling || activeElement === nextElement) {
        return;
      }
      elem.insertBefore(activeElement, nextElement);
    });
    remuveCard();
  });
}
;// CONCATENATED MODULE: ./src/js/creatingCards.js



class CreatingCards {
  constructor(identificator) {
    this.identificator = identificator;
    this.a = document.querySelectorAll(".creatingCards_new");
    this.cards = document.querySelector(".cards_" + this.identificator);
    this.creatingCards_new = document.querySelector(".creatingCards_new" + this.identificator);
    this.creatingCards_add = document.querySelector(".creatingCards_add_" + this.identificator);
    this.textarea = document.createElement("textarea");
    this.textarea.classList.add("textarea");
    this.card = document.createElement("div");
    this.cross = document.createElement("button");
    this.cross.classList.add("cross");
    this.cards.append(this.textarea);
    this.creatingCards_add.classList.remove("hidden"); //показ кнопки Add card
    this.a[0].classList.add("hidden"); //скрытие кнопок + Add another card
    this.a[1].classList.add("hidden");
    this.a[2].classList.add("hidden");

    //создание карточки с содержимым поля textarea
    this.creatingCards_add.addEventListener("click", () => {
      this.a[0].classList.remove("hidden"); //показ кнопок + Add another card
      this.a[1].classList.remove("hidden");
      this.a[2].classList.remove("hidden");
      if (this.textarea.value === "") {
        // проверка на пустое поле textarea
        return;
      }
      this.cross.textContent = "X"; //добавление символа крестик в контент для крестика
      this.card.classList.add("cardItem"); //добавление classa для карточки
      this.value = this.textarea.value; //добавление значения из textarea в переменную
      this.card.textContent += this.value; //добавление значения из переменной в контент карточки
      this.card.append(this.cross); //добавление крестика в документ
      this.cards.append(this.card); //добавление карточки в документ
      //saveLS();
      this.textarea.value = null; //обнуление значения textarea
      this.textarea.remove(); //удаление textarea
      this.creatingCards_add.classList.toggle("hidden"); //скрытие кнопки Add card
      draggingAndDropping();
    });
  }
}
;// CONCATENATED MODULE: ./src/js/saveLS.js
function saveLS() {
  const itemColum1LS = document.querySelector('#colum1').innerHTML;
  localStorage.setItem('Colum1', JSON.stringify(itemColum1LS));
}
;// CONCATENATED MODULE: ./src/js/app.js



window.addEventListener('load', function () {
  let itemColum1LS = document.querySelector('#colum1');
  let itemColumS1 = JSON.parse(window.localStorage.getItem('Colum1'));
  let cardLS = document.createElement('div');
  cardLS.innerHTML = itemColumS1;
  itemColum1LS.insertAdjacentHTML('afterBegin', cardLS.innerHTML);
  draggingAndDropping();
});
window.addEventListener('beforeunload', function () {
  saveLS();
});
const creatingCards_new = document.querySelectorAll(".creatingCards_new");
for (let elem of creatingCards_new) {
  elem.addEventListener("click", event => {
    const element = event.target;
    new CreatingCards(element.id);
  });
}
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;