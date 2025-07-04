document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    // ✅ Register GSAP plugins
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    // ✅ ScrollSmoother initialization
    const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
    });

    // ✅ Element references
    const menuWrapper = document.querySelector("#mac_menu-wrapper");
    const body = document.querySelector("body");
    const macTrigger = document.querySelector("#mac");
    const macMenu = document.querySelector("#mac_menu");
    const macMenuLinks = gsap.utils.toArray("#mac_menu a");

});