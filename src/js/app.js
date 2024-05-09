import creatingCards from "./creatingCards";
import saveLS from "./saveLS";
import recordLS from "./recordLS";

//Запускаем запись из локального хранилища после загрузки страницы
window.addEventListener("load", function () {
  recordLS();
});

//запускаем запись в локальное хранилище при закрытии страницы
window.addEventListener("beforeunload", function () {
  saveLS();
});

//записываем в переменную массив из элементов "+ Add another card"
const creatingCards_new = document.querySelectorAll(".creatingCards_new");

//перебираем элементы "+ Add another card" и ловим событие "click" на них
for (let elem of creatingCards_new) {
  elem.addEventListener("click", (event) => {
    const element = event.target;
    new creatingCards(element.id); // вызываем класс создания карточек
  });
}
