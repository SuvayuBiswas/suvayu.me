import useReveal from "../hooks/useReveal";

function Skills() {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      id="skills"
      className="reveal max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-3xl font-semibold text-gray-900">
        Skills
      </h2>

      <p className="mt-3 max-w-2xl text-gray-600">
        A focused overview of my technical skill set across machine learning,
        backend development, and modern web technologies.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">

        {/* AI / ML */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            AI / Machine Learning
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Python",
              "Deep Learning",
              "Computer Vision",
              "CNNs",
              "Attention Mechanisms",
              "PyTorch",
              "TensorFlow",
            ].map(skill => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Backend Development
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Node.js",
              "Express.js",
              "REST APIs",
              "MongoDB",
              "Authentication",
              "MVC Architecture",
            ].map(skill => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Frontend Development
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Responsive Design",
            ].map(skill => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Tools & Platforms
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Git & GitHub",
              "Linux",
              "Docker (Basics)",
              "AWS (Fundamentals)",
              "Oracle Cloud",
            ].map(skill => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
