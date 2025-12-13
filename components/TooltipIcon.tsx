import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});

type TooltipIconProps = {
  tooltip: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const TooltipIcon = ({
  tooltip,
  children,
  className,
  onClick,
}: TooltipIconProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild onClick={onClick}>
        {children}
      </TooltipTrigger>
      <TooltipContent className={`${notoSans.className} font-bold text-lg`}>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipIcon;
