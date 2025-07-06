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

    console.log("Found nav links:", all_NavLinks);

    if (!all_Dropmenu_Wrapper) {
        console.warn("⚠️ #all-dropmenu-wrapper not found!");
        return;
    }

    all_NavLinks.forEach(link => {
        const targetId = link.getAttribute("data-target");
        const drop_menuWrapper = document.getElementById(targetId);

        console.log(`➡️ Hover listener setup for:`, link);
        console.log(`📌 Target ID: ${targetId}, Found Wrapper:`, drop_menuWrapper);

        if (!drop_menuWrapper) {
            console.warn(`⚠️ Wrapper with ID "${targetId}" not found`);
            return;
        }

        const drop_menu_links = drop_menuWrapper.querySelectorAll("a");
        console.log(`📎 Links inside wrapper:`, drop_menu_links);

        link.addEventListener("mouseenter", () => {
            console.log(`🔥 Hovered on: ${link.textContent.trim()}`);

            // Hide all dropdowns
            document.querySelectorAll(".nav_drop-menu").forEach(m => {
                gsap.set(m, { autoAlpha: 0 });
            });

            // Show current dropdown
            gsap.set(drop_menuWrapper, { autoAlpha: 1 });

            // Animate global wrapper
            const tl = gsap.timeline();

            tl.to(all_Dropmenu_Wrapper, {
                top: "0rem",
                autoAlpha: 1,
                duration: 0.5,
                ease: "power2.out"
            });

            // Animate current dropdown wrapper (opacity, blur)
            tl.fromTo(drop_menuWrapper, {
                opacity: 0,
                backdropFilter: "blur(0px)"
            }, {
                opacity: 1,
                backdropFilter: "blur(15px)",
                duration: 0.5,
                ease: "power2.out"
            }, "<");

            // Animate menu links
            tl.from(drop_menu_links, {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.4,
                ease: "power2.out"
            }, "<+=0.1");
        });

        // Optional: mouseleave behavior
        // link.addEventListener("mouseleave", () => {
        //     gsap.to(all_Dropmenu_Wrapper, {
        //         top: "-100vh",
        //         duration: 0.5,
        //         ease: "power2.in"
        //     });
        // });
    });
});
