function animateNav() {
  let nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "21vh",
      duration: 0.3,
    })
      .to(
        "#nav-part-2 h5",
        {
          display: "block",
          duration: 0.2,
        },
        "-=0.2"
      ) // Overlap the animation slightly with the previous one
      .to("#nav-part-2 h5 span", {
        y: 0,
        stagger: {
          amount: 0.4,
        },
      });
  });
  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.inOut" },
    });
    tl.to("#nav-part-2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.6,
      },
    })
      .to(
        "#nav-part-2 h5",
        {
          display: "none",
          duration: 0.2,
        },
        "-=0.3"
      ) // Overlap the animation slightly with the previous one
      .to("#nav-bottom", {
        height: 0,
        duration: 0.3,
      });
  });
}

function setupRightElementsAnimation() {
  let rightelems = document.querySelectorAll(".right-elem");
  rightelems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {

      gsap.to(elem.childNodes[3], {
          x: dets.x - elem.getBoundingClientRect().x - 50,
          y: dets.y - elem.getBoundingClientRect().y - 150
      })
  })
})
}

function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center")
  var video = document.querySelector("#page3 video")

  page3Center.addEventListener("click", function () {
      video.play()
      gsap.to(video, {
          transform: "scaleX(1) scaleY(1)",
          opacity: 1,
          borderRadius: 0
      })
  })
  video.addEventListener("click", function () {
      video.pause()
      gsap.to(video, {
          transform: "scaleX(0.7) scaleY(0)",
          opacity: 0,
          borderRadius: "30px"
      })
  })}
animateNav();
setupRightElementsAnimation();
page3VideoAnimation()