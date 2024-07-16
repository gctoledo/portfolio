"use client";

import { Progress } from "@/app/_components/ui/progress";

const ProgressBar = ({ loader }: { loader: number }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <Progress className="w-72" value={loader} />
    </div>
  );
};

export default ProgressBar;
