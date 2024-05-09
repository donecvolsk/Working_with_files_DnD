/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/remuveCard.js
//функция удаления карточек при нажатии на крестик
function remuveCard() {
  const cardDelete = document.querySelectorAll(".cardItem");
  cardDelete.forEach(el => {
    el.addEventListener("click", event => {
      let evt = event.target;
      if (evt.classList.contains("cross")) {
        el.remove();
      }
    });
  });
}
;// CONCATENATED MODULE: ./src/js/draggingAndDropping.js


//функция для перемещения карточек
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
    remuveCard(); //вызов функции для удаления карточек
  });
}
;// CONCATENATED MODULE: ./src/js/creatingCards.js


// класс создание новой карточки
class CreatingCards {
  constructor(identificator) {
    this.identificator = identificator; //переменная полученная при нажатии элемента "+ Add another card"
    this.addCardArray = document.querySelectorAll(".creatingCards_new"); // получаем массив элемнтов "Add card"
    this.cards = document.querySelector(".cards_" + this.identificator); //получаем узел из колонки в которой будем добавлять крточку

    //получаем элемент "+ Add another card" из колнкив которой будем добавлять крточку
    this.creatingCards_new = document.querySelector(".creatingCards_new" + this.identificator);

    //получаем элемент "Add card" из колнки в которой будем добавлять крточку
    this.creatingCards_add = document.querySelector(".creatingCards_add_" + this.identificator);

    //создаем элемент <textarea> и добавляем класс "textarea"
    this.textarea = document.createElement("textarea");
    this.textarea.classList.add("textarea");
    this.card = document.createElement("div"); //создаем элемент для карточки

    //создаем элемент для крестика удаления и добавляем ему класс
    this.cross = document.createElement("button");
    this.cross.classList.add("cross");
    this.cards.append(this.textarea); // вставляем textarea

    this.creatingCards_add.classList.remove("hidden"); //показ кнопки Add card
    this.addCardArray[0].classList.add("hidden"); //скрытие кнопок + Add another card
    this.addCardArray[1].classList.add("hidden");
    this.addCardArray[2].classList.add("hidden");

    //создание карточки с содержимым поля textarea
    this.creatingCards_add.addEventListener("click", () => {
      this.addCardArray[0].classList.remove("hidden"); //показ кнопок + Add another card
      this.addCardArray[1].classList.remove("hidden");
      this.addCardArray[2].classList.remove("hidden");
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

      this.textarea.value = null; //обнуление значения textarea
      this.textarea.remove(); //удаление textarea

      this.creatingCards_add.classList.toggle("hidden"); //скрытие кнопки Add card

      draggingAndDropping(); //вызов функции для перемещения элементов
    });
  }
}
;// CONCATENATED MODULE: ./src/js/saveLS.js
//функция записи карточек в локальное хранилище
function saveLS() {
  //получаем содержимое колонок
  const itemColum1LS = document.querySelector("#colum1").innerHTML;
  const itemColum2LS = document.querySelector("#colum2").innerHTML;
  const itemColum3LS = document.querySelector("#colum3").innerHTML;

  //записываем содержимое колонок в локальное хранилище
  localStorage.setItem("Colum1", JSON.stringify(itemColum1LS));
  localStorage.setItem("Colum2", JSON.stringify(itemColum2LS));
  localStorage.setItem("Colum3", JSON.stringify(itemColum3LS));
}
;// CONCATENATED MODULE: ./src/js/recordLS.js


//функция записи карточек из локального хранилища
function recordLS() {
  // Получаем содержимое колонок
  let itemColum1LS = document.querySelector("#colum1");
  let itemColum2LS = document.querySelector("#colum2");
  let itemColum3LS = document.querySelector("#colum3");

  //записываем в переменные содержимое колонок из локального хранилища
  let itemColumS1 = JSON.parse(window.localStorage.getItem("Colum1"));
  let itemColumS2 = JSON.parse(window.localStorage.getItem("Colum2"));
  let itemColumS3 = JSON.parse(window.localStorage.getItem("Colum3"));

  //создаем блоки для содержимиго из локального хранилища
  let cardLS1 = document.createElement("div");
  let cardLS2 = document.createElement("div");
  let cardLS3 = document.createElement("div");

  //вставляем содержимое из локального хранилища в HTML
  cardLS1.innerHTML = itemColumS1;
  itemColum1LS.insertAdjacentHTML("afterBegin", cardLS1.innerHTML);
  cardLS2.innerHTML = itemColumS2;
  itemColum2LS.insertAdjacentHTML("afterBegin", cardLS2.innerHTML);
  cardLS3.innerHTML = itemColumS3;
  itemColum3LS.insertAdjacentHTML("afterBegin", cardLS3.innerHTML);
  draggingAndDropping(); // запускаем функцию для возможности претаскивания карточек и удалеления

  //Очищаем локально хранилище
  localStorage.removeItem("Colum1");
  localStorage.removeItem("Colum2");
  localStorage.removeItem("Colum3");
}
;// CONCATENATED MODULE: ./src/js/app.js




//Запускаем запись из локального хранилища после загрузки страницы
window.addEventListener("load", function () {
  recordLS();
});

//запускаем запись в локальное хранилище при закрытии страницы
window.addEventListener("beforeunload", function () {
  saveLS();
});

//записываем в переменную массив из элементов "+ Add another card"
const creatingCards_new = document.querySelectorAll(".creatingCards_new");

//перебираем элементы "+ Add another card" и ловим событие "click" на них
for (let elem of creatingCards_new) {
  elem.addEventListener("click", event => {
    const element = event.target;
    new CreatingCards(element.id); // вызываем класс создания карточек
  });
}
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;