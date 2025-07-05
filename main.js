document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    });

    const navLinks = gsap.utils.toArray("nav a[data-target]");
    navLinks.forEach(link => {
        const targetId = link.getAttribute("data-target");
        const menuWrapper = document.getElementById(targetId);
console.log(link, targetId, menuWrapper);

        if (!menuWrapper) return;

        // Store the animation in a timeline
        const menuEntryAnimation = gsap.timeline({ paused: true });

        menuEntryAnimation
            .to(menuWrapper, {
                visibility: "visible",
                opacity: 1,
                top: "0rem",
                duration: 1,
                ease: "power2.out"
            })
            .to(menuWrapper, {
                backdropFilter: 'blur(15px)',
                duration: 1,
                ease: "power3.out"
            });

        link.addEventListener("mouseenter", () => {
            menuEntryAnimation.restart();
        });

        link.addEventListener("mouseleave", () => {
            menuEntryAnimation.reverse();
        });
    });

});
