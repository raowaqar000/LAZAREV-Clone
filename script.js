const navElement = document.querySelectorAll(".nav-elem");
const logo = document.querySelector("#logo");
const navBtn = document.querySelector("#nav-btn");
const pageData = document.querySelectorAll("#hero-capsules")
const main = document.querySelector("#main")


const tl = gsap.timeline();

tl.from(logo, {
  y: -60,
  duration: 0.18,
  opacity: 0,
  ease: "power1.out",
});

navElement.forEach((elem, index) => {
  tl.from(elem, {
    y: -60,
    duration: 0.18,
    stagger: 0.12,
    opacity: 0,
    ease: "power1.out",
  });
});
tl.from(navBtn, {
  y: -60,
  duration: 0.18,
  opacity: 0,
  ease: "power1.out",
  delay: 0.01
});

tl.from("#hero-heading1", {
    y: -60,
    duration: 0.18,
    opacity: 0,
    ease: "power1.out"
})
tl.from("#hero-heading2", {
    y: -60,
    duration: 0.18,
    opacity: 0,
    ease: "power1.out"
})
tl.from("#hero-para", {
    x: -60,
    duration: 0.18,
    opacity: 0,
    ease: "power1.out"
})

pageData.forEach((elem) => {
    tl.from(elem, {
    y: -60,
    duration: 0.18,
    opacity: 0,
    ease: "power1.out",
    delay:0.01,
    stagger:0.18
})
})

main.addEventListener("mousemove", (e) => {    
    gsap.to(cursor, {
    y: e.clientY-14,
    x: e.clientX-12,
    opacity:1,
    scale:2,
    ease: "back.out",
    duration: .3,
})
})
