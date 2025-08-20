// Enhanced navigation animation with improved performance
function animateNav() {
  let nav = document.querySelector("nav");
  let tl = gsap.timeline({ paused: true });

  // Pre-setup timeline for better performance
  tl.to("#nav-bottom", {
    height: "21vh",
    duration: 0.3,
    ease: "power2.out"
  })
  .to("#nav-part-2 h5", {
    display: "block",
    duration: 0.1,
  }, "-=0.2")
  .to("#nav-part-2 h5 span", {
    y: 0,
    stagger: {
      amount: 0.4,
    },
    ease: "power2.out"
  });

  nav.addEventListener("mouseenter", () => {
    tl.restart();
  });

  nav.addEventListener("mouseleave", () => {
    let tlReverse = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.inOut" },
    });
    tlReverse.to("#nav-part-2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.3,
      },
    })
    .to("#nav-part-2 h5", {
      display: "none",
      duration: 0.1,
    }, "-=0.2")
    .to("#nav-bottom", {
      height: 0,
      duration: 0.3,
    });
  });
}

// Enhanced right elements animation with better mouse tracking
function setupRightElementsAnimation() {
  let rightelems = document.querySelectorAll(".right-elem");
  rightelems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 150,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
}

// Enhanced video animation with better controls
function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
      duration: 0.5,
      ease: "power2.in"
    });
  });
}

// Smooth scrolling animation
function smoothScrolling() {
  gsap.registerPlugin(ScrollTrigger);

  // Page 1 animations
  gsap.timeline({
    scrollTrigger: {
      trigger: "#page1",
      start: "top center",
      end: "bottom center",
      scrub: 1
    }
  })
  .to("#page1 h1", {
    scale: 0.95,
    opacity: 0.8
  });

  // Page 2 animations
  gsap.from("#page-2-left p", {
    scrollTrigger: {
      trigger: "#page2",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".right-elem", {
    scrollTrigger: {
      trigger: "#page2",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Page 4 animations
  gsap.from("#page-4-left h2", {
    scrollTrigger: {
      trigger: "#page4",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from("#page-4-right p, #page-4-right h5", {
    scrollTrigger: {
      trigger: "#page4",
      start: "top 70%",
      toggleActions: "play none none reverse"
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
  });

  // Page 5 stats animation
  gsap.from("#page5 .card", {
    scrollTrigger: {
      trigger: "#page5",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });
}

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');

  counters.forEach(counter => {
    ScrollTrigger.create({
      trigger: counter,
      start: "top 80%",
      onEnter: () => {
        const target = counter.textContent;
        const number = parseInt(target.replace(/[^\d]/g, ''));
        const suffix = target.replace(/[\d]/g, '');

        gsap.from(counter, {
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          stagger: 1,
          onUpdate: function() {
            counter.textContent = Math.ceil(this.targets()[0].textContent) + suffix;
          }
        });
      }
    });
  });
}

// Mobile menu toggle (for future mobile optimization)
function setupMobileMenu() {
  // This can be expanded for mobile hamburger menu
  const mobileBreakpoint = 768;

  function handleResize() {
    if (window.innerWidth <= mobileBreakpoint) {
      // Mobile specific adjustments
      document.querySelector('#nav-part-2').style.display = 'none';
    } else {
      document.querySelector('#nav-part-2').style.display = 'flex';
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize(); // Initial call
}

// Initialize all functions
function init() {
  animateNav();
  setupRightElementsAnimation();
  page3VideoAnimation();
  smoothScrolling();
  animateCounters();
  setupMobileMenu();
}

// Wait for GSAP and ScrollTrigger to load, then initialize
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    init();
  } else {
    // Fallback if GSAP hasn't loaded yet
    setTimeout(init, 100);
  }
});