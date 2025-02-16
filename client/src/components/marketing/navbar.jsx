import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { UserNav } from "./userNav";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { user, isLoading } = useAuthContext();
  const scrolled = useScrollTop();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading]);

  if (loading) {
    return;
  }

  return (
    <nav
      className={cn(
        "z-50 bg-[#f5f5f5] text-black border border-transparent dark:bg-[#1F1F1F] dark:text-white fixed top-0 flex justify-between items-center w-full p-6",
        scrolled &&
          "bg-background dark:bg-accent border shadow-[rgba(0,0,0,0.08)_0px_2px_4px_0px]"
      )}
      aria-label='Main navigation'
    >
      <Logo alt='Company Logo' />
      <div className='md:ml-auto md:justify-end justify-between lg:w-full flex items-center gap-x-2'>
        {user ? (
          <>
            <Link
              className={buttonVariants({
                variant: scrolled ? "gray" : "ghost",
                size: "sm",
              })}
              to='/dashboard'
              aria-label='Dashboard'
            >
              Dashboard
            </Link>
            <UserNav />
          </>
        ) : (
          <>
            <Link
              className={buttonVariants({
                variant: scrolled ? "gray" : "ghost",
                size: "sm",
              })}
              to='/login'
              aria-label='Login to your account'
            >
              Login
            </Link>
            <Link
              className={buttonVariants({ variant: "scarlet", size: "sm" })}
              to='/register'
              aria-label='Register for an account'
            >
              Join Today
            </Link>
          </>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
