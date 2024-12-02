// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
  },
});

// Why Cohorto Section Animation
gsap.from(".why-cohorto-content", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".why-cohorto-section",
    start: "top 80%",
  },
});

// Meet the Cohorts Animation
gsap.from(".meet-the-cohorts-content .bg-light-cream", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".meet-the-cohorts-content",
    start: "top 80%",
  },
});

// Testimonials Animations
gsap.utils.toArray(".testimonials-grid > div").forEach((testimonial, i) => {
  gsap.from(testimonial, {
    x: i % 2 === 0 ? -100 : 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: testimonial,
      start: "top 85%",
    },
  });
});

// Toggle Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    gsap.to(mobileMenu, {
      height: "auto",
      duration: 0.5,
      ease: "power2.inOut",
    });
    mobileMenu.classList.remove("hidden");
  } else {
    gsap.to(mobileMenu, {
      height: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        mobileMenu.classList.add("hidden");
      },
    });
  }
});
