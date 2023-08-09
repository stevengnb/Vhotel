function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

document.addEventListener("DOMContentLoaded", () => {
    const small_navbar = document.querySelector('.small-nav input');
    const right_nav = document.querySelector('.right-nav');
    
    small_navbar.addEventListener("click", () => {
        right_nav.classList.toggle('nav-in');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const pic_card1 = document.querySelectorAll('#in-1 .pic');
    const pic_card2 = document.querySelectorAll('#in-2 .pic');
    const pic_card3 = document.querySelectorAll('#in-3 .pic');

    let card1_active = 0;
    let card2_active = 0;
    let card3_active = 0;
    
    async function showRoomPic() {
        pic_card1[card1_active].style.opacity = '0%';
        pic_card2[card2_active].style.opacity = '0%';
        pic_card3[card3_active].style.opacity = '0%';
    
        await sleep(600);
    
        pic_card1[card1_active].style.display = 'none';
        pic_card2[card2_active].style.display = 'none';
        pic_card3[card3_active].style.display = 'none';
        
        if(card1_active >= 2) {
            card1_active = 0;
        } else {
            card1_active++;
        }

        if(card2_active >= 1) {
            card2_active = 0;
        } else {
            card2_active++;
        }
        
        if(card3_active >= 1) {
            card3_active = 0;
        } else {
            card3_active++;
        }
        
        pic_card1[card1_active].style.display = 'flex';
        pic_card2[card2_active].style.display = 'flex';
        pic_card3[card3_active].style.display = 'flex';
    
        await sleep(10);
        pic_card1[card1_active].style.opacity = '100%';
        pic_card2[card2_active].style.opacity = '100%';
        pic_card3[card3_active].style.opacity = '100%';
    };

    showRoomPic();
    setInterval(showRoomPic, 5000);
});

function toSweetSuite() {
    window.location.href = "../rooms-page/sweet-suit.html";
};

function toDoubleTrouble() {
    window.location.href = "../rooms-page/double-trouble.html";
};

function toLuxuriousSuite() {
    window.location.href = "../rooms-page/luxurious-suit.html";
};

function toReservation() {
    window.location.href = "../reservation-page/reservation.html";
};