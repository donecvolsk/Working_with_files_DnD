export default function draggingAndDropping() {
  const tasksListElement = document.querySelector(`.cards`);
  const taskElements = tasksListElement.querySelectorAll(`.cardItem`);

for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`);
});

tasksListElement.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});

const getNextElement = (cursorPosition, currentElement) => {
  const currentElementCoord = currentElement.getBoundingClientRect();
  const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

   // Пока поставим заглушку
   const nextElement = (cursorPosition < currentElementCenter) ?
    currentElement :
    currentElement.nextElementSibling;
  
   return nextElement;
};

tasksListElement.addEventListener(`dragover`, (evt) => {
  evt.preventDefault();
  const activeElement = tasksListElement.querySelector(`.selected`);
  const currentElement = evt.target;
  const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`cardItem`);
  
  if (!isMoveable) {
    return;
  }

  const nextElement = getNextElement(evt.clientY, currentElement);
  
  if (
    nextElement && 
    activeElement === nextElement.previousElementSibling ||
    activeElement === nextElement
  ) {
    return;
  }

  /*const nextElement = (currentElement === activeElement.nextElementSibling) ?
  currentElement.nextElementSibling :
  currentElement;*/

  tasksListElement.insertBefore(activeElement, nextElement);
});
  //console.log("draggingAndDropping");
}


/*export default class DraggingAndDropping{
    constructor() {
      this.tasksListElement = document.querySelector(`.colum`);
      //this.tasksListElement = document.querySelector(`.columsContainer`);
      this.taskElements = this.tasksListElement.querySelectorAll(`.cardItem`);

      // Перебираем все элементы списка и присваиваем нужное значение
      for (const task of this.taskElements) {
        task.draggable = true;
        console.log(task);
      }
      this.tasksListElement.addEventListener(`dragstart`, (evt) => {
        evt.target.classList.add(`selected`);
      })
      
      this.tasksListElement.addEventListener(`dragend`, (evt) => {
        evt.target.classList.remove(`selected`);
      });

      this.tasksListElement.addEventListener(`dragover`, (evt) => {
        // Разрешаем сбрасывать элементы в эту область
        evt.preventDefault();
      
        // Находим перемещаемый элемент
       this.activeElement = this.tasksListElement.querySelector(`.selected`);
        // Находим элемент, над которым в данный момент находится курсор
       this.currentElement = evt.target;
        // Проверяем, что событие сработало:
        // 1. не на том элементе, который мы перемещаем,
        // 2. именно на элементе списка
        this.isMoveable = this.activeElement !== this.currentElement &&
        this.currentElement.classList.contains(`.cards`);
      
        // Если нет, прерываем выполнение функции
        if (!this.isMoveable) {
          return;
        }
      
        // Находим элемент, перед которым будем вставлять
        this.nextElement = (this.currentElement === this.activeElement.nextElementSibling) ?
        this.currentElement.nextElementSibling :
        this.currentElement;
      
        // Вставляем activeElement перед nextElement
        this.tasksListElement.insertBefore(this.activeElement, this.nextElement);
      });
  }

}*/

    
