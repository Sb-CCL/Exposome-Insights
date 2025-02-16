"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className='py-40 flex flex-col items-center justify-center space-y-6 px-4'>
      <AlertTriangle
        size={64}
        className='text-amber-500'
        strokeWidth={1.5}
        aria-label='Error icon'
      />
      <h1 className='text-3xl md:text-4xl font-bold'>
        404 - This Page Could Not Be Found
      </h1>
      <p className='text-center max-w-md'>
        It looks like the page you're trying to access is no longer available.
        It may have been moved or deleted.
      </p>
      <div className='space-y-4 md:space-y-0 md:space-x-4 md:flex'>
        <Button
          asChild
          variant='outline'
          className='flex items-center space-x-2'
          aria-label='Go back home'
        >
          <Link to='/'>
            <ArrowLeft size={16} className='mr-2' aria-hidden='true' />
            <span>Go back</span>
          </Link>
        </Button>
        <Button
          onClick={reloadPage}
          className='flex items-center space-x-2'
          aria-label='Try reloading'
        >
          <RefreshCw size={16} className='mr-2' aria-hidden='true' />
          <span>Try reloading</span>
        </Button>
      </div>
      <p className='text-sm mt-4 max-w-4xl py-1 border-l-2 border-[#FF5555] px-2 bg-[#F8D7DA] dark:bg-[#2A1E1E] text-[#FF5555]'>
        Error: We couldn't find the page you were looking for.
      </p>
      <p className='text-xs max-w-xs text-center'>
        We value your experience and we're sorry for this inconvenience. Thank
        you for your patience!
      </p>
    </div>
  );
}
