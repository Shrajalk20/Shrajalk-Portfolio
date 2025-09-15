import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cn } from "@/lib/utils";

const skillsData = {
  "Web Technologies": [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "React.js", icon: "⚛️" },
    { name: "TypeScript", icon: "/icons/Typescript.png" },
    { name: "Django", icon: "/icons/Django_logo.png" },
    { name: "Node.js", icon: "/icons/node.png" },
  ],
  "Programming Languages": [
    { name: "C++", icon: "💻" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "SQL", icon: "🗃️" },
    { name: "JavaScript", icon: "📜" },
  ],
  "Cloud Technologies": [
    { name: "AWS Lambda", icon: "λ" },
    { name: "API Gateway", icon: "🔌" },
    { name: "S3", icon: "🪣" },
    { name: "DynamoDB", icon: "⚡" },
    { name: "Simple Queue Service", icon: "📬" },
  ],
  "Tools": [
    { name: "Git", icon: "/icons/Git_icon.png" },
    { name: "GitHub", icon: "/icons/github.png" },
    { name: "Jira", icon: "/icons/JIRA.jpeg" },
    { name: "MongoDB", icon: "/icons/mongo.png" },
    { name: "PostgreSQL", icon: "/icons/postgresql.png" },
  ],
};

export const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative bg-gradient-to-br from-white-100 via-white-100 to-white-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 text-center text-purple-800">
          <span className="text-primary opacity-0 animate-fade-in-delay-1">Skills</span>
        </h2>

        {Object.entries(skillsData).map(([category, skills], idx) => (
          <div key={category} data-aos="fade-up" className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-pink-800">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
              {skills.map((skill, index) => (
              <div
              key={index}
              className="hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center p-4"
              >  
                <div className="text-3xl mb-2 flex flex-col items-center justify-center text-center p-4">
                {skill.icon.startsWith("/") ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  skill.icon
                )}
                <div className="text-sm font-medium text-gray-700">{skill.name}</div>
              </div>
              </div> 
       
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

