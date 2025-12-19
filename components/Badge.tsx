import { Londrina_Sketch } from "next/font/google";

const sketch = Londrina_Sketch({
  weight: "400",
  subsets: ["latin"],
});

type BadgeProps = {
    text: string;
    color?: string;
}
const Badge = ({ text, color }: BadgeProps) => {
    return ( <div style={{ backgroundColor: color }} className={`flex justify-center items-center w-24 [clip-path:polygon(50%_0%,90%_20%,100%_60%,75%_100%,25%_100%,0%_60%,10%_20%)] bg-purple-600 ${sketch.className} text-stone-200`}>
        {text}
    </div> );
}
 
export default Badge;