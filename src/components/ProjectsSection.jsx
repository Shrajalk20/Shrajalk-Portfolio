import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Control Box",
    description: "AI Controlbox is a modular, scalable AI orchestration system designed to control, coordinate, and manage AI agents, tools, or microservices through a unified interface. Unlike traditional AI interfaces (like ChatGPT), AI Controlbox empowers users to transparently view the AI’s internal thinking process — enabling deeper insights, better debugging, and greater trust in the output",
    tags: ["Python",", TypeScript",", PostgreSQL"],
    githubUrl: "https://github.com/Shrajalk20/AI-Control-Box",
  },
  {
    id: 2,
    title: "Dashboard: Bitcoin Exchange Rates",
    description: "Developed an interactive analytics dashboard to visualize Bitcoin exchange rate trends using a variety of graph types, including line charts, bar charts, and heatmaps. Enables users to explore historical pricing data, volume, and volatility through intuitive visual representations.",
    tags: ["D3.js", ", HTML", ", CSS",", Javascript"],
    githubUrl: "https://github.com/asu-cse578-f2024/Ishraq-Nishad-Shrajal-Sougata",
  },
  {
    id: 3,
    title: "AI Case Interview",
    description: "AI Case Interview is a smart, interactive platform that helps users prepare for business, consulting, and product management case interviews using AI. It simulates real interview scenarios, provides intelligent feedback, and helps users structure response.",
    tags: ["React.js","," ,"Node.js",",", "PostgreSQL"],
    githubUrl: "https://github.com/Shrajalk20/AI-Case-Interview",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-br from-white-50 via-white-50 to-white-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 text-center text-purple-800">
          <span className="text-primary opacity-0 animate-fade-in-delay-1">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col text-left"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-800">{project.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{project.description}</p>

                <div className="mb-4">
                  <span className="text-sm font-medium text-purple-700">Tech:</span>{" "}
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-sm text-blue-600 hover:underline mr-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center content-center text-white bg-purple-600 hover:bg-pink-700 font-medium py-2 px-4 rounded-md transition-colors"
                >
                  <Github className="mr-2" size={18} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-15 justify-center">
  <a
    href="https://shrajalkportfolio.framer.website/"  // ← Replace with your actual URL
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  >
    View UX Portfolio
  </a>
</div>
      </div>
    </section>
  );
};
