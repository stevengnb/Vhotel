window.addEventListener('scroll', () => {
    const show = document.querySelectorAll('.show');
    
    show.forEach(showFade => {
        var wHeight = window.innerHeight;
        var top = showFade.getBoundingClientRect().top;
        var showCont = 125;

        if(top >= wHeight - showCont) {
            showFade.classList.remove('on');
        } else {
            showFade.classList.add('on');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const small_navbar = document.querySelector('.small-nav input');
    const right_nav = document.querySelector('.right-nav');
    
    small_navbar.addEventListener("click", () => {
        right_nav.classList.toggle('nav-in');
    });
});