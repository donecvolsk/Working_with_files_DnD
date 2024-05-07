export default function saveLS() {
    const itemColum1LS = document.querySelector('#colum1').innerHTML
   
 localStorage.setItem('Colum1', JSON.stringify(itemColum1LS));
}

