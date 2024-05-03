/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

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
    //this.card.setAttribute("draggable", "true");

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
      this.cards.append(this.cross); //добавление крестика в документ
      this.cards.append(this.card); //добавление карточки в документ
      this.textarea.value = null; //обнуление значения textarea
      this.textarea.remove(); //удаление textarea
      this.creatingCards_add.classList.toggle("hidden"); //скрытие кнопки Add card
    });

    //удаление карточки крестиком
    this.cross.addEventListener("click", () => {
      this.card.classList.add("hidden");
      this.cross.classList.add("hidden");
    });
  }
}
;// CONCATENATED MODULE: ./src/js/draggingAndDropping.js
function draggingAndDropping() {
  const tasksListElement = document.querySelector(`.cards`);
  const taskElements = tasksListElement.querySelectorAll(`.cardItem`);
  for (const task of taskElements) {
    task.draggable = true;
  }
  tasksListElement.addEventListener(`dragstart`, evt => {
    evt.target.classList.add(`selected`);
  });
  tasksListElement.addEventListener(`dragend`, evt => {
    evt.target.classList.remove(`selected`);
  });
  const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
    const nextElement = cursorPosition < currentElementCenter ? currentElement : currentElement.nextElementSibling;
    return nextElement;
  };
  tasksListElement.addEventListener(`dragover`, evt => {
    evt.preventDefault();
    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`cardItem`);
    if (!isMoveable) {
      return;
    }
    const nextElement = getNextElement(evt.clientY, currentElement);
    if (nextElement && activeElement === nextElement.previousElementSibling || activeElement === nextElement) {
      return;
    }
    tasksListElement.insertBefore(activeElement, nextElement);
  });
}
;// CONCATENATED MODULE: ./src/js/app.js


const columsContainer = document.querySelector(".columsContainer");

// события клика на кнопку + Add another card, и передача параметра "кнопка" в класс creatingCards
columsContainer.addEventListener("click", event => {
  const element = event.target;
  if (element.id === "todo") {
    new CreatingCards("todo");
  } else if (element.id === "progress") {
    new CreatingCards("progress");
  } else if (element.id === "done") {
    new CreatingCards("done");
  }
  if (element.classList.contains("cardItem")) {
    draggingAndDropping();
  }
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;