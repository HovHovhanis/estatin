const allNavItems = document.querySelectorAll('.nav-item');

allNavItems.forEach((items) => {
    items.addEventListener('click', function(item) {
        item.classList.toggle('avtive')
    })
});


let swiper = new Swiper(".feturedSlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigator: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
});

