// src/app/components/Testimonials.tsx
"use client";

export default function Testimonials() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6 opacity-100">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-darkGray opacity-100">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 testimonials-grid opacity-100">
          <div className="p-6 bg-white rounded-lg shadow-lg opacity-100">
            <p className="text-lg mb-4 text-darkGray">
              "Cohorto gave me my first real-world project and a chance to work
              with amazing clients!"
            </p>
            <h4 className="text-xl font-semibold text-darkGray">Sarah M.</h4>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg opacity-100">
            <p className="text-lg mb-4 text-darkGray">
              "Hiring a student cohort was the best decision we made—quality
              work at an unbeatable price."
            </p>
            <h4 className="text-xl font-semibold text-darkGray">David L.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
