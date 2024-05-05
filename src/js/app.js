import creatingCards from "./creatingCards";
import draggingAndDropping from "./draggingAndDropping";
const creatingCards_new = document.querySelectorAll(".creatingCards_new");
const cardCollection = document.querySelectorAll(".cardItem");

for (let elem of creatingCards_new) {
  elem.addEventListener("click", (event) => {
    const element = event.target;
    new creatingCards(element.id);
  });
}
