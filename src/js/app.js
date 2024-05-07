import creatingCards from "./creatingCards";
import saveLS from "./saveLS";
import draggingAndDropping from "./draggingAndDropping";

window.addEventListener('load', function () {
  let itemColum1LS = document.querySelector('#colum1')
  let itemColumS1 = JSON.parse(window.localStorage.getItem('Colum1'));
  let cardLS = document.createElement('div');
    cardLS.innerHTML = itemColumS1;
    itemColum1LS.insertAdjacentHTML('afterBegin', cardLS.innerHTML);
    draggingAndDropping();   
})

window.addEventListener('beforeunload', function () {
  saveLS();
})

const creatingCards_new = document.querySelectorAll(".creatingCards_new");

for (let elem of creatingCards_new) {
  elem.addEventListener("click", (event) => {
    const element = event.target;
    new creatingCards(element.id);
  });
}

