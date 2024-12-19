// JavaScript for Interactive Elements

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll(".section");
    const observerOptions = {
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`header nav ul li a[href="#${entry.target.id}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLink.classList.add("active");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add animations on scroll
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    animatedElements.forEach(element => animateObserver.observe(element));

    // Floating button to scroll to top
    const toTopButton = document.createElement('button');
    toTopButton.textContent = '⬆';
    toTopButton.className = 'to-top-button';
    document.body.appendChild(toTopButton);

    toTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    });

    // Optional: Add dynamic particle effects (if using a library like particles.js)
    // Example: particlesJS.load('dynamic-background', 'particles-config.json', function() {
    //     console.log('Particles.js loaded!');
    // });
});
