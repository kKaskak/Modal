const openBtn = document.querySelector('.open'); 
const closeBtn = document.querySelector('.modal-btn'); 
const modalContainer = document.querySelector('.modal-container');

openBtn.addEventListener('click',() => {
    modalContainer.classList.add('show');
});
closeBtn.addEventListener('click',() => {
    modalContainer.classList.remove('show');
});