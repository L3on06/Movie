const menu = document.querySelector(".menu")
const navMenu = document.querySelector(".nav-menu")


menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    navMenu.classList.toggle("active")
})
        
var swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            loopFillGroupWithBlank: true,
              autoplay: {
                    delay:3500,
                    disableOnInteraction: false,
        },
    navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });