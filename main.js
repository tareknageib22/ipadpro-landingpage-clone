document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });

  const navComponentWrapper = document.getElementById("all-dropmenu-wrapper");
  const navLinks = gsap.utils.toArray("nav a[data-target]");

  navLinks.forEach(link => {
    const targetId = link.getAttribute("data-target");
    const menuWrapper = document.getElementById(targetId);
    if (!menuWrapper || !navComponentWrapper) return;

    // Get the inner links
    const innerLinks = menuWrapper.querySelectorAll("a");

    console.log("menu wrapper",menuWrapper)
    console.log("nav compoenet wrapper",navComponentWrapper)
    console.log("navLinks",navLinks)
    console.log("targetiD",targetId)
// paste it here 
  });
});
