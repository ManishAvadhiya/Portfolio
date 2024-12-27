import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export default function MiniLoader({ initialProgress = 0, duration = 2000 }) {
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, duration / 100);

    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div className="w-full max-w-md mx-auto">
      <Progress value={progress} className="w-[100px] sm:w-[200px] h-[5px]" />
      <p className="text-center mt-3 text-secondary text-sm font-mono">{Math.round(progress)}%</p>
    </div>
  );
}

