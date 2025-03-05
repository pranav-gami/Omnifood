// JAVASCRIPT FILE FOR OMNIFOOD.

document.addEventListener("DOMContentLoaded", function () {

    var header = document.querySelector(".header");
    var menubtn = document.querySelector(".icon-mob-nav[name='menu-outline']");
    var closebtn = document.querySelector(".icon-mob-nav[name='close-outline']");
    const homeSection = document.querySelector('.section-home');

    // Sticky header Logic
    const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            header.classList.remove('sticky');
        } else {
            header.classList.add('sticky');
        }
    },
        {
            root: null,
            rootMargin: "-70px",
            threshold: 0,
        }
    );
    observer.observe(homeSection);

    // Add nav on screen on clicking on Menui button and and shows Close button and vive-versa.
    // Toggle menu visibility
    const btnMobileNav = document.querySelector(".btn-mobile-nav");
    btnMobileNav.addEventListener("click", function () {
        const menuIsOpen = header.classList.toggle("nav-open");
        menubtn.style.display = menuIsOpen ? "none" : "block";
        closebtn.style.display = menuIsOpen ? "block" : "none";
    });


    const list_items = document.querySelectorAll(".main-nav-item");
    list_items.forEach((item) => {
        item.addEventListener("click", function () {
            header.classList.remove("nav-open");
            menubtn.style.display = "block";
            closebtn.style.display = "none";
        });
    });
    //Scrolling
    document.querySelector(".main-nav-list").addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target.classList.contains("main-nav-item")) {
            let Id = e.target.getAttribute("href");
            let sec = document.querySelector(Id);

            if (sec) {
                let headerHeight = header.offsetHeight;
                let offsetAdjustment = header.classList.contains("sticky") ? (6 * 10) : 0; // 6rem = 6 * 16px

                let secPosition = sec.getBoundingClientRect().top + window.scrollY - headerHeight + offsetAdjustment;

                window.scrollTo({
                    top: secPosition,
                    behavior: "smooth",
                });
            }
        }
    })

});
