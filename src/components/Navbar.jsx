import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  
  // Handle section navigation from any route
  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 50);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="text-sm font-semibold tracking-wide text-gray-900"
        >
          suvayu.me
        </button>


        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {["about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => goToSection(item)}
              className="
                relative group transition-colors
                hover:text-gray-900
              "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* Micro underline */}
              <span
                className="
                  absolute left-0 -bottom-1 h-0.5 w-full
                  bg-emerald-500
                  scale-x-0 origin-left
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
              />
            </button>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            ml-4 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium
            transition-all duration-200
            hover:border-emerald-300
            hover:scale-[1.03]
            active:scale-[0.97]
          "
        >
          Resume
        </a>

      </nav>
    </header>
  );
}

export default Navbar;
