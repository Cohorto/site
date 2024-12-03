// src/app/components/MeetCohorts.tsx

export default function MeetCohorts() {
  return (
    <section className="py-16 bg-darkGray px-6 md:px-16">
      <div className="max-w-6xl mx-auto opacity-100">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cream opacity-100">
          Meet the Cohorts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 meet-the-cohorts-content opacity-100">
          {/* Card 1 */}
          <div className="bg-cream text-darkGray p-6 rounded-lg shadow-lg flex flex-col items-center opacity-100">
            <h3 className="text-2xl font-bold mb-2 text-center">
              Software Development Cohort
            </h3>
            <p className="text-lg text-center">
              A complete SWE team, to turn your ideas into reality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-cream text-darkGray p-6 rounded-lg shadow-lg flex flex-col items-center opacity-100">
            <h3 className="text-2xl font-bold mb-2">Design Cohort</h3>
            <p className="text-lg text-center">
              Creative minds crafting compelling visuals and user experiences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-cream text-darkGray p-6 rounded-lg shadow-lg flex flex-col items-center opacity-100">
            <h3 className="text-2xl font-bold mb-2">Marketing Cohort</h3>
            <p className="text-lg text-center">
              Strategies that drive results and elevate your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
