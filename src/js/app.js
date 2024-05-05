import creatingCards from "./creatingCards";
const creatingCards_new = document.querySelectorAll(".creatingCards_new");


for (let elem of creatingCards_new) {
  elem.addEventListener("click", (event) => {
    const element = event.target;
    new creatingCards(element.id);
  });
}
