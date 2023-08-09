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

function nameValidate() {
    const user_name = document.getElementById('name');
    const error = document.querySelector('.name-form .error');

    if (user_name.value.trim() !== "") {
        if(user_name.value.length < 3) {
            error.style.display = 'flex';
            return false;
        }
        error.style.display = 'none';
        return true;
    } else {
        error.style.display = 'flex';
        return false;
    }
};

function emailValidate() {
    const user_email = document.getElementById('email');
    const error = document.querySelector('.email-form .error');

    if (user_email.value.endsWith("@gmail.com")
        || user_email.value.endsWith("@binus.ac.id")
        || user_email.value.endsWith("@binus.edu")
        || user_email.value.endsWith("@outlook.com")) {

        if(user_email.value.startsWith("@")) {
            error.style.display = 'flex';
            return false;
        }
        error.style.display = 'none';
        return true;
    } else {
        error.style.display = 'flex';
        return false;
    }
};

function checkInValidate() {
    const user_checkin = document.getElementById("checkin");
    const error = document.querySelector(".checkin-form .error");
    const checkin_date = new Date(user_checkin.value);
    const today = new Date();

    if (user_checkin.value === "") {
        error.style.display = "flex";
    } else if (checkin_date < today) {
        error.style.display = "flex";
    } else {
        error.style.display = "none";
        return true;
    }

    return false;
};

function checkOutValidate() {
    const user_checkin = document.getElementById("checkin");
    const user_checkout = document.getElementById("checkout");
    const error = document.querySelector(".checkout-form .error");
    const checkin_date = new Date(user_checkin.value);
    const checkout_date = new Date(user_checkout.value);

    if (user_checkin.value === "") {
        error.style.display = "flex";
    } else if (checkout_date < checkin_date) {
        error.style.display = "flex";
    } else {
        error.style.display = "none";
        return true;
    }

    return false;
};

function checkTypeOfRoom() {
    const user_tor = document.getElementById("tor");
    const error = document.querySelector(".type-of-room-form .error");

    if(user_tor.value === "none") {
        error.style.display = "flex";
        return false;
    } else {
        error.style.display = "none"; 
        return true;  
    }
};
    
function validateAll() {
    const reservation_form = document.getElementById('reservation-form');

    var name_valid = nameValidate();
    var email_valid = emailValidate();
    var checkin_valid = checkInValidate();
    var checkout_valid = checkOutValidate();
    var tor_valid = checkTypeOfRoom();
    
    if(name_valid && email_valid && checkin_valid && checkout_valid && tor_valid) {
        alert("Your reservation has been successfully confirmed!");
        reservation_form.reset();
        return true;
    } else {
        return false;
    }
};