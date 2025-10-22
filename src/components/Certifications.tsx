import { useState, useRef, useEffect } from "react";
import { Loader2 } from "lucide-react";

const certificates = [
  {
    image: "/certificates/azure.png",
    title: '"Azure Virtual Machines"',
    description: "Successfully completed the beginner-level Microsoft Learn module on Azure Virtual Machines. Gained hands-on experience in virtual machine deployment, management, and configuration, along with core concepts in Microsoft Azure, cloud computing, and cloud administration.",
    color: "#0078D4"
  },
  {
    image: "/certificates/django.png",
    title: '"Django Training"',
    description: "Completed a professional Django training program covering the fundamentals of backend web development. Learned to build dynamic web applications, manage databases, and integrate APIs using the Django framework.",
    color: "#092E20"
  },
  {
    image: "/certificates/aws.png",
    title: '"AWS Computing Solutions"',
    description: "Completed training in AWS cloud services, including EC2, Lambda, S3, VPC, IAM, and CloudFormation. Acquired practical experience in deploying, managing, and scaling cloud infrastructure. Strengthened skills in cloud computing, networking, and AWS architecture.",
    color: "#FF9900"
  },
  {
    image: "/certificates/python_full_stack_development.png",
    title: '"Python Full Stack Development"',
    description: "Completed full-stack development training focused on Python and Django. Gained hands-on experience in developing complete web applications from frontend to backend using modern technologies and frameworks.",
    color: "#3776AB"
  }
];

const Certifications = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "// Certifications { total: 4 }";
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollDirection = 1;
    let scrollSpeed = 0.5;
    let isPaused = false;

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed * scrollDirection;
        
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollDirection = -1;
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollDirection = 1;
        }
      }
      requestAnimationFrame(autoScroll);
    };

    const scrollAnimation = requestAnimationFrame(autoScroll);

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(scrollAnimation);
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="certifications" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background Code Pattern */}
      <div className="absolute inset-0 opacity-10 font-fira text-xs leading-relaxed pointer-events-none text-white">
        {`const getCertifications = () => {\n  return [\n    { skill: 'Python', level: 'Advanced' },\n    { skill: 'Django', level: 'Expert' },\n    { skill: 'React', level: 'Advanced' },\n  ];\n};\n\n`.repeat(20)}
      </div>

      <div className="container-custom relative z-10">
        {/* Animated Heading */}
        <div className="text-center mb-16">
          <h2 className="font-fira text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-50">{typedText}</span>
            <span className="animate-pulse text-gray-50">|</span>
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide scroll-smooth px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-black border border-white/20 rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
              style={{
                boxShadow: `0 0 15px rgba(255,255,255,0.08)`
              }}
            >
              {/* Certificate Image */}
              <div className={`w-full h-48 bg-gray-900 rounded-xl mb-4 overflow-hidden transition-all duration-300 ${loadedImages[index] ? '' : 'relative'}`}>
                {loadedImages[index] ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                      e.currentTarget.alt = "Certificate placeholder";
                      setLoadedImages(prev => ({ ...prev, [index]: true }));
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center font-fira text-gray-100 animate-pulse">
                      <Loader2 className="w-8 h-8 mb-2 animate-spin mx-auto text-primary" />
                      <div className="text-sm">Loading Certificate...</div>
                      <div className="text-xs opacity-70">Compiling ./cert.png</div>
                    </div>
                  </div>
                )}
                <img
                  src={cert.image}
                  alt=""
                  style={{ display: 'none' }}
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
                  onError={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
                />
              </div>

              {/* Title */}
              <h3 className="font-fira text-lg font-semibold text-gray-50 mb-2">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="font-fira text-sm text-gray-300 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="font-fira text-gray-50 font-semibold italic">
            END OF CERTIFICATIONS
          </p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .bg-\[image\:var\(--gradient-cta\)\] {
          background-image: var(--gradient-cta);
        }
        .bg-primary {
          background-color: hsl(var(--primary));
        }
      `}</style>
    </section>
  );
};

export default Certifications;
