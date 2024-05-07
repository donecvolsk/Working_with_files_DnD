export default function remuveCard() {
    const cardDelete = document.querySelectorAll('.cardItem');
    cardDelete.forEach(el => {
        el.addEventListener('click', (event) => {
            let evt = event.target;
            if(evt.classList.contains('cross')) {
                el.remove();
            }
           
        })
            
    })
   
}