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

type ButtonProps = {
    tooltip: React.ReactNode
    children: React.ReactNode
    className?: string
}

const Button = ({ tooltip, children, className }: ButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className={`cursor-pointer`}>
         {children}
        </button>
      </TooltipTrigger>
      <TooltipContent className={`${notoSans.className} font-bold text-lg ${className}`}>{tooltip}</TooltipContent>
    </Tooltip>
  );
};

export default Button;
