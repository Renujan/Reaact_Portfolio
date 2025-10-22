import zentrixonLogo from "@/assets/zentrixon-logo.png";
import vultureLinesLogo from "@/assets/vulture-lines-logo.png";
import { GlowingEffect } from "./ui/glowing-effect";

const experiences = [
  {
    company: "Zentrixon Company",
    role: "Associate Software Engineer",
    dates: "August 2025 – Present",
    location: "Jaffna, Sri Lanka",
    logo: zentrixonLogo,
    points: [
      "Working as an Associate Software Engineer focusing on full-stack development using Django (Wagtail) for backend and React for frontend integration.",
      "Developing REST APIs with token-based authentication and managing deployment on Render (backend) and Vercel (frontend).",
      "Collaborating in an Agile team environment with Git, GitHub Actions, and issue tracking for continuous delivery.",
      "Working on real-time data synchronization and optimizing backend query performance using PostgreSQL.",
      "Improving UI/UX consistency with reusable React components and Tailwind CSS design system.",
    ],
  },
  {
    company: "Vulture Lines Tech Management Pvt Ltd",
    role: "Software Engineering Intern",
    dates: "March 2024 – August 2025",
    location: "India (Remote)",
    logo: vultureLinesLogo,
    points: [
      "Worked on Django backend development and React.js frontend integration as part of the engineering team.",
      "Built and tested RESTful APIs with JWT authentication, enabling secure client-server communication.",
      "Handled database management with SQLite and PostgreSQL, including query optimization and schema design.",
      "Learned cloud deployment techniques with Vercel (frontend) and Render (backend).",
      "Enhanced collaboration skills using Git version control, pull requests, and Agile-based sprint systems.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-[100px] md:py-[120px] bg-[#0E0E0F]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-poppins font-bold text-5xl md:text-6xl text-white text-center mb-16 tracking-tight">
          Professional Experience
        </h2>

        <div className="relative max-w-[1000px] mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-5 top-0 bottom-0 w-[3px] bg-[#2D2D2D] hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-[7px] top-8 w-3 h-3 rounded-full bg-primary hidden md:block" />

                <div
                  className="relative bg-[#181818] rounded-2xl p-8 md:p-10 border border-[#2D2D2D] transition-all duration-300 hover:shadow-[0_0_30px_rgba(80,200,255,0.25)] hover:scale-[1.02]"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-4">
                    <div className="flex items-start gap-4">
                      {exp.logo && (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-16 h-16 object-contain bg-white rounded-lg p-2"
                        />
                      )}
                      <div>
                        <h3 className="font-poppins font-semibold text-xl md:text-2xl text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="font-poppins text-base text-[#A0A0A0] mb-1">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-sm text-[#A0A0A0] mt-2 md:mt-0 md:text-right">
                      <p className="font-poppins">{exp.dates}</p>
                      {exp.location && <p className="font-poppins">{exp.location}</p>}
                    </div>
                  </div>
                  <ul className="space-y-3 mt-6 max-w-[900px]">
                    {exp.points.map((point, i) => (
                      <li key={i} className="font-fira text-base leading-7 text-[#D6D6D6] pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
