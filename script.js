/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
};

/* Custom Cursor */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with a slight delay or just smooth CSS transitions (already in CSS)
    // We use animate for smoother trailing effect if we want, or just setting position
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: 'forwards' });
});


/* Scroll Reveal Animation using Intersection Observer */
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        } else {
            // Optional: remove class to re-animate when scrolling back up
            // entry.target.classList.remove('show-animate'); 
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.box, .skill-box, .heading, .content');
hiddenElements.forEach((el) => observer.observe(el));


/* Add some CSS for the show-animate class dynamically or check styles */
// Adding animation styles directly to elements via JS injection or ensuring they exist in CSS.
// I'll add a snippet here to inject the animation styles just to be safe and self-contained
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .box, .skill-box, .heading, .content {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    .show-animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(styleSheet);


/* Typing Animation */
const texts = ["Computer Science Student", "Aspiring Data Analyst", "Web Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait before starting next word
    } else {
        setTimeout(type, 100);
    }
}());


/* Project Filter */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectBoxes = document.querySelectorAll('.project-box');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectBoxes.forEach(box => {
            if (filterValue === 'all' || box.getAttribute('data-category') === filterValue) {
                box.style.display = 'block';
                // Add animation for reappearing
                box.classList.add('show-animate');
            } else {
                box.style.display = 'none';
                box.classList.remove('show-animate');
            }
        });
    });
});
