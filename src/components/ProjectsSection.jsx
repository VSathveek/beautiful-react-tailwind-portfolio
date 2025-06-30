import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Mess App with Firebase",
    description: "Role-based food ordering system with QR payments and admin dashboard.",
    tags: ["Flutter", "Firebase", "NoSQL", "UPI Payments"],
    githubUrl: "https://github.com/pardhu-423141/mess_app",
    type: "mobile"
  },
  {
    id: 2,
    title: "Fair Graph Algorithms",
    description: "Research on multi-weight edge graphs with scalarized cost functions at IIT Ropar.",
    tags: ["Graph Theory", "Algorithms", "Research"],
    githubUrl: "https://github.com/VSathveek/Fair-graph-based-algorithms",
    type: "research"
  },
  {
    id: 3,
    title: "Personal Vault App",
    description: "Secure document storage with Google Drive integration and role-based access.           (Not listed in github)       ",
    tags: ["Flutter", "Firebase", "Google Drive API"],
    githubUrl: "#",
    type: "mobile"
  },
  {
    id: 4,
    title: "ToDo Management Website",
    description: "Task management system with analytics, file attachments and notifications.",
    tags: ["Django", "JavaScript", "SQLite"],
    githubUrl: "https://github.com/VSathveek/ToDo",
    type: "web"
  },
  {
    id: 5,
    title: "Attendance App",
    description: "Excel-based attendance tracking system with reporting features.",
    tags: ["Flutter", "Local Storage"],
    githubUrl: "https://github.com/VSathveek/Attendance-App",
    type: "mobile"
  },
  {
    id: 6,
    title: "Empathetic AI Model",
    description: "RoBERTa-based emotion detection model (anger, joy, fear, sadness).",
    tags: ["NLP", "Machine Learning", "Python"],
    githubUrl: "https://github.com/VSathveek/empathetic_ai_model",
    type: "research"
  },
];

const ProjectPlaceholder = ({ type }) => {
  const config = {
    mobile: {
      emoji: "📱",
      bg: "bg-blue-50",
      text: "text-blue-600",
      label: "Mobile App"
    },
    web: {
      emoji: "🌐",
      bg: "bg-green-50",
      text: "text-green-600",
      label: "Web App"
    },
    research: {
      emoji: "🔬",
      bg: "bg-purple-50",
      text: "text-purple-600",
      label: "Research Project"
    },
    default: {
      emoji: "💻",
      bg: "bg-gray-50",
      text: "text-gray-600",
      label: "Project"
    }
  };

  const { emoji, bg, text, label } = config[type] || config.default;

  return (
    <div className={`${bg} h-full flex flex-col items-center justify-center p-6`}>
      <div className="text-5xl mb-3">{emoji}</div>
      <span className={`${text} font-medium text-sm`}>{label}</span>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my academic and personal projects showcasing my skills in 
          mobile development, web technologies, and research.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <ProjectPlaceholder type={project.type} />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/VSathveek"
          >
            View All Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};