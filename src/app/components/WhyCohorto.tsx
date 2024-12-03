// src/app/components/WhyCohorto.tsx
"use client";

export default function WhyCohorto() {
  return (
    <section className="why-cohorto-section py-16 px-6 md:px-16 bg-cream">
      <div className="why-cohorto-content opacity-100">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-darkGray opacity-100">
          Why Cohorto?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-100">
          {/* Feature 1 */}
          <div className="text-center opacity-100">
            <div className="w-16 h-16 mx-auto mb-4 bg-darkGray rounded-full flex items-center justify-center text-white">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Student-Exclusive Platform
            </h3>
            <p className="text-gray-600">
              A space where students shine and clients save.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center opacity-100">
            <div className="w-16 h-16 mx-auto mb-4 bg-darkGray rounded-full flex items-center justify-center text-white">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Affordable Expertise
            </h3>
            <p className="text-gray-600">
              Top-tier work at rates that won't break the bank.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center opacity-100">
            <div className="w-16 h-16 mx-auto mb-4 bg-darkGray rounded-full flex items-center justify-center text-white">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Cohorts, Not Individuals
            </h3>
            <p className="text-gray-600">
              Teams of skilled students delivering end-to-end solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
