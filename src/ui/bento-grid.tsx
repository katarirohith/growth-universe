// src/components/BentoGrid.jsx
import React from "react";
import { cn } from "../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col p-6 group",
        className
      )}
    >
      {header && <div className="mb-4">{header}</div>}
      <div className="flex items-center mb-4">
        {icon && (
          <div className="text-primary-600 dark:text-primary-400 mr-3">
            {icon}
          </div>
        )}
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-200">
          {title}
        </h3>
      </div>
      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 flex-grow">
        {description}
      </p>
    </div>
  );
};
