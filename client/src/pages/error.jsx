"use client";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const Error = ({ error }) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div
      className='py-40 flex flex-col items-center justify-center space-y-6 px-4'
      role='alert'
      aria-live='assertive'
    >
      <AlertTriangle
        size={64}
        className='text-amber-500'
        strokeWidth={1.5}
        aria-label='Alert'
        role='img'
      />
      <h1 className='text-3xl md:text-4xl font-bold'>
        Oops! We've hit a snag.
      </h1>
      <p className='text-center max-w-md'>
        Something unexpected happened on our end. Don't worry; it's not you,
        it's us. Our team has been notified and we're working on a fix.
      </p>
      <div className='space-y-4 md:space-y-0 md:space-x-4 md:flex'>
        <Button
          asChild
          variant='outline'
          className='flex items-center space-x-2'
        >
          <Link to='/'>
            <ArrowLeft size={16} className='mr-2' aria-hidden='true' />
            <span>Go back</span>
          </Link>
        </Button>
        <Button
          onClick={reloadPage}
          className='flex items-center space-x-2'
          aria-label='Try again'
        >
          <RefreshCw size={16} className='mr-2' aria-hidden='true' />
          <span>Try again</span>
        </Button>
      </div>

      <p
        className='text-sm mt-4 max-w-4xl py-1 border-l-2 border-[#FF5555] px-2 bg-[#F8D7DA] dark:bg-[#2A1E1E] text-[#FF5555]'
        role='alert'
      >
        {error ? <>Error: {error.message}</> : "Sorry, we've hit a roadblock."}
      </p>

      <p className='text-xs max-w-xs text-center'>
        We value your experience and we're sorry for this hiccup. Thank you for
        your patience!
      </p>
    </div>
  );
};

export default Error;
