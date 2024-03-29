import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
export default IconButton;
