import useReveal from "../hooks/useReveal";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const revealRef = useReveal();

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div ref={revealRef} className="reveal">
        <h2 className="text-3xl font-semibold text-gray-900">
          Projects
        </h2>

        <p className="mt-3 max-w-2xl text-gray-600">
          Selected work showcasing full-stack development, applied machine
          learning, and research-driven problem solving.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          <ProjectCard
            title="Ghuumo — Full-Stack Travel Listing Platform"
            description="A production-style full-stack web application enabling users to create, browse, and manage travel listings with authentication and CRUD functionality."
            tech={["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"]}
            github="https://github.com/SuvayuBiswas/ghuumo"
            demo="https://ghuumo.suvayu.me"
          />

          <ProjectCard
            title="AI-Based Brain Tumor Classification"
            description="A lightweight attention-based deep learning system for automated brain tumor classification from MRI images, designed for clinical relevance."
            tech={["Python", "CNNs", "Computer Vision", "PyTorch", "TensorFlow"]}
            caseStudy="/case-study/brain-tumor"
          />

          <ProjectCard
            title="RPG Creature Search App"
            description="An API-driven web application that allows users to search and explore RPG creatures dynamically using external REST APIs."
            tech={["HTML", "CSS", "JavaScript", "REST APIs"]}
            github="https://github.com/SuvayuBiswas/Web_Dev/tree/master/RPG%20Creature%20Search%20App"
            demo="https://rpg.suvayu.me"
          />

        </div>
      </div>
    </section>
  );
}

export default Projects;
