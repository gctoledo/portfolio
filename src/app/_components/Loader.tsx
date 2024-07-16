"use client";

import { useEffect, useState } from "react";
import ProgressBar from "../_components/ProgressBar";

const Loader = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 110) {
            return prev + 4;
          } else {
            return 110;
          }
        });
      }, 50);

      if (progress === 110) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [progress]);

  return <>{progress === 110 ? children : <ProgressBar loader={progress} />}</>;
};

export default Loader;
