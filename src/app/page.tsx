// src/app/page.tsx
"use client";

import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyCohorto from "./components/WhyCohorto";
import MeetCohorts from "./components/MeetCohorts";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { initializeGSAPAnimations } from "./lib/gsap";

export default function Home() {
  useLayoutEffect(() => {
    const ctx = initializeGSAPAnimations();
    return () => ctx?.revert();
  }, []);

  return (
    <main className="opacity-100">
      <Navbar />
      <Hero />
      <WhyCohorto />
      <MeetCohorts />
      <Testimonials />
      <Footer />
    </main>
  );
}
