import useReveal from "../hooks/useReveal";

function About() {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      id="about"
      className="reveal max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-3xl font-semibold text-gray-900">
        About
      </h2>

      <div className="mt-8 max-w-3xl space-y-5 text-gray-700 leading-relaxed">
        <p>
          I am a B.Tech Computer Science student with a strong interest in
          building practical software systems that combine intelligent
          decision-making with clean, scalable engineering.
        </p>

        <p>
          My work spans applied machine learning and full-stack web development.
          On the ML side, I focus on efficient deep learning models for real-world
          use cases, particularly in computer vision. On the web side, I build
          backend-driven applications with structured APIs and maintainable
          architectures.
        </p>

        <p>
          I value clarity in code, thoughtful system design, and continuous
          learning. I am currently seeking internship opportunities where I can
          contribute meaningfully and grow as a software engineer.
        </p>
      </div>
    </section>
  );
}

export default About;
