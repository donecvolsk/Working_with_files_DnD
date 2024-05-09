import remuveCard from "./remuveCard";

//функция для перемещения карточек
export default function draggingAndDropping() {
  const tasksListElement = document.querySelectorAll(`.cards`);

  tasksListElement.forEach((elem) => {
    const taskElements = elem.querySelectorAll(`.cardItem`);

    for (const task of taskElements) {
      task.draggable = true;
    }

    elem.addEventListener(`dragstart`, (evt) => {
      evt.target.classList.add(`selected`);
    });

    elem.addEventListener(`dragend`, (evt) => {
      evt.target.classList.remove(`selected`);
    });

    const getNextElement = (cursorPosition, currentElement) => {
      const currentElementCoord = currentElement.getBoundingClientRect();
      const currentElementCenter =
        currentElementCoord.y + currentElementCoord.height / 2;

      const nextElement =
        cursorPosition < currentElementCenter
          ? currentElement
          : currentElement.nextElementSibling;

      return nextElement;
    };

    elem.addEventListener(`dragover`, (evt) => {
      evt.preventDefault();
      const activeElement = elem.querySelector(`.selected`);
      const currentElement = evt.target;
      const isMoveable =
        activeElement !== currentElement &&
        currentElement.classList.contains(`cardItem`);

      if (!isMoveable) {
        return;
      }

      const nextElement = getNextElement(evt.clientY, currentElement);

      if (
        (nextElement && activeElement === nextElement.previousElementSibling) ||
        activeElement === nextElement
      ) {
        return;
      }
      elem.insertBefore(activeElement, nextElement);
    });
    remuveCard(); //вызов функции для удаления карточек
  });
}
