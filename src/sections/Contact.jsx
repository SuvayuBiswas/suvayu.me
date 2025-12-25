import useReveal from "../hooks/useReveal";

function Contact() {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      id="contact"
      className="reveal border-t bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-semibold text-gray-900">
          Contact
        </h2>

        <p className="mt-4 max-w-2xl text-gray-600">
          I’m currently open to internship opportunities, collaborations,
          and meaningful discussions around software development and AI/ML.
          Feel free to reach out if you’d like to connect.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {[
            { label: "Email", value: "suvayu23@gmail.com", href: "mailto:suvayu23@gmail.com" },
            { label: "LinkedIn", value: "linkedin.com/in/suvayu-biswas", href: "https://linkedin.com/in/suvayu-biswas" },
            { label: "GitHub", value: "github.com/SuvayuBiswas", href: "https://github.com/SuvayuBiswas" },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="
                group rounded-xl border border-gray-200 bg-white p-6
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-md hover:border-emerald-200
              "
            >
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="mt-1 font-medium text-gray-900 group-hover:underline">
                {item.value}
              </p>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Contact;
