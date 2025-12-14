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
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
};

const TooltipIcon = ({
  tooltip,
  children,
  onClick,
  side,
  sideOffset,
}: TooltipIconProps) => {
  return (
    <Tooltip>
      <TooltipTrigger onClick={onClick}>
        {children}
      </TooltipTrigger>
      <TooltipContent
        className={`${notoSans.className} font-bold text-lg`}
        side={side}
        sideOffset={sideOffset}
      >
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipIcon;
