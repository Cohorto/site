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

// Scroll-triggered animations using best practices
ScrollTrigger.batch(".why-cohorto-content > *", {
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
  once: true, // Only animate once
});

ScrollTrigger.batch(".meet-the-cohorts-content .bg-lightCream", {
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

// Toggle Mobile Menu (unchanged)
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden", "opacity-0", "pointer-events-none");
    mobileMenu.classList.add("opacity-100", "pointer-events-auto");
  } else {
    mobileMenu.classList.remove("opacity-100", "pointer-events-auto");
    mobileMenu.classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 500);
  }
});
