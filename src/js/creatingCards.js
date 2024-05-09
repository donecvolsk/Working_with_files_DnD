import draggingAndDropping from "./draggingAndDropping";

// класс создание новой карточки
export default class CreatingCards {
  constructor(identificator) {
    this.identificator = identificator; //переменная полученная при нажатии элемента "+ Add another card"
    this.addCardArray = document.querySelectorAll(".creatingCards_new"); // получаем массив элемнтов "Add card"
    this.cards = document.querySelector(".cards_" + this.identificator); //получаем узел из колонки в которой будем добавлять крточку

    //получаем элемент "+ Add another card" из колнкив которой будем добавлять крточку
    this.creatingCards_new = document.querySelector(
      ".creatingCards_new" + this.identificator,
    );

    //получаем элемент "Add card" из колнки в которой будем добавлять крточку
    this.creatingCards_add = document.querySelector(
      ".creatingCards_add_" + this.identificator,
    );

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
