import { Monitor, Atom, Smartphone, Code } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const expertiseCards = [
  {
    "title": "Backend Development",
    "subtitle": "Python & Django",
    "icon": Monitor,
    "highlightColor": "rgb(255, 31, 135)",
    "iconColor": "#FFFFFF",
    "glowColor": "rgba(255, 31, 135, 0.3)",
    "description": "Experienced in building scalable backend systems, designing databases, and developing REST APIs with Python and Django."
  },
  {
    "title": "Frontend Development",
    "subtitle": "React & NextJS",
    "icon": Atom,
    "highlightColor": "rgb(0, 102, 255)",
    "iconColor": "#61DAFB",
    "glowColor": "rgba(0, 102, 255, 0.3)",
    "description": "Passionate about UI/UX. Skilled in creating responsive and interactive web interfaces using HTML, CSS, JavaScript, React, and NextJS."
  },
  {
    "title": "Full-Stack Solutions",
    "subtitle": "Web Applications",
    "icon": Code,
    "highlightColor": "rgb(0, 204, 102)",
    "iconColor": "#00CC66",
    "glowColor": "rgba(0, 204, 102, 0.3)",
    "description": "Proficient in delivering end-to-end web applications, integrating frontends with backends, optimizing performance, and ensuring maintainable code."
  }
]
;

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 md:py-32" style={{ backgroundColor: "#111113" }}>
      <div className="container-custom max-w-[1400px]">
        <h2
          className="font-primary font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-16 px-4"
          style={{ letterSpacing: "-1px" }}
        >
          My Expertise
        </h2>

        <div className="max-w-[1200px] mx-auto border border-[#333333] overflow-hidden" style={{ backgroundColor: "#141414" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {expertiseCards.map((card, index) => {
              const Icon = card.icon;
              
              return (
                <div
                  key={index}
                  className="relative p-8 md:p-10 bg-[#1A1A1A] transition-all duration-300 ease-in-out hover:scale-[1.02] group lg:border-r lg:last:border-r-0 md:border-r md:[&:nth-child(2n)]:border-r-0 md:border-b md:last:border-b-0 md:[&:nth-last-child(2)]:border-b-0 border-b last:border-b-0 lg:border-b-0"
                  style={{
                    borderColor: "#333333",
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${card.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="mb-4">
                    <Icon size={36} style={{ color: card.iconColor }} />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-primary font-bold text-2xl md:text-[26px] leading-[34px] text-white mb-1">
                      {card.title}
                    </h3>
                    <div className="relative inline-block">
                      <h4 className="font-primary font-bold text-2xl md:text-[26px] leading-[34px] text-white">
                        {card.subtitle}
                      </h4>
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-1"
                        style={{ 
                          backgroundColor: card.highlightColor,
                          transform: "translateY(3px)"
                        }}
                      />
                    </div>
                  </div>

                  <div className="font-mono text-base leading-7 text-[#E0E0E0] max-w-[90%] mx-auto">
                    <div className="text-[#666666] mb-1">&lt;h3&gt;</div>
                    <div className="pl-4 mb-1">{card.description}</div>
                    <div className="text-[#666666]">&lt;/h3&gt;</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
