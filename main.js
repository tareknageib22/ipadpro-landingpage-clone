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
    const wrapper = document.querySelector("#mac_menu-wrapper");
    const trigger = document.querySelector("#mac");
    const menu = document.querySelector("#mac_menu");
    const links = gsap.utils.toArray("#mac_menu a");
    console.log(links)

    if (!wrapper || !trigger || !menu) return;
     // drop menu entey animation
     const menu_entery_animation = gsap.timeline();

     menu_entery_animation.to(wrapper,{
        visibility:"visibile",
        opacity:1,
        duration:1,
        top:"0rem",
        ease:"power2.out"
     }).to(wrapper,{
        backdropFilter:"brightness(200%) blur(35)",
     })
     
     menu_entery_animation.play(),
     
     // drop menu exist animation
    const menu_exist_animation = gsap.timeline();





});