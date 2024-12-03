export default function Footer() {
  return (
    <footer className="bg-darkGray text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div>
          <h3 className="text-xl font-bold">Cohorto</h3>
          <p className="text-gray-400 text-sm">
            Building the future, one cohort at a time.
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
