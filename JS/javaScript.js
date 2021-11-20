const menutToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.nav-inner .menu ul');

menutToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


