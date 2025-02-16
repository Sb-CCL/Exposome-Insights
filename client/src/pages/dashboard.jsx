import TicketData from "@/components/main/ticketData";
import TicketForm from "@/components/main/ticketForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthContext } from "@/hooks/useAuthContext";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const { user } = useAuthContext();
  const [showTicketData, setShowTicketData] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTicketData(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showTicketData ? (
        <>
          <div
            className='text-2xl px-1 pb-3 mx-auto max-w-screen-xl text-left md:text-left'
            aria-label='Shows your first name'
          >
            {user ? (
              <p
                className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 rounded-md'
                tabIndex='0'
              >
                {" "}
                Hello, {user.firstName}
              </p>
            ) : (
              <Skeleton className='w-48 h-[26px] rounded-sm' />
            )}
          </div>
          <div className='grid mx-auto max-w-screen-xl text-center md:grid-cols-[3fr_1fr] md:gap-4 lg:grid-cols-[3fr_1fr] lg:gap-4'>
            <TicketData />
            <div>
              {showTicketData ? (
                <TicketForm />
              ) : (
                <Card className='mx-auto lg:w-96 md:w-72 max-w-sm'>
                  <form>
                    <CardHeader>
                      <CardTitle className='text-xl flex justify-center'>
                        <Skeleton className='w-32 h-[27px] mb-2 rounded-sm' />
                      </CardTitle>
                      <CardDescription className='flex justify-center text-muted-foreground'>
                        <Skeleton className='w-40 h-[13px] rounded-sm' />
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='text-left'>
                      <div className='grid gap-4'>
                        <div className='grid gap-2'>
                          <Label htmlFor='first-name'>
                            <Skeleton className='w-10 h-[13px] rounded-sm' />
                          </Label>
                          <Skeleton className='w-50 h-[40px] rounded-sm' />
                        </div>
                        <div className='grid gap-2'>
                          <Skeleton className='w-10 h-[13px] rounded-sm' />
                          <Skeleton className='w-50 h-[40px] rounded-sm' />
                        </div>
                        <div className='grid gap-2'>
                          <Skeleton className='w-10 h-[13px] rounded-sm' />
                          <Skeleton className='w-50 h-[40px] rounded-sm' />
                        </div>
                        <div className='grid gap-2'>
                          <Skeleton className='w-20 h-[13px] rounded-sm' />
                          <Skeleton className='w-50 h-[80px] rounded-sm' />
                        </div>
                        <Skeleton className='w-50 h-[40px] rounded-sm' />
                      </div>
                    </CardContent>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='text-2xl px-1 mb-[7px] pb-3 mx-auto max-w-screen-xl text-left md:text-left'>
            <Skeleton className='w-32 h-[25px] rounded-sm' />
          </div>
          <div className='grid mx-auto max-w-screen-xl text-center md:grid-cols-[3fr_1fr] md:gap-4 lg:grid-cols-[3fr_1fr] lg:gap-4'>
            <div className='order-last md:order-first lg:order-first'>
              <div
                id='tickets'
                className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4'
              >
                {[...Array(12)].map((_, index) => (
                  <Card
                    key={index}
                    className='flex flex-col justify-between p-5 h-full'
                  >
                    <div className='text-xs pb-4 flex justify-center text-muted-foreground'>
                      <Skeleton className='w-20 h-[13px] rounded-sm' />
                    </div>
                    <CardTitle className='flex justify-center'>
                      <Skeleton className='w-[150px] h-[20px] rounded-sm' />
                    </CardTitle>
                    <CardDescription className='flex flex-col justify-between flex-grow'>
                      <div className='grid pt-5 pb-3 flex-grow gap-1'>
                        <Skeleton className='w-1/2 h-[15px] rounded-sm' />
                        <Skeleton className='flex-grow h-[15px] rounded-sm' />
                        <Skeleton className='w-[180px] h-[15px] rounded-sm' />
                      </div>
                      <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                          <Skeleton className='w-[50px] h-[20px] rounded-sm' />
                          <Skeleton className='w-[50px] h-[20px] rounded-sm' />
                        </div>
                        <div className='flex items-center gap-2'>
                          <Skeleton className='w-[30px] h-[30px] rounded-sm' />
                          <Skeleton className='w-[30px] h-[30px] rounded-sm' />
                        </div>
                      </div>
                    </CardDescription>
                  </Card>
                ))}
              </div>
            </div>

            <div id='form'>
              <Card className='mx-auto lg:w-96 md:w-72 max-w-sm'>
                <form>
                  <CardHeader>
                    <CardTitle className='text-xl flex justify-center'>
                      <Skeleton className='w-32 h-[27px] mb-2 rounded-sm' />
                    </CardTitle>
                    <CardDescription className='flex justify-center text-muted-foreground'>
                      <Skeleton className='w-40 h-[13px] rounded-sm' />
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='text-left'>
                    <div className='grid gap-4'>
                      <div className='grid gap-2'>
                        <Label htmlFor='first-name'>
                          <Skeleton className='w-10 h-[13px] rounded-sm' />
                        </Label>
                        <Skeleton className='w-50 h-[40px] rounded-sm' />
                      </div>
                      <div className='grid gap-2'>
                        <Skeleton className='w-10 h-[13px] rounded-sm' />
                        <Skeleton className='w-50 h-[40px] rounded-sm' />
                      </div>
                      <div className='grid gap-2'>
                        <Skeleton className='w-10 h-[13px] rounded-sm' />
                        <Skeleton className='w-50 h-[40px] rounded-sm' />
                      </div>
                      <div className='grid gap-2'>
                        <Skeleton className='w-20 h-[13px] rounded-sm' />
                        <Skeleton className='w-50 h-[80px] rounded-sm' />
                      </div>
                      <Skeleton className='w-50 h-[40px] rounded-sm' />
                    </div>
                  </CardContent>
                </form>
              </Card>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
