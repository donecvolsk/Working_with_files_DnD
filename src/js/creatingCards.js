import draggingAndDropping from "./draggingAndDropping";

export default class CreatingCards {
  constructor(identificator) {
    this.identificator = identificator;
    this.a = document.querySelectorAll(".creatingCards_new");
    this.cards = document.querySelector(".cards_" + this.identificator);
    this.creatingCards_new = document.querySelector(
      ".creatingCards_new" + this.identificator,
    );
    this.creatingCards_add = document.querySelector(
      ".creatingCards_add_" + this.identificator,
    );

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
      this.card.append(this.cross); //добавление крестика в документ
      this.cards.append(this.card); //добавление карточки в документ
      this.textarea.value = null; //обнуление значения textarea
      this.textarea.remove(); //удаление textarea
      this.creatingCards_add.classList.toggle("hidden"); //скрытие кнопки Add card
      draggingAndDropping();
    });

    //удаление карточки крестиком
    this.cross.addEventListener("click", () => {
      this.card.remove();
      this.cross.remove();
    });
  }
}
