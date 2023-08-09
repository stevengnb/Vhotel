window.addEventListener('scroll',() => {
    const navbar = document.querySelector('.navbar');
    const right_navbar = document.querySelector('.right-nav');
    const small_nav = document.querySelector('.small-nav');
    const div_right = small_nav.querySelectorAll('div');
    const a_right = right_navbar.querySelectorAll('a');
    const pageYOffset = window.pageYOffset;

    right_navbar.classList.remove('scroll-op-0', 'scroll-op');
    
    if (pageYOffset > 265) {
        right_navbar.classList.add('scroll-op');
        navbar.classList.add('scroll-op');
    } else {
        right_navbar.classList.add('scroll-op-0');
        navbar.classList.remove('scroll-op');
    }

    a_right.forEach(aRight => {
        aRight.style.color = (pageYOffset > 265) ? '#000000' : '#FFFFFF';
    });

    div_right.forEach(divRight => {
        divRight.style.backgroundColor = (pageYOffset > 265) ? '#000000' : '#FFFFFF';
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

window.addEventListener('scroll', () => {
    const show = document.querySelectorAll('.show');
    
    show.forEach(showFade => {
        var wHeight = window.innerHeight;
        var top = showFade.getBoundingClientRect().top;
        var showCont = 50;
        
        if(top >= wHeight - showCont) {
            showFade.classList.remove('on');
        } else {
            showFade.classList.add('on');
        }
    });
});

function roomClicked() {
    const roomButtonDiv = document.querySelector('.line-room');
    const bathroomButtonDiv = document.querySelector('.line-bathroom');
    const roomContentDiv = document.querySelector('.room');
    const bathroomContentDiv = document.querySelector('.bathroom');

    if(!(roomButtonDiv.classList.contains('selectedA'))) {
        roomButtonDiv.classList.add('selectedA');
        bathroomButtonDiv.classList.remove('selectedB');

        roomContentDiv.classList.remove('hide');
        bathroomContentDiv.classList.add('hide');
    } 
};

function bathroomClicked() {
    const roomButtonDiv = document.querySelector('.line-room');
    const bathroomButtonDiv = document.querySelector('.line-bathroom');
    const roomContentDiv = document.querySelector('.room');
    const bathroomContentDiv = document.querySelector('.bathroom');

    if(!(bathroomButtonDiv.classList.contains("selectedB"))) {
        bathroomButtonDiv.classList.add("selectedB");
        roomButtonDiv.classList.remove("selectedA");

        bathroomContentDiv.classList.remove("hide");
        roomContentDiv.classList.add("hide");
    }
};