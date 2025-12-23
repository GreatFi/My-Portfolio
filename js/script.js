document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.fromTo("nav ul",
        { opacity: 0, y: 50, scale: 0.95, x:-70 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", x:0}
    )
    .fromTo("nav",
        { opacity: 0, x: -50, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: "power3.out"}
    )

    .fromTo("nav ul li",
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.15, ease: "back.out(1.7)" }
    )


    .fromTo(".personalimg",
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.4"
    )


    .fromTo(".greeting",
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
    )
    .fromTo(".checkup",
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
    )
    .fromTo(".portdes",
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
    )

    .fromTo(".contactlink",
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
    )
    .fromTo(".work-header",{
        opacity:0, y:10, 
    },{opacity:1, y:0})

    .fromTo(".project-wrapper",{
        opacity:0, y:30, 
    },{opacity:1, y:0})
});

gsap.utils.toArray(".service-card").forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: i * 0.7, // Each card delays by index * 0.2s
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        }
    });
});

gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 30,                                                                                                                                                                                              
        duration: 1,
        delay: 0.13,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        }
    });
});

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all percent elements
const percentElements = document.querySelectorAll('.percent');

percentElements.forEach(el => {
    // Get the target number from the element
    const target = parseInt(el.textContent);
    
    // Create an object to animate
    let counter = { value: 0 };
    
    // GSAP animation
    gsap.to(counter, {
        value: target,
        duration: 2, // 2 seconds
        ease: "power1.out",
        onUpdate: function() {
            el.innerHTML = Math.floor(counter.value) + '<sup>%</sup>';
        },
        scrollTrigger: {
            trigger: '.skills', // The section that triggers the animation
            start: 'top 80%', // When top of section hits 80% of viewport
            once: true // Only animate once
        }
    });
});

const statsElements = document.querySelectorAll('.statsh2');

statsElements.forEach(el => {
    // Get the target number (remove the + sign)
    const target = parseInt(el.textContent);
    
    // Create an object to animate
    let counter = { value: 0 };
    
    // GSAP animation
    gsap.to(counter, {
        value: target,
        duration: 2,
        ease: "power1.out",
        onUpdate: function() {
            el.textContent = Math.floor(counter.value) + '+';
        },
        scrollTrigger: {
            trigger: '.achievements', // The achievements section
            start: 'top 80%',
            once: true
        }
    });
});

// Select all your nav links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Stop default jump
        
        // Get the href attribute (e.g., "#about", "#works")
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Smooth scroll to section
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: targetSection,
                offsetY: 0 // Adjust if you have a fixed header
            },
            ease: "power2.inOut"
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const card1 = document.querySelector("#project-card0")
    const card2 = document.querySelector("#project-card1")
    const next = document.querySelector("#next")
    const prev = document.querySelector("#prev")

    const projects = [card1, card2]
    let currentIndex = 0

    function slider(){

        prev.addEventListener('click', () => {

            projects[currentIndex].classList.remove('active')

            currentIndex--

            if (currentIndex < 0){
                currentIndex = projects.length - 1
            }

            projects[currentIndex].classList.add('active')

        })

        next.addEventListener('click', () => {
            projects[currentIndex].classList.remove('active')

            currentIndex++

            if (currentIndex >= projects.length) {
                currentIndex = 0
            }

            projects[currentIndex].classList.add('active')

        })

    }
    slider()
})