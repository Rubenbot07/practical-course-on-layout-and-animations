const menu = document.querySelector('.menu');
const listItems = document.querySelectorAll('.list-item');
const modal = document.querySelector('.modal-container');
const closeModal = document.querySelector('.button--close');

// Burger menu mobile size

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
// Scroll animation mobile size

function checkScreenSize() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
        window.addEventListener('scroll', () => {
            const innerHeight = window.innerHeight;
            listItems.forEach((item) => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < innerHeight) {    
                    item.classList.add('active-item');
                } 
            });
        });
    }
}

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
listItems.forEach((item) => {
    item.addEventListener('click', () => {
        modal.classList.add('active');
    });
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    console.log('close');
})