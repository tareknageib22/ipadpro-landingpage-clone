document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    });

    const wrapper = document.querySelector("#mac_menu-wrapper");
    const trigger = document.querySelector("#mac");
    const menu = document.querySelector("#mac_menu");
    const links = gsap.utils.toArray("#mac_menu a");
    console.log(links);

    if (!wrapper || !trigger || !menu) return;

    function enter() {
        const menu_entery_animation = gsap.timeline();
        menu_entery_animation.to(wrapper, {
            visibility: "visible",  // ✅ fixed typo
            opacity: 1,
            top: "0rem",
            duration: 1,
            ease: "power2.out"
        }).to(wrapper, {
            backdropFilter: 'blur(15px)',
            duration: 1,
            ease: "power3.out"
        });
    }


    trigger.addEventListener("mouseenter", () => {
        enter.restart();
    });

    // const menu_exist_animation = gsap.timeline();

});
