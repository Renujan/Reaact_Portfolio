import { useState, useEffect } from "react";
import { Loader2, Code } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState("");
  const fullLoadingText = "$ npm run build\n# Compiling Renujan's Portfolio\n# Loading components...\n# Deploying to production...";

  useEffect(() => {
    let index = 0;
    const loadingInterval = setInterval(() => {
      if (index <= fullLoadingText.length) {
        setLoadingText(fullLoadingText.slice(0, index));
        index++;
      } else {
        clearInterval(loadingInterval);
      }
    }, 50);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center font-fira text-gray-50">
        <div className="mb-8">
          <Code className="w-16 h-16 mx-auto mb-4 animate-pulse text-primary" />
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
        </div>
        <pre className="text-sm leading-relaxed opacity-80 text-left">
          <span className="text-green-400">$ </span>
          <span className="typing-text">{loadingText}</span>
          <span className="animate-pulse text-gray-50">█</span>
        </pre>
        <div className="mt-8 text-xs opacity-60 animate-pulse">
          Initializing portfolio... Please wait
        </div>
      </div>

      <style>{`
        .typing-text {
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Work />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
