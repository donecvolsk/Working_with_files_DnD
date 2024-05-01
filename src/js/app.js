import creatingCards from "./creatingCards";

const columsContainer = document.querySelector(".columsContainer");
columsContainer.addEventListener("click", (event) => {
  const element = event.target;
  if (element.id === "todo") {
    new creatingCards("todo");
  } else if (element.id === "progress") {
    new creatingCards("progress");
  } else if (element.id === "done") {
    new creatingCards("done");
  } else {
    return;
  }
});
