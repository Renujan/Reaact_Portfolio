import homeCover from "@/assets/home-cover.jpg";
import { ShaderAnimation } from "./ui/shader-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen mt-[80px] flex items-center justify-center overflow-hidden"
    >
      <ShaderAnimation className="absolute inset-0 z-0" />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 z-0 bg-black/30"></div>

      {/* Main Content */}
      <div className="container-custom relative z-10 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-primary font-black text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] tracking-tighter leading-none mb-4 md:mb-8 animate-scale-in text-white text-center">
            ROSHAN RENUJAN
          </h1>

          {/* Subheading */}
          <h2 className="font-mono text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-16 tracking-[0.15em] md:tracking-[0.2em] uppercase animate-fade-in text-center px-4">
            SOFTWARE ENGINEER, FULL STACK DEVELOPER.
          </h2>

          {/* Featured In Section */}
          <div className="mt-20 animate-fade-in">
            <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-[0.3em] mb-6">
              Skills
            </p>
            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-40">
              <span className="font-mono text-sm md:text-base text-muted-foreground/70">&lt; Django /&gt;</span>
              <span className="font-mono text-lg md:text-xl text-muted-foreground/70 font-bold">React</span>
              <span className="font-mono text-base md:text-lg text-muted-foreground/70">RestApi</span>
              <span className="font-mono text-xl md:text-2xl text-muted-foreground/70 font-semibold">Diployment</span>
              <span className="font-mono text-sm md:text-base text-muted-foreground/70">UI/UX</span>
              <span className="font-mono text-sm md:text-base text-muted-foreground/70">Testing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
