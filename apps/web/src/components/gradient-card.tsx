import React from "react";
import { cn } from "@1chooo/ui/lib/utils";

import styles from "@/styles/gradient-card.module.css";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

function GradientCard({ children, className = "" }: GradientCardProps) {
  return (
    <div
      className={cn(styles.gradientCard, `${className}`)}
    >
      {children}
    </div>
  );
}

export default GradientCard;
