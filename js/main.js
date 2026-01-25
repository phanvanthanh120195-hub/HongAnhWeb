var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // freeMode: true, // Removed to allow snapping one by one
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// Floating Icons Visibility Logic
var whoWeAreSection = document.querySelector('.who');
var floatingContacts = document.querySelector('.floating-contacts');

if (whoWeAreSection && floatingContacts) {
    window.addEventListener('scroll', function () {
        var sectionTop = whoWeAreSection.offsetTop;
        var scrollPos = window.scrollY;

        // Show icons when scrolled past the top of "Who we are" section
        if (scrollPos >= sectionTop - window.innerHeight / 2) {
            floatingContacts.classList.add('show');
        } else {
            floatingContacts.classList.remove('show');
        }
    });
}

// Scroll to Top functionality
document.getElementById('scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});