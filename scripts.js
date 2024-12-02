// scripts.js

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a single timeline for smoother animations
const tl = gsap.timeline({
  defaults: {
    ease: "power2.out",
    duration: 0.8,
  },
});

// Initial page load animation for hero section
tl.from(".hero-content", {
  opacity: 0,
  y: 20,
  duration: 1,
});

// Why Cohorto Section Animation with pre-set state
gsap.set(".why-cohorto-content > *", { opacity: 0, y: 20 });

ScrollTrigger.batch(".why-cohorto-content > *", {
  onEnter: (elements) => {
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    });
  },
  start: "top 80%",
  once: true,
});

// Meet the Cohorts Animation with pre-set state
gsap.set(".meet-the-cohorts-content .bg-lightCream", {
  opacity: 0,
  y: 30,
});

ScrollTrigger.batch(".meet-the-cohorts-content .bg-lightCream", {
  onEnter: (elements) => {
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 0.8,
      ease: "back.out(1.2)",
    });
  },
  start: "top 75%",
  once: true,
});

// Testimonials Animation
ScrollTrigger.batch(".testimonials-grid > div", {
  onEnter: (elements) => {
    gsap.from(elements, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    });
  },
  start: "top 85%",
  once: true,
});

// Enhanced Mobile Menu Animation
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
let menuTl = gsap.timeline({ paused: true });

// Set initial states
gsap.set(mobileMenu, { height: 0, opacity: 0 });

// Create the animation timeline
menuTl
  .to(mobileMenu, {
    height: "auto",
    duration: 0.3,
    ease: "power2.inOut",
  })
  .to(
    mobileMenu,
    {
      opacity: 1,
      duration: 0.2,
    },
    "-=0.1",
  );

let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    mobileMenu.classList.remove("hidden");
    menuTl.play();
  } else {
    menuTl.reverse().then(() => {
      if (!isMenuOpen) {
        mobileMenu.classList.add("hidden");
      }
    });
  }
  isMenuOpen = !isMenuOpen;
});
