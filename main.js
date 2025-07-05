import nav_dropmenu_animation from './modules/nav'

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    });
    //Launch navbar drop menu animation 
    nav_dropmenu_animation()

});