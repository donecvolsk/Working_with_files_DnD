

export default class DraggingAndDropping{
    constructor() {
      this.tasksListElement = document.querySelector(`.columsContainer`);
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

}

    
