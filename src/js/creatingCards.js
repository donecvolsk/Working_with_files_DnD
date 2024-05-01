export default class CreatingCards {
  constructor(identificator) {
    this.identificator = identificator;
    this.cards = document.querySelector(".cards_" + this.identificator);
    this.creatingCards_new = document.querySelector(
      ".creatingCards_new" + this.identificator,
    );
    this.creatingCards_add = document.querySelector(
      ".creatingCards_add_" + this.identificator,
    );

    this.textarea = document.createElement("textarea");
    this.textarea.classList.add('textarea');

    this.card = document.createElement("div");

    this.cross = document.createElement("button");
    this.cross.classList.add("cross");

    this.cards.append(this.textarea);
    this.creatingCards_add.classList.remove("hidden");

    this.creatingCards_add.addEventListener("click", () => {
      this.cross.textContent = "X";
      this.card.classList.add("cardItem");
      this.value = this.textarea.value;
      this.card.textContent += this.value;
      this.cards.append(this.cross);
      this.cards.append(this.card);
      this.textarea.value = null;
      this.textarea.remove();
      this.creatingCards_add.classList.toggle("hidden");
    });

    this.cross.addEventListener("click", () => {
      console.log("крестик");
      this.card.classList.add("hidden");
      this.cross.classList.add("hidden");
    });
  }
}
