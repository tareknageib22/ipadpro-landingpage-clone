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

    // ✅ Initial hidden state
    gsap.set(menuWrapper, {
        visibility: "hidden",
        opacity: 0,
        y: 0,
    });

    // ✅ Menu Enter Timeline

    // ✅ Menu Enter Timeline
    const enter = gsap.timeline({ paused: true });
    enter
        .to(menuWrapper, {
            top: "0rem",
            opacity: 1,
            visibility: "visible",
            ease: "power3.out",
            duration: 1,
        })
        .from(macMenu, {
            y: -100,
            ease: "power3.out",
            duration: 1,
        }, "<")
        .from(macMenuLinks, {
            y: -10,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
            ease: "power3.inOut",
        }, "-=0.3")
        .to(menuWrapper, {
            css: {
                backdropFilter: "blur(10px)",
                filter: "brightness(1.5)",
            },
            duration: 1,
        }, "-=1");

    // ✅ Menu Exit Timeline
    const exit = gsap.timeline({ paused: true });
    exit
        .to(macMenuLinks, {
            opacity: 0,
            stagger: {
                each: 0.03,
                from: "end"
            },
            duration: 0.3,
        })
        .to(macMenu, {
            height: 0,
            ease: "power2.inOut",
            duration: 0.5,
        }, "-=0.2")
        .to(menuWrapper, {
            opacity: 0,
            ease: "power3.inOut",
            duration: 0.75,
        })
        .set(menuWrapper, {
            visibility: "hidden",
            y: 0,
            css: {
                backdropFilter: "none",
                filter: "brightness(1)",
            },
            clearProps: "all",
        });

    // ✅ Hover + interaction
    let menuOpen = false;

    function showMenu() {
        if (menuOpen) return;
        menuOpen = true;
        exit.pause().progress(0);
        enter.restart();
    }

    function hideMenu() {
        if (!menuOpen) return;
        menuOpen = false;
        enter.pause().progress(0);
        exit.restart();
    }

    // ✅ Event Listeners
    macTrigger.addEventListener("mouseenter", showMenu);
    macMenu.addEventListener("mouseleave", hideMenu);
    body.addEventListener("mouseleave", hideMenu); // Optional
});