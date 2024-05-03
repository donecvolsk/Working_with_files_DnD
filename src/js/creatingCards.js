export default class CreatingCards {
  constructor(identificator) {
    this.identificator = identificator;
    this.a = document.querySelectorAll(".creatingCards_new");
    this.cards = document.querySelector(".cards_" + this.identificator);
    this.creatingCards_new = document.querySelector(".creatingCards_new" + this.identificator);
    this.creatingCards_add = document.querySelector(".creatingCards_add_" + this.identificator);

    this.textarea = document.createElement("textarea");
    this.textarea.classList.add('textarea');

    this.card = document.createElement("div");
    //this.card.setAttribute("draggable", "true"); 

    this.cross = document.createElement("button");
    this.cross.classList.add("cross");

    this.cards.append(this.textarea);

    this.creatingCards_add.classList.remove("hidden"); //показ кнопки Add card
    this.a[0].classList.add("hidden");//скрытие кнопок + Add another card
    this.a[1].classList.add("hidden");
    this.a[2].classList.add("hidden");

    //создание карточки с содержимым поля textarea 
    this.creatingCards_add.addEventListener("click", () => {
        this.a[0].classList.remove("hidden"); //показ кнопок + Add another card
        this.a[1].classList.remove("hidden");
        this.a[2].classList.remove("hidden");

      if(this.textarea.value === "") {// проверка на пустое поле textarea
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

      /*___перетаскивание карточек___
      this.card.addEventListener(`dragstart`, (evt) => {
        evt.target.classList.add(`selected`);
      })

      this.card.addEventListener(`dragend`, (evt) => {
        evt.target.classList.remove(`selected`);
      });

      this.card.addEventListener(`dragover`, (evt) => {
      // Разрешаем сбрасывать элементы в эту область
      evt.preventDefault();

      // Находим перемещаемый элемент
      const activeElement = this.card.querySelector(`.selected`);
      // Находим элемент, над которым в данный момент находится курсор
      const currentElement = evt.target;
      // Проверяем, что событие сработало:
      // 1. не на том элементе, который мы перемещаем,
      // 2. именно на элементе списка
      const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`cards`);

      // Если нет, прерываем выполнение функции
      if (!isMoveable) {
        return;
      }

      // Находим элемент, перед которым будем вставлять
      const nextElement = (currentElement === activeElement.nextElementSibling) ?
          currentElement.nextElementSibling :
          currentElement;

      // Вставляем activeElement перед nextElement
       this.card.insertBefore(activeElement, nextElement);
      })*/
      
    });

    //удаление карточки крестиком
    this.cross.addEventListener("click", () => {
      this.card.classList.add("hidden");
      this.cross.classList.add("hidden");
    });
  }
}


