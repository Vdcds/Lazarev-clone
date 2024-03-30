function animateNav() {
  let nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "21vh",
      duration: 0.3,
    })
    .to("#nav-part-2 h5", {
      display: "block",
      duration: 0.2,
    }, "-=0.2") // Overlap the animation slightly with the previous one
    .to("#nav-part-2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.4,
      },
    });
  });
  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline({defaults: {duration: 0.5, ease: "power2.inOut"}});
    tl.to("#nav-part-2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.6,
      },
    })
    .to("#nav-part-2 h5", {
      display: "none",
      duration: 0.2,
    }, "-=0.3") // Overlap the animation slightly with the previous one
    .to("#nav-bottom", {
      height: 0,
      duration: 0.3,
    });
  });
}

// animateNav();
