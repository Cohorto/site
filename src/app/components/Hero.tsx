// src/app/components/Hero.tsx

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-darkGray text-cream pt-16">
      <div className="text-center px-4 hero-content w-full max-w-6xl mx-auto opacity-100">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-cream opacity-100">
          Your Dream Team, <span className="opacity-100">Redefined</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-cream opacity-100">
          Affordable, student-driven freelancing teams delivering exceptional
          results.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 opacity-100">
          <a
            href="#"
            className="px-6 py-3 bg-cream hover:bg-gray-200 rounded-lg text-darkGray text-lg font-medium transition-all"
          >
            Hire a Cohort Now
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-lg font-medium transition-all"
          >
            Join as a Student
          </a>
        </div>
      </div>
    </section>
  );
}
