import { Swords } from "lucide-react";
import { getIcon } from "@/components/icons";

import { cn } from "@1chooo/ui/lib/utils";
import classes from "@/styles/icon-box.module.css";

interface IconBoxProps {
  key?: string;
  iconName: string;
  className?: string;
}

function IconBox({ key, iconName, className }: IconBoxProps) {
  const Icon = getIcon(iconName) || Swords;

  return (
    <div key={key} className={cn(classes.iconBox, className)}>
      <Icon />
    </div>
  );
}

export { IconBox };
export type { IconBoxProps };
export default IconBox;
