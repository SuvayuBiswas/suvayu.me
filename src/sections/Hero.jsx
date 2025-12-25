import useReveal from "../hooks/useReveal";

function Hero() {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      id="home"
      className="reveal relative max-w-6xl mx-auto px-6 pt-24 pb-28"
    >
      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-24 -left-40 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="relative">
        <div className="inline-block">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900">
            Suvayu Biswas
          </h1>

          {/* Underline */}
          <span
            className="
              block mt-2 h-0.5 w-16
              bg-emerald-500
              origin-left
              scale-x-0
              underline-reveal
            "
          />
        </div>

        <p className="mt-5 text-lg text-gray-700 max-w-2xl">
          B.Tech Computer Science Student | AI/ML & Full-Stack Web Development
        </p>

        <p className="mt-6 max-w-2xl text-gray-600 leading-relaxed">
          I build intelligent systems and scalable full-stack web applications,
          with hands-on experience in AI/ML, computer vision, and backend-driven
          web projects.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="
              px-6 py-3 text-sm font-medium text-white bg-black rounded-md
              transition-all duration-200
              hover:scale-[1.04]
              active:scale-[0.97]
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3 text-sm font-medium border border-gray-300 rounded-md
              transition-all duration-200
              hover:scale-[1.04]
              hover:border-emerald-300
            "
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-linear-to-b from-transparent to-white" />
    </section>
  );
}

export default Hero;
