console.log("Hello from vid");

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');

//Scroll
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration:1000,
    triggerElement: intro,
    triggerHook:0
})
.addIndicators()
.addTo(controller);

