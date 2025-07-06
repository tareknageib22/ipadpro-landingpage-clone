document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    });

    const all_Dropmenu_Wrapper = document.getElementById("all-dropmenu-wrapper");
    const all_NavLinks = gsap.utils.toArray("nav a[data-target]");

    all_NavLinks.forEach(link => {
        const targetId = link.getAttribute("data-target");
        const drop_menuWrapper = document.getElementById(targetId);
        if (!drop_menuWrapper || !all_Dropmenu_Wrapper) return;

        const drop_menu_links = drop_menuWrapper.querySelectorAll("a");

        //start hover animation. 
        link.addEventListener("mouseenter", () => {
            // Hide all other menu wrappers
            document.querySelectorAll(".nav_drop-menu").forEach(m => {
                m.style.display = "none";
            });

            // Show only the one we need
            drop_menuWrapper.style.display = "block";

            // Animation timeline
            const tl = gsap.timeline();

            // Step 1: Move the whole nav menu component (global wrapper)
            tl.to(all_Dropmenu_Wrapper, {
                top: "0rem",
                duration: 0.6,
                ease: "power2.out"
            }).from(drop_menuWrapper, {
                opacity: 1,
                backdropFilter: "blur(15px)",
                duration: 0.5,
                ease: "power2.out"
            }, "<").from(drop_menu_links, {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.4,
                ease: "power2.out"
            }, "<+=0.2"); // start 0.2s after wrapper starts
        });

        link.addEventListener("mouseleave", () => {
            // Optional reverse or hide
        });
    });





});
});
