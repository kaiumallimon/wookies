import { cn } from "../../../utils/cn";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-transparent dark:bg-transparent">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#5555_1px,transparent_1px),linear-gradient(to_bottom,#5555_1px,transparent_1px)]",
        )}
      />
      
    </div>
  );
}
