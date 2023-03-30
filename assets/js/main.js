const body    = document.querySelector('body')
const nav     = document.querySelector('.nav');
const button  = document.querySelector('.nav-toggle-button');
const navLink = document.querySelectorAll('.nav__link');

button.addEventListener('click', () => {
    nav.classList.toggle('active');
    button.classList.toggle('open');
    body.classList.toggle('hiden');

});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        for (let link of navLink) {
            if (link.classList.contains('nav__link--active')) {
                link.classList.remove('nav__link--active')
            }

            nav.classList.remove('active');
            button.classList.remove('open');
            body.classList.remove('hiden');
        }

        link.classList.add('nav__link--active');
    });
});
AOS.init();