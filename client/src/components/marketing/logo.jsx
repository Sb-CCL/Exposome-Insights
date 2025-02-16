import { cn } from "@/lib/utils";
import { MessageCircleDashed } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to='/'
      aria-label='Return to homepage'
      className={cn(
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 rounded-md"
      )}
    >
      <div
        className='flex lg:w-40 items-center gap-x-3'
        aria-label='Company logo'
      >
        <MessageCircleDashed className='h-10 w-10' />
        <p className={cn("font-semibold font-interMedium")}>
          <span className='hidden lg:block md:block'>Exposome Insights</span>
        </p>
      </div>
    </Link>
  );
};
