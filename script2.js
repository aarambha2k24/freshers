var tl = gsap.timeline();

gsap.set(".overlay .text h1", {opacity: 0})
gsap.set(".overlay .text h2", {opacity: 0})
gsap.set(".overlay .cont h1", {opacity: 0})
gsap.set(".overlay .cont input", {opacity: 0})
gsap.set(".overlay .cont button", {opacity: 0})

tl
.to(".overlay .text h2", {
    opacity: 1,
    duration: 1,
    delay: 0.5,
})
.to(".overlay .text h1", {
    opacity: 1,
    duration: 1
})
.to(".overlay .text", {
    top: "30%",
    duration: 1.5,
    ease: Expo.easeInOut
})
.to(".overlay .cont h1", {
    opacity: 1,
    duration: 1
})
.to(".overlay .cont input", {
    opacity: 1,
    duration: 0.5
})
.to(".overlay .cont button", {
    opacity: 1,
    duration: 0.5
})

// Adding password validation and redirection
document.getElementById("submitButton").addEventListener("click", function() {
    var password = document.getElementById("passwordInput").value.toLowerCase();
    if (password === "coder") {
        window.location.href = "main.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
});

