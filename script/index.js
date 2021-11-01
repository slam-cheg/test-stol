const upButton = document.querySelector('.first-screen__button_up');
const downButton = document.querySelector('.first-screen__button_down');
const tableDesk = document.querySelector('.first-screen__table_desk');


upButton.addEventListener('click', movingUp);
downButton.addEventListener('click', movingDown);

function movingUp() {
    if(!tableDesk.classList.contains('first-screen___table_up')){
        tableDesk.classList.add('first-screen___table_up');
    }
}

function movingDown() {
    if(tableDesk.classList.contains('first-screen___table_up')){
        tableDesk.classList.remove('first-screen___table_up')
    }
}