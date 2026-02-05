"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function OrientationGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      // Detects if we're in portrait mode
      const portrait =
        window.innerHeight > window.innerWidth && window.innerWidth < 1024;
      setIsPortrait(portrait);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  if (isPortrait) {
    return (
      <div className="fixed inset-0 z-[100] bg-valentine flex flex-col items-center justify-center text-center p-10">
        <motion.div
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 p-4 rounded-2xl glass-panel"
        >
          <svg
            className="w-16 h-16 text-accent-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-semibold text-white/95 mb-3 tracking-tight">
          Rotate your device
        </h2>
        <p className="text-white/50 text-base max-w-sm leading-relaxed">
          To enjoy this experience, please rotate your phone to{" "}
          <span className="text-accent-gold font-medium">landscape mode</span>.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
