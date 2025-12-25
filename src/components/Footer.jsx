function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        {/* Left */}
        <div>
          <p className="text-sm font-medium text-gray-900">
            Suvayu Biswas
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Computer Science • AI/ML • Full-Stack Development
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
          <a
            href="https://github.com/SuvayuBiswas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/suvayu-biswas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:suvayu23@gmail.com"
            className="hover:text-gray-900 transition"
          >
            Email
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            Resume
          </a>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-400 pb-6">
        © {new Date().getFullYear()} Suvayu Biswas. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;
