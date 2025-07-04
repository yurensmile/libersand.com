import React from "react";
import { cn } from "@1chooo/ui/lib/utils";

import classes from "@/styles/gradient-card.module.css";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

function GradientCard({ children, className = "" }: GradientCardProps) {
  return (
    <div
      className={cn(classes.gradientCard, `${className}`)}
    >
      {children}
    </div>
  );
}

export default GradientCard;
