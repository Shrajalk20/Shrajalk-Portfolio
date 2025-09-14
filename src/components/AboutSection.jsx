import { useState } from "react";
import { Briefcase, Circle, Code, User } from "lucide-react";

const ExperienceCard = ({ title, company, period, description, technologies }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-primary to-accent"></div>
      <div className="absolute left-0 top-6 w-3 h-3 bg-primary rounded-full -translate-x-1.5 shadow-lg"></div>

      <div className="ml-8 bg-background/70 backdrop-blur-md border border-border rounded-xl overflow-hidden shadow-md">
        <div
          className="p-6 cursor-pointer hover:bg-surface/30 transition-colors duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-primary">{title}</h3>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{period}</span>
              <div className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <h4 className="text-accent font-semibold">{company}</h4>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6">
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

            {technologies && (
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const experiences = [
    {
      title: "VR Pod Operator",
      company: "Dreamscape Learn",
      period: "May 2025 - Present",
      description:
      <ul>
        <li type="Circle" >Analyzed monthly processing of 4,000+ session logs via Python scripts, integrating GitHub Actions for CI/CD and
        deploying dynamic dashboards using Power BI and Tableau.</li>
        <br></br>
        <li  type="Circle">Monitored KPIs such as session completion, headset usage, and issue resolution using SQL and Tableau analytics, leading to
        improved staffing decisions and 15% higher system uptime.</li><br></br>
        <li  type="Circle">Orchestrated guest experiences operations including VR session scheduling and high-profile event assistance, collaborating
        with engineering teams to ensure seamless user onboarding and VIP experiences.</li>
        </ul>
     ,
      technologies: ["Python", "Power BI", "Tableau"],
    },
    {
      title: "AI Frontend Developer",
      company: "Hawl Technologies",
      period: "May 2025 - August 2025",
      description:
      <ul>
      <li type="Circle" >Built and maintained responsive, dynamic web interfaces using React.js, HTML/CSS, and JavaScript, increasing
      onboarding completion by 80% through improved UI/UX flows.</li>
      <br></br>
      <li  type="Circle">Integrated REST APIs and implemented dynamic state management using React hooks and context across multiple views.</li><br></br>
      <li type="Circle">Contributed to full-stack development by building a secure login/authentication system using FastAPI (Python) and
      PostgreSQL, ensuring user data security and session handling</li><br></br>
      <li type="Circle">Prioritized accessibility and performance, using semantic HTML, responsive layouts, and optimizing load times (18%
        improvement)</li><br></br>
        <li type="Circle">Implemented SEO best practices using semantic HTML, meta tags, structured data, and accessible markup to improve page
        discoverability and ranking.</li><br></br>
      </ul>
        ,
      technologies: ["React", "TypeScript", "Python" , "Node.js", "Figma", "User Research"],
    },
    {
      title: "Associate Consultant",
      company: "KPMG",
      period: "Feburary 2023 - August 2024",
      description:
      <ul>
      <li type="Circle" >Partnered with cross-functional teams to streamline complex user workflows, enhancing efficiency by 15% in internal 
        platforms and supported the design and documentation of secure, user-friendly interfaces in compliance-heavy environments.</li>
      <br></br>
      <li  type="Circle">Mentored 4 new consultants and supported third-party risk policy implementation for 10+ vendors while leading
      stakeholder engagement and process analysis to deliver compliance-aligned user insights in agile settings.</li><br></br>
      </ul>,
      technologies: ["Cross-functional collaboration", "User-Friendly Interface", "Mentoring", "Stakeholder Management"],
    },
    {
      title: "Senior Associate",
      company: "PwC",
      period: "August 2019 - Feburary 2023",
      description:
      <ul>
      <li type="Circle" >Delivered client-facing cybersecurity and compliance to 12+ enterprise clients across healthcare, BFSI, and
manufacturing sectors (OT/IT), advising on alignment of security platforms with regulatory frameworks and operational
requirements, improving platform usability by 18% based on user feedback.</li>
      <br></br>
      <li  type="Circle">Led a 4-member team on risk reporting for a BFSI client, evaluating 100+ cybersecurity and compliance controls, and
      collaborating with design teams to streamline task flows resulting in a 30% reduction in access-related support tickets.</li><br></br>
      </ul>,
      technologies: ["Compliance and Cybersecurity", "Leadership", "Operational Technology"],
    },
  ];

  return (
    <section id="about" className="py-12 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-8">Professional Experience</h2>

      <div className="space-y-8 text-left">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
