const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenBtn = document.querySelector("#menu-open-button");
const menuCloseBtn = document.querySelector("#menu-close-button");

menuOpenBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseBtn.addEventListener("click", () => menuOpenBtn.click());

navLinks.forEach(link =>{
    link.addEventListener("click", () => menuOpenBtn.click());
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination:{
       el: '.swiper-pagination',
       clickable: true,
       dynamicBullets: true,
    },

    navigation:{
       nextEl:'.swiper-button-next',
       prevEl:'.swiper-button-prev',
    },

    breakpoints:{
       0:{
           slidesPerView: 1
       },
       768:{
           slidesPerView: 2
       },
       1024:{
           slidesPerView: 3
       },
    }
});