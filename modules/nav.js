export function nav_dropmenu_animation() {
    const wrapper = document.querySelector("#mac_menu-wrapper");
    const trigger = document.querySelector("#mac");
    const menu = document.querySelector("#mac_menu");
    const links = gsap.utils.toArray("#mac_menu a");

    if (!wrapper || !trigger || !menu) return;

    gsap.set(wrapper, { visibility: "hidden", opacity: 0 });
    gsap.set(menu, { scaleY: 0, transformOrigin: "top" });

    const enter = gsap.timeline({ paused: true })
        .to(wrapper, { visibility: "visible", opacity: 1, duration: 0.5 })
        .to(menu, { scaleY: 1, duration: 0.3 }, "<")
        .from(links, { y: -10, opacity: 0, stagger: 0.05, duration: 0.3 }, "<")
        .to(wrapper, { backdropFilter: "blur(10px)", filter: "brightness(1.5)", duration: 0.3 }, "<");

    const exit = gsap.timeline({ paused: true })
        .to(links, { opacity: 0, stagger: 0.03, duration: 0.2 })
        .to(menu, { scaleY: 0, duration: 0.3 }, "-=0.1")
        .to(wrapper, { opacity: 0, duration: 0.3 })
        .set(wrapper, { visibility: "hidden", filter: "none", backdropFilter: "none" });

    let open = false;

    trigger.addEventListener("mouseenter", () => {
        if (open) return;
        open = true;
        exit.pause(0);
        enter.restart();
    });

    menu.addEventListener("mouseleave", () => {
        if (!open) return;
        open = false;
        enter.pause(0);
        exit.restart();
    });
}
