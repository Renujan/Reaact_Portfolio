import { ExternalLink, ArrowRight, X, Github } from "lucide-react";
import { Button } from "./ui/button";
import { GlowCard } from "./ui/spotlight-card";
import { RainbowButton } from "./ui/rainbow-button";
import { TextShimmer } from "./ui/text-shimmer";
import { Typewriter } from "./ui/typewriter-text";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { useState } from "react";
import profileImg from '../assets/profile.jpg';
import jwellaryImg from '../assets/jwellary.png';
import jwelImg1 from '../assets/jwellary1.png';
import jwelImg2 from '../assets/jwellary2.png';
import jwelImg3 from '../assets/jwellary3.png';
import jwelImg4 from '../assets/jwellary4.png';
import JewellaryImg from '../assets/Jewellary.png';
import nuPannelImg from '../assets/NU_Pannel.png';
import nuPannelImg1 from '../assets/NU_Pannel1.png';
import nuPannelImg2 from '../assets/NU_Pannel2.png';
import nuPannelImg3 from '../assets/NU_Pannel3.png';
import nuPannelImg4 from '../assets/NU_Pannel4.png';
import nuPannelImg5 from '../assets/NU_Pannel5.png';
import teaImg1 from '../assets/tea1.png';
import teaImg2 from '../assets/tea2.png';
import teaImg3 from '../assets/tea3.png';
import teaImg4 from '../assets/tea4.png';
import teaImg5 from '../assets/tea5.png';
import paintImg from '../assets/paint.png';
import paintImg1 from '../assets/paint1.png';
import paintImg3 from '../assets/paint3.png';
import paintImg4 from '../assets/paint4.png';
import paintImg5 from '../assets/paint5.png';
import paintImg6 from '../assets/paint6.png';
import cricketImg from '../assets/cricket.png';
import cricketImg1 from '../assets/cricket1.png';
import cricketImg2 from '../assets/cricket2.png';
import cricketImg3 from '../assets/cricket3.png';
import cricketImg4 from '../assets/cricket4.png';
import cricketImg5 from '../assets/cricket5.png';

