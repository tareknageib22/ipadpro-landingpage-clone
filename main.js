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

        // Get the inner links
        const drop_menu_link = drop_menuWrapper.querySelectorAll("a");

        console.log(drop_menu_link.textContent())


        
    });
});
