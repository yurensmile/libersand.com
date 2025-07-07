import React from "react";

import { cn } from "@1chooo/ui/lib/utils";

import styles from "@/styles/page-title.module.css";

interface PageTitleProps {
  className?: string;
  title: string;
}

function PageTitle({ className, title }: PageTitleProps) {
  return <h2 className={cn(styles.pageTitle, className)}>{title}</h2>;
}

export default PageTitle;
