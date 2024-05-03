import creatingCards from "./creatingCards";
import draggingAndDropping from "./draggingAndDropping"
const columsContainer = document.querySelector(".columsContainer");



// события клика на кнопку + Add another card, и передача параметра "кнопка" в класс creatingCards
columsContainer.addEventListener("click", (event) => { 
  const element = event.target;
  if (element.id === "todo") {
    new creatingCards("todo");
  } else if (element.id === "progress") {
    new creatingCards("progress");
  } else if (element.id === "done") {
    new creatingCards("done");
  } 

  if(element.classList.contains("cardItem")) {
    draggingAndDropping();
  }
});