const projects = [
  {
    title: "SLIITNU PANEL (WAGTAIL+TAILWIND)",
    category: "Web Development",
    projectType: "Academic Project",
    image: nuPannelImg,
    gridClass: "md:col-span-1 md:row-span-1",
    description: "SLIIT CITY UNI 2nd year, 2nd semester - November 2024. Collaborated in a group project to develop a web-based administration portal for SLIIT Northern University using Django (Wagtail), Tailwind CSS, and PostgreSQL for payments, records, and secure uploads.",
    techStack: ["Django", "Wagtail", "Tailwind CSS", "PostgreSQL", "JavaScript"],
    liveUrl: "https://nupannel.zentrixon.com",
    gallery: [nuPannelImg, nuPannelImg1, nuPannelImg2, nuPannelImg3, nuPannelImg4, nuPannelImg5],
  },
  {
    title: "PAINT SHOP(WAGTAIL+REACT)",
    category: "Web Development",
    projectType: "Client Project",
    image: paintImg,
    gridClass: "md:col-span-1 md:row-span-1",
    description: "A comprehensive paint shop stock management and billing system built with Wagtail CMS and React. Features inventory control, stock tracking, automated billing, purchase orders, supplier management, and sales reporting for retail paint operations.",
    techStack: ["Wagtail", "React", "Python", "Django", "JavaScript", "PostgreSQL"],
    gallery: [paintImg, paintImg1, paintImg3, paintImg4, paintImg5, paintImg6],
  },
  {
    title: "JWELLARY SHOP (WAGTAIL+REACT)",
    category: "Web Development",
    projectType: "Internship Project",
    image: jwellaryImg,
    gridClass: "md:col-span-1 md:row-span-1",
    description: "A stunning jewelry showcase website built with Wagtail CMS and React. Features elegant product galleries, detailed gemstone information, virtual try-on, customer reviews, and secure e-commerce functionality for luxury jewelry presentation.",
    techStack: ["Wagtail CMS", "React", "Headless Architecture", "E-commerce", "JavaScript"],
    gallery: [jwellaryImg, jwelImg1, jwelImg2, jwelImg3, jwelImg4, JewellaryImg],
  },
  {
    title: "CRICKET ACEDEMY (REACT)",
    category: "Web Development",
    projectType: "Client Project",
    image: cricketImg,
    gridClass: "md:col-span-1 md:row-span-1",
    description: "A dynamic web platform for cricket academy management built entirely in React. Features player profiles, training schedules, match records, performance analytics, and an interactive registration system for aspiring cricketers.",
    techStack: ["React", "JavaScript", "Sports Management", "Analytics", "Web Components"],
    gallery: [cricketImg, cricketImg1, cricketImg2, cricketImg3, cricketImg4, cricketImg5],
  },
  {
    title: "ESD PORTFOLIO(REACT)",
    category: "Web Development",
    projectType: "Academic Project",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
    description: "A professional portfolio website built with React showcasing modern web development practices. Features responsive design, smooth animations, interactive components, and an optimized user experience for professional presentation.",
    techStack: ["React", "JavaScript", "CSS3", "Web Development", "Portfolio Design"],
  },
  {
    title: "OOP SHIP SHAPE (JAVA)",
    category: "Mobile App",
    projectType: "Academic Project",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&h=800&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
    description: "A ship-related management system built with Java using object-oriented programming principles. Features vessel tracking, fleet management, cargo scheduling, maintenance logging, and crew management for maritime operations.",
    techStack: ["Java", "OOP", "Mobile Development", "Maritime Management"],
  },
  {
    title: "TEA SHOP(DJANGO+REACT)",
    category: "Web Development",
    projectType: "Client Project",
    image: teaImg1,
    gridClass: "md:col-span-1 md:row-span-1",
    description: "A complete POS (Point of Sale) system for tea shops built with Django backend and React frontend. Features order processing, inventory tracking, transaction management, receipt generation, and sales analytics for effective shop management.",
    techStack: ["Django", "React", "Python", "JavaScript", "PostgreSQL", "Rest API"],
    gallery: [teaImg1, teaImg2, teaImg3, teaImg4, teaImg5],
  },
  {
    title: "ENG AI ASSISTANT MOBILE APP (JAVA+ANDROID)",
    category: "AI",
    projectType: "Academic Project",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&h=600&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
    description: "Android Application (Group project) SLIIT 2nd year 1st semester | Nov-2024. An Android app using Java, Firebase, and REST API, delivering AI-powered features with real-time data sync and smooth user interaction. Built a user-friendly UI with RecyclerView and Fragments, and integrated Firebase for authentication and storage.",
    techStack: ["Android Studio", "Java", "Firebase", "REST API", "AI"],
  },
  {
    title: "SALON SYSTEM (PHP+MYSQL+HTML+CSS+JS)",
    category: "Web Development",
    projectType: "Academic Project",
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=1000&h=800&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
    description: "SLIIT 1st year 2nd semester | July-2024. Developed a user-friendly website for a salon, incorporating pages such as Home, Types of Haircuts, Contact Us, and About Us. Enabled users to book haircut appointments online, with backend functionality using PHP and SQL. Applied Human-Computer Interaction (HCI) principles to enhance usability and design.",
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "HCI"],
  },
];

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedFilter === "All" ? projects : projects.filter(project => project.category === selectedFilter);

  const filtersData = [
    {name: "All", count: projects.length},
    {name: "Mobile App", count: projects.filter(p => p.category === "Mobile App").length},
    {name: "Web Development", count: projects.filter(p => p.category === "Web Development").length},
    {name: "AI", count: projects.filter(p => p.category === "AI").length},
  ];

  return (
    <section id="work" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container-custom">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-20">
          {/* Left: Title and Description */}
          <div className="relative">
            <div className="absolute -top-8 -left-4 text-6xl text-gray-800 opacity-30">&lt;/&gt;</div>
            <div className="absolute top-20 -right-8 text-4xl text-gray-800 opacity-20">{ }</div>
            <Typewriter text="My Work" loop={true} className="block font-primary font-bold text-7xl md:text-8xl lg:text-9xl mb-8 text-white leading-tight" />
            <div className="font-mono text-base md:text-lg text-gray-300 leading-relaxed relative z-10">
              <p> Deployed scalable web and hybrid mobile applications for travel, events, and telemedicine using <b>React SPA</b> and <b>PMA</b>. Collaborated on <b>20+ projects</b> with <b>10+ clients</b> worldwide. Passionate about leveraging <b>data analytics and visualization</b> to create insights-driven solutions. </p>
            </div>
            <div className="absolute bottom-0 right-0 text-5xl text-gray-800 opacity-20">( )</div>
          </div>

          {/* Right: Profile Section */}
          <div className="relative flex items-center justify-center animate-fade-in">
            <div className="relative group">
              <div className="">
                <img
                  src={profileImg}
                  alt="Profile Image of Renujan"
                  className="w-80 h-auto object-cover border-4 border-white shadow-2xl transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-12 -left-12 transition-transform duration-300 group-hover:rotate-12">
                <ArrowRight className="text-[#6366f1]" size={48} />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-12 flex items-center gap-4 flex-wrap">
          <TextShimmer as="span" className="text-sm font-semibold">Filter by</TextShimmer>
          {filtersData.map((filter) => (
            <RainbowButton
              key={filter.name}
              onClick={() => setSelectedFilter(filter.name)}
              className="font-semibold text-white text-sm"
            >
              {filter.name}
              <sup className="ml-1 text-xs">{filter.count}</sup>
            </RainbowButton>
          ))}
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer h-full"
              onClick={() => setSelectedProject(project)}
            >
              <GlowCard
                className={`animate-fade-in group overflow-hidden bg-[#181818] border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full ${project.gridClass}`}
                customSize
                glowColor="purple"
                animationDelay={index * 0.1}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-poppins font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-sm font-poppins text-gray-500 mb-2">{project.category}</p>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    project.projectType === 'Client Project'
                      ? 'bg-green-500/20 text-green-400'
                      : project.projectType === 'Academic Project'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {project.projectType}
                  </span>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>

        {/* Project Details Dialog */}
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl w-[95vw] h-[90vh] max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 fixed top-[5vh] left-[50%] translate-x-[-50%] translate-y-0">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white pr-8">{selectedProject.title}</DialogTitle>
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-white z-50 bg-[#0a0a0a] p-1">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </DialogHeader>
              {(() => {
                const galleryImages = selectedProject.gallery || [];
                const hasGallery = galleryImages.length > 0;

                if (hasGallery) {
                  return (
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      <div className="order-1 md:order-2">
                        <h3 className="text-xl font-semibold text-white mb-6">Project Gallery</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {galleryImages.map((galleryImage, i) => (
                            <div
                              key={i}
                              className="aspect-square overflow-hidden rounded-xl border border-gray-600/50 hover:border-gray-400/80 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              <img
                                src={galleryImage}
                                alt={`${selectedProject.title} - View ${i + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">Project Details</h3>
                          <p className="text-gray-300 leading-relaxed">
                            {selectedProject.description || "Detailed project description coming soon."}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {selectedProject.techStack ? selectedProject.techStack.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-white border-white/20 hover:bg-white/10">
                                {tech}
                              </Badge>
                            )) : (
                              <Badge variant="outline" className="text-white border-white/20">
                                {selectedProject.category}
                              </Badge>
                            )}
                          </div>
                          <a href={selectedProject.liveUrl || '#'} target="_blank" rel="noopener noreferrer">
                            <RainbowButton className="w-full font-semibold text-white">
                              {selectedProject.liveUrl ? (
                                <>
                                  <ExternalLink className="mr-2" size={18} />
                                  View Live Demo
                                </>
                              ) : (
                                <>
                                  <Github className="mr-2" size={18} />
                                  View on GitHub
                                </>
                              )}
                            </RainbowButton>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="mt-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Project Details</h3>
                        <p className="text-gray-300 leading-relaxed">
                          {selectedProject.description || "Detailed project description coming soon."}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedProject.techStack ? selectedProject.techStack.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-white border-white/20 hover:bg-white/10">
                              {tech}
                            </Badge>
                          )) : (
                            <Badge variant="outline" className="text-white border-white/20">
                              {selectedProject.category}
                            </Badge>
                          )}
                        </div>
                        <RainbowButton className="w-full font-semibold text-white">
                          <Github className="mr-2" size={18} />
                          View on GitHub
                        </RainbowButton>
                      </div>
                    </div>
                  );
                }
              })()}
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Work;
