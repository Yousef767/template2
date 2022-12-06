



let menuBtn = document.getElementById('menu');

let listItem = document.getElementById('list');

let nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    if (menuBtn.classList.contains('active')) {
        listItem.classList.remove('close');
        listItem.classList.add('open');
        nav.style.boxShadow = '0px 5px 10px transparent';
    } else {
        listItem.classList.remove('open');
        listItem.classList.add('close');
        nav.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.321)';
    }
});


window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        nav.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.321)';
    } else {
        nav.style.boxShadow = '0px 5px 10px transparent';
    }
});









