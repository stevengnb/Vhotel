document.addEventListener("DOMContentLoaded", () => {
    const small_navbar = document.querySelector('.small-nav input');
    const right_nav = document.querySelector('.right-nav');
    
    small_navbar.addEventListener("click", () => {
        right_nav.classList.toggle('nav-in');
    });
});