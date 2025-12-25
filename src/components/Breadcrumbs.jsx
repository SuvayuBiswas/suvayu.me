import { Link, useLocation } from "react-router-dom";

function Breadcrumbs({ title }) {
  const location = useLocation();

  // Only show on case study pages
  if (!location.pathname.startsWith("/case-study")) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-10 text-sm text-gray-500"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            to="/"
            className="hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
        </li>

        <li>/</li>

        <li>
          <Link
            to="/#projects"
            className="hover:text-gray-900 transition-colors"
          >
            Projects
          </Link>
        </li>

        <li>/</li>

        <li className="text-gray-900 font-medium">
          {title}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
