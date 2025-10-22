"use client";

import { motion, Transition } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    },
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1.2, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="initial"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            className="absolute w-2 h-2 bg-[#6366f1] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon */}
        <motion.div variants={logoVariants} initial="initial" animate="animate">
          <div className="relative mb-8">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-20 h-20 mx-auto mb-4 relative"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 border-4 border-[#6366f1]/30 rounded-full"></div>
              {/* Inner ring */}
              <div className="absolute inset-2 border-2 border-[#6366f1]/50 rounded-full"></div>
              {/* Center dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#6366f1] rounded-full"></div>
              </div>
            </motion.div>

            {/* Animated code brackets */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl text-[#6366f1]/50 font-mono"
            >
              {"</>"}
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div variants={textVariants} initial="initial" animate="animate">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Renujan Portfolio
          </h1>
          <p className="text-gray-400 mb-8">Building amazing experiences...</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-4">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              variants={progressVariants}
              initial="initial"
              animate="animate"
              className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full"
            />
          </div>
        </div>

        {/* Loading Percentage */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#6366f1] font-mono text-sm"
        >
          {progress}%
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `linear-gradient(90deg, #6366f1 1px, transparent 1px),
                             linear-gradient(180deg, #6366f1 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </motion.div>
  );
}
