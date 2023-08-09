window.addEventListener('scroll',() => {
    const navbar = document.querySelector('.navbar');
    const right_navbar = document.querySelector('.right-nav');
    const small_nav = document.querySelector('.small-nav');
    const div_right = small_nav.querySelectorAll('div');
    const a_right = right_navbar.querySelectorAll('a');
    const pageYOffset = window.pageYOffset;

    navbar.classList.remove('scroll-op', 'scroll-op-2', 'scroll-op-3', 'scroll-op-4');
    right_navbar.classList.remove('scroll-op-0', 'scroll-op', 'scroll-op-2', 'scroll-op-3', 'scroll-op-4');
    
    if(pageYOffset > 3035) {
        navbar.classList.add('scroll-op-4');
        right_navbar.classList.add('scroll-op-4');
    } else if(pageYOffset > 2000) {
        navbar.classList.add('scroll-op-3');
        right_navbar.classList.add('scroll-op-3');
    } else if (pageYOffset > 1235) {
        navbar.classList.add('scroll-op-2');
        right_navbar.classList.add('scroll-op-2');
    } else if (pageYOffset > 265) {
        navbar.classList.add('scroll-op');
        right_navbar.classList.add('scroll-op');
    } else {
        right_navbar.classList.add('scroll-op-0');
    }

    a_right.forEach(aRight => {
        aRight.style.color = (pageYOffset > 265) ? '#000000' : '#FFFFFF';
    });

    div_right.forEach(divRight => {
        divRight.style.backgroundColor = (pageYOffset > 265) ? '#000000' : '#FFFFFF';
    });
});

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
    const navbar = document.querySelector('.navbar');
    
    right_nav.addEventListener("mouseover", navbarclr => {
        if (navbarclr.target.tagName === "A") {
            navbarclr.target.style.opacity = "0.95";
            navbarclr.target.style.color = "darksalmon";
        }
    });

    right_nav.addEventListener("mouseout", navbarclr => {
        if (navbarclr.target.tagName === "A") {

            if(window.pageYOffset <= 265) {
                navbarclr.target.style.opacity = "";
                navbarclr.target.style.color = "";
            } else {
                navbarclr.target.style.opacity = "";
                navbarclr.target.style.color = "black";
            }
        }
    });

    small_navbar.addEventListener("click", () => {
        right_nav.classList.toggle('nav-in');
        navbar.classList.toggle('nav-full');
    });
});
