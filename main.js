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
    const all_NavLinks = gsap.utils.toArray("a[data-target]");

    if (!all_Dropmenu_Wrapper) {
        console.warn("⚠️ #all-dropmenu-wrapper not found!");
        return;
    }

    console.log("✅ Found nav links:", all_NavLinks);

    all_NavLinks.forEach(link => {
        const targetId = link.getAttribute("data-target");
        const drop_menuWrapper = document.getElementById(targetId);

        if (!drop_menuWrapper) {
            console.warn(`⚠️ Menu wrapper with ID "${targetId}" not found.`);
            return;
        }

        const drop_menu_links = drop_menuWrapper.querySelectorAll("a");
        console.log(`🔗 Setup complete for: ${link.textContent.trim()} → Target: ${targetId}`);

        link.addEventListener("mouseenter", () => {
            console.log(`🔥 HOVERED: ${link.textContent.trim()}`);

            // Animate the global wrapper
            const tl = gsap.timeline();
            tl.set(all_Dropmenu_Wrapper, { visibility:"visible" }); // <== Make sure it's visible

            tl.to(all_Dropmenu_Wrapper, {
                top: "0rem",
                duration: 0.4,
                ease: "power2.out"
            });

            tl.to(all_Dropmenu_Wrapper, {
                backdropFilter: "blur(15px)",
                duration: 0.4,
                ease: "power2.out"
            }, "<");

               tl.from(drop_menuWrapper, {
                opacity:1,
                duration: 0.4,
                ease: "power2.out"
            }, "<");

            tl.from(drop_menu_links, {
                opacity: 0,
                stagger: 0.1,
                duration: 0.3,
                ease: "power2.out"
            }, "<+=0.1");
        });
    });
});
