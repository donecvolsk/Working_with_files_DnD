//функция записи карточек в локальное хранилище
export default function saveLS() {
  //получаем содержимое колонок
  const itemColum1LS = document.querySelector("#colum1").innerHTML;
  const itemColum2LS = document.querySelector("#colum2").innerHTML;
  const itemColum3LS = document.querySelector("#colum3").innerHTML;

  //записываем содержимое колонок в локальное хранилище
  localStorage.setItem("Colum1", JSON.stringify(itemColum1LS));
  localStorage.setItem("Colum2", JSON.stringify(itemColum2LS));
  localStorage.setItem("Colum3", JSON.stringify(itemColum3LS));
}
