import { Link } from "react-router-dom";

function ProjectCard({ title, description, tech, github, demo, caseStudy }) {
  return (
    <div
      className="
        group rounded-2xl border border-gray-200 bg-white p-6
        transition-all duration-300 ease-out
        hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-200
      "
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-4 text-sm font-medium">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
          >
            Live Demo
          </a>
        )}

        {caseStudy && (
          <Link
            to={caseStudy}
            className="text-emerald-600 hover:underline"
          >
            Case Study →
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
