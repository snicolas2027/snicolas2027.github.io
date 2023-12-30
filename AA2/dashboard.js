const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const sidebar = document.getElementById('sidebar')
const container = document.getElementById('containir')


openBtn.addEventListener('click', () =>{
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () =>{
    sidebar.classList.remove('active');
});

openBtn.addEventListener('click', () =>{
    container.classList.add('active');
});

closeBtn.addEventListener('click', () =>{
    container.classList.remove('active');
});





