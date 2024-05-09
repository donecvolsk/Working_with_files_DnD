import draggingAndDropping from "./draggingAndDropping";

//функция записи карточек из локального хранилища
export default function recordLS() {
  // Получаем содержимое колонок
  let itemColum1LS = document.querySelector("#colum1");
  let itemColum2LS = document.querySelector("#colum2");
  let itemColum3LS = document.querySelector("#colum3");

  //записываем в переменные содержимое колонок из локального хранилища
  let itemColumS1 = JSON.parse(window.localStorage.getItem("Colum1"));
  let itemColumS2 = JSON.parse(window.localStorage.getItem("Colum2"));
  let itemColumS3 = JSON.parse(window.localStorage.getItem("Colum3"));

  //создаем блоки для содержимиго из локального хранилища
  let cardLS1 = document.createElement("div");
  let cardLS2 = document.createElement("div");
  let cardLS3 = document.createElement("div");

  //вставляем содержимое из локального хранилища в HTML
  cardLS1.innerHTML = itemColumS1;
  itemColum1LS.insertAdjacentHTML("afterBegin", cardLS1.innerHTML);

  cardLS2.innerHTML = itemColumS2;
  itemColum2LS.insertAdjacentHTML("afterBegin", cardLS2.innerHTML);

  cardLS3.innerHTML = itemColumS3;
  itemColum3LS.insertAdjacentHTML("afterBegin", cardLS3.innerHTML);

  draggingAndDropping(); // запускаем функцию для возможности претаскивания карточек и удалеления

  //Очищаем локально хранилище
  localStorage.removeItem("Colum1");
  localStorage.removeItem("Colum2");
  localStorage.removeItem("Colum3");
}
