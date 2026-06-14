import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let animationFrame: number;
    let currentProgress = 0;

    const animate = () => {
      // Simulate loading progress
      currentProgress += Math.random() * 30;

      // Slow down as we approach 90%
      if (currentProgress > 90) {
        currentProgress = 90;
      }

      setProgress(currentProgress);

      if (currentProgress < 90) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    // Complete loading after 2 seconds
    const completeTimer = setTimeout(() => {
      setProgress(100);

      // Fade out after a brief moment
      setTimeout(() => {
        setFadeOut(true);

        // Call onComplete after fade out
        setTimeout(onComplete, 300);
      }, 300);
    }, 2000);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-300 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Heading */}
      <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight">
        BioPlate Studio
      </h1>

      {/* Loading Bar Container */}
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        {/* Progress Bar */}
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-teal-500 to-purple-500 transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Optional: Loading percentage text */}
      <p className="text-white/50 text-sm mt-4 font-light tracking-widest">
        {Math.round(progress)}%
      </p>
    </div>
  );
}
