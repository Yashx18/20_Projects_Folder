// console.log("Script Connected");
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('show-modal')

})
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')

})
window.addEventListener('click',(e)=>{
    e.target == modal ? modal.classList.remove('show-modal') : false;
})