
var mobmenu = document.querySelector(".navfs");
var trigger = document.querySelector(".navbar i");
var flag = 0;

trigger.addEventListener("click", function(){
    if(flag == 0){
        gsap.to(".navfs", {
            opacity: 1,
            right: "10%",
            duration: 0.5,
            expo: "power3.inOut",
            onStart: function() {
                mobmenu.style.display = "flex"; // Set the display property to flex
            }
        });
        trigger.className = "ri-close-line";
        flag = 1;
    }  else {
        gsap.to(".navfs", {
            opacity: 0,
            right: "-100%",
            duration: 0.5,
            expo: "power3.inOut",
            onComplete: function() {
                mobmenu.style.display = "none";
            }
        });
        trigger.className = "ri-menu-line";
        flag = 0;
    }
});

// Scroll event listener to fix marquee at the top
window.addEventListener('scroll', function() {
    var marqueeWrapper = document.querySelector('.marquee-wrapper');
    if (window.scrollY > 0) {
        marqueeWrapper.classList.add('fixed');
    } else {
        marqueeWrapper.classList.remove('fixed');
    }
});

// Set the date we're counting down to
const countDownDate = new Date("2024-08-03T00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the count down date
    const distance = countDownDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the HTML elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown-container").innerHTML = "<h2>EXPIRED</h2>";
    }
}, 1000);





document.querySelectorAll(".faq .qn").forEach((question, index) => {
    question.addEventListener("click", function() {
        // Get the related answer and icon
        const answer = question.nextElementSibling;
        const icon = question.querySelector("i");

        // Check if the clicked answer is already visible
        const isAnswerVisible = answer.style.display === "block";

        // Hide all answers and reset icons
        document.querySelectorAll(".faq .ans").forEach(ans => {
            if (ans !== answer) {
                gsap.to(ans, { opacity: 0, height: 0, duration: 0.3, onComplete: () => ans.style.display = "none" });
            }
        });
        document.querySelectorAll(".faq .qn i").forEach(icon => {
            icon.classList.remove("ri-close-large-line");
            icon.classList.add("ri-arrow-down-s-line");
        });

        // Toggle display of the current answer and update icon
        if (isAnswerVisible) {
            gsap.to(answer, { opacity: 0, height: 0, duration: 0.3, onComplete: () => answer.style.display = "none" });
            icon.classList.remove("ri-close-large-line");
            icon.classList.add("ri-arrow-down-s-line");
        } else {
            answer.style.display = "block";
            gsap.fromTo(answer, { opacity: 0, height: 0 }, { opacity: 1, height: "auto", duration: 0.3 });
            icon.classList.remove("ri-arrow-down-s-line");
            icon.classList.add("ri-close-large-line");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all the h1 tags in the links section
    const links = document.querySelectorAll(".navfs .links h1");

    // Add click event listener to each h1 tag
    links.forEach(link => {
        link.addEventListener("click", function() {
            // Get the section ID to scroll to
            const sectionId = link.innerText.toLowerCase();

            // Scroll smoothly to the corresponding section
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });
});

var tl = gsap.timeline();

gsap.set(".home h1", {opacity: 0, y: -100});
gsap.set(".home .vid", {opacity: 0, y:500});

tl
.to(".home h1",{
    opacity: 1,
    y:0,
    duration: 1,
})

.to(".home .vid", {
    opacity:1,
    y: 0,
    duration: 1.2,
});

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.theme h1',
        start: 'top 80%',
        end: 'bottom center',
        scrub: 'true',
    }

})

.from(".theme h1",{
    opacity:0,
    duration:1
})
.from(".theme p",{
    opacity:0,
    duration:1
})

.from(".theme h3", {
    opacity: 0,
    duration: 1
});

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.box',
        start: 'top 80%',
        end: 'bottom center',
        scrub: 'true',
    }
})

.from(".theme .box ", {
    opacity: 0,
    duration: 2
});

var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.box2',
        start: 'top 80%',
        end: 'bottom center',
        scrub: 'true',
    }
})

.from(".theme .box2 ", {
    opacity: 0,
    duration: 2
});

var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.box3',
        start: 'top 80%',
        end: 'bottom center',
        scrub: 'true',
    }
})
.from(".theme .box3 ", {
    opacity: 0,
    duration: 2
});

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.highlights h1',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: '4',
        // markers: 'true'
    }
})

.from(".highlights h1", {
    opacity: 0,
    duration: 1
})

.from(".highlights p", {
    opacity: 0,
    duration: 0.5
})
.from(".slider", {
    opacity: 0,
    duration: 1.5
})





const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)