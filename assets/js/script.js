// JAVASCRIPT FILE FOR OMNIFOOD

document.addEventListener("DOMContentLoaded", function () {

    var header = document.querySelector(".header");
    var menubtn = document.querySelector(".icon-mob-nav[name='menu-outline']");
    var closebtn = document.querySelector(".icon-mob-nav[name='close-outline']");
    const homeSection = document.querySelector('.section-home');

    // Sticky header Logic
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                header.classList.remove('sticky');
            } else {
                header.classList.add('sticky');
            }
        },
        {
            root: null,
            threshold: 0,
        }
    );
    observer.observe(homeSection);

    // Add nav on screen on clicking on Menui button and and shows Close button and vive-versa.
    const btnMobileNav = document.querySelector(".btn-mobile-nav");
    // Toggle menu visibility
    btnMobileNav.addEventListener("click", function () {
        const menuIsOpen = header.classList.toggle("nav-open");

        if (menuIsOpen) {
            menubtn.style.display = "none";
            closebtn.style.display = "block";
        } else {
            menubtn.style.display = "block";
            closebtn.style.display = "none";
        }
    });

    // Click on link navbar in screens hide and changes thee displays of Menu and CLose button
    const list_items = document.querySelectorAll(".main-nav-item");

    list_items.forEach((item) => {
        item.addEventListener("click", function () {
            const menuclose = header.classList.toggle("nav-open");
            if (menuclose) {
                menubtn.style.display = "none";
                closebtn.style.display = "block";
            } else {
                menubtn.style.display = "block";
                closebtn.style.display = "none";
            }
        });
    });

});
