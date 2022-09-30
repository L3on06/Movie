const menu = document.querySelector(".menu")
const navMenu = document.querySelector(".nav-menu")


menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll("nac-links").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active")
    navMenu.classList.remove("active")
}))

// var swiper = new Swiper(".mySwiper", {

//     slidesPerView: 5,
//     spaceBetween: 20,
//     loop: true,
//     grabCursor: true,
//     loopFillGroupWithBlank: true,
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev"
//     }
// });

const pagination_div = document.querySelector('.pagination')
const articles = document.querySelectorAll('.card')
const per_page = 8
const total = articles.length
const nr_links = Math.ceil(total / per_page)
let active_page = 1
let offset = 1

updateArticles(active_page)
for (let i = 1; i <= nr_links; i++) {
    const link = document.createElement('a')
    link.href = `#`
    link.text = i
    pagination_div.appendChild(link)


    link.addEventListener('click', e => {
        // e.preventDefault()
        active_page = parseInt(e.target.innerText)
        updateArticles(active_page)
    })
}

function updateArticles() {
    offset = (active_page - 1) * per_page + 1

    let visible_articles = []
    for (let i = offset; i <= (per_page * active_page); i++) {
        visible_articles.push(i - 1)
    }

    articles.forEach((article, index) => {
        if (visible_articles.includes(index)) {
            article.style.display = 'block'
        } else {
            article.style.display = 'none'
        }
    })
}

function search() {
    let filter = document.querySelector('.search').value.toUpperCase();
    let item = document.querySelectorAll('.card');
    let l = document.getElementsByClassName('title');
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByClassName('title')[0];

        let value = a.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
            pagination_div.style.display =""
        }
        else {
            item[i].style.display = "none";
            pagination_div.style.display ="none"

        }
    }
}