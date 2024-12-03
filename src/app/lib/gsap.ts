// src/app/lib/gsap.ts
"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const initializeGSAPAnimations = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".hero-content", { opacity: 1 });
      gsap.set(".why-cohorto-content > div", { opacity: 1 });
      gsap.set(".meet-the-cohorts-content > div", { opacity: 1 });
      gsap.set(".testimonials-grid > div", { opacity: 1 });

      // Hero Animation
      gsap.from(".hero-content", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        clearProps: "all",
      });

      // Why Cohorto Section
      gsap.from(".why-cohorto-content > div", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".why-cohorto-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        clearProps: "all",
      });

      // Meet the Cohorts
      gsap.from(".meet-the-cohorts-content > div", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".meet-the-cohorts-content",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        clearProps: "all",
      });

      // Testimonials
      gsap.from(".testimonials-grid > div", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        clearProps: "all",
      });
    });

    return ctx;
  }
};
