import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, CircleCheckBig } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogDescription,
} from "../../ui/alert-dialog";

const News = ({ theme }) => {
  return (
    <Card className='mx-auto max-w-screen-xl text-center'>
      <section className='w-full py-5 md:py-5 lg:py-5 text-left'>
        <section className='w-full pb-5 md:pb-5 lg:pb-5'>
          <div className='px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-3'>
                <div
                  tabIndex='0'
                  className='inline-block rounded-sm px-3 py-1 mb-1 text-sm bg-muted-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                >
                  Explore
                </div>
                <h2 className='heading-2 font-interExtraBold'>Latest News</h2>
                <p className='container md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Top stories and in-depth analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          role='region'
          aria-labelledby='news-section-heading'
          className='grid grid-cols-1 gap-6 px-4 md:grid-cols-1 md:px-6 lg:grid-cols-[1.7fr_1.5fr]'
        >
          <div className='space-y-3 lg:space-y-4'>
            <img
              tabIndex='0'
              alt='A city skyline with buildings and a cloudy sky'
              className='aspect-video w-full overflow-hidden rounded-lg object-cover focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
              height={280}
              src='https://images.unsplash.com/photo-1616873354936-b9e21b744c54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              width={500}
              style={{
                filter: "grayscale(100%)",
                mixBlendMode: theme == "dark" ? "color-dodge" : "multiply",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
              }}
            />
            <div className='space-y-3'>
              <div
                tabIndex='0'
                className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10'
              >
                Global Health
              </div>
              <h2>
                <Link
                  className='text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                  href='#'
                >
                  Educating the Public on the Exposome
                </Link>
              </h2>
              <div className='flex items-center space-x-3'>
                <div className='text-muted-foreground'>
                  <time dateTime='2023-04-15'>April 15, 2023</time>
                </div>
              </div>
              <p>
                Through targeted educational campaigns and the effective use of
                digital media, public health officials can demystify complex
                scientific concepts and empower individuals to take charge of
                their environmental health.
              </p>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>
                  Read more{" "}
                  <span>
                    <ChevronRight className='w-5' />
                  </span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className='space-y-3'>
                    <div
                      tabIndex='0'
                      className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10'
                    >
                      Global Health
                    </div>
                    <h3 className='text-3xl font-medium'>
                      <span
                        className='hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                        href='#'
                      >
                        Educating the Public on the Exposome
                      </span>
                    </h3>
                    <div className='flex items-center space-x-3'>
                      <div className='text-muted-foreground'>
                        <time dateTime='2023-04-15'>April 15, 2023</time>
                      </div>
                    </div>
                    <p>
                      Through targeted educational campaigns and the effective
                      use of digital media, public health officials can
                      demystify complex scientific concepts and empower
                      individuals to take charge of their environmental health.
                    </p>
                  </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className='space-y-6'>
            <div className='space-y-3'>
              <div className='space-y-2'>
                <div
                  tabIndex='0'
                  className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10'
                >
                  Research and Development
                </div>
                <h3 className='text-lg font-medium'>
                  <Link
                    className='hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                    href='#'
                  >
                    New Technologies and Discoveries
                  </Link>
                </h3>
                <div className='text-muted-foreground'>
                  <time dateTime='2023-03-28'>March 28, 2023</time>
                </div>
                <p>
                  Recent discoveries, powered by interdisciplinary approaches
                  and advanced computing, are not only reshaping our scientific
                  understandings but also paving the way for innovative public
                  health interventions.
                </p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant='gray'
                    size='sm'
                    className='mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                  >
                    Read more{" "}
                    <span>
                      <ChevronRight className='w-5' />
                    </span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader></AlertDialogHeader>
                  <div className='space-y-2'>
                    <div
                      tabIndex='0'
                      className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10'
                    >
                      Research and Development
                    </div>
                    <h3 className='text-3xl font-medium'>
                      <span
                        className='hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                        href='#'
                      >
                        New Technologies and Discoveries{" "}
                      </span>
                    </h3>
                    <div className='text-muted-foreground'>
                      <time dateTime='2023-03-28'>March 28, 2023</time>
                    </div>
                    <p>
                      Recent discoveries, powered by interdisciplinary
                      approaches and advanced computing, are not only reshaping
                      our scientific understandings but also paving the way for
                      innovative public health interventions.
                    </p>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className='space-y-3'>
              <div className='space-y-2'>
                <div
                  tabIndex='0'
                  className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10'
                >
                  Policy and Advocacy
                </div>
                <h3 className='text-lg font-medium'>
                  <Link
                    className='hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                    href='#'
                  >
                    The Role of Exposome Data in Environmental Justice
                  </Link>
                </h3>
                <div className='text-muted-foreground'>
                  <time dateTime='2023-01-20'>January 20, 2023</time>
                </div>
                <p>
                  By empowering communities with data, advocacy groups can
                  challenge and change policies that perpetuate environmental
                  inequalities, advocating for a fairer distribution of
                  environmental risks and offer impactful results.
                </p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant='gray'
                    size='sm'
                    className='mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                  >
                    Read more{" "}
                    <span>
                      <ChevronRight className='w-5' />
                    </span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader></AlertDialogHeader>
                  <div className='space-y-2'>
                    <div
                      tabIndex='0'
                      className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10'
                    >
                      Policy and Advocacy
                    </div>
                    <h3 className='text-3xl font-medium'>
                      <span
                        className='hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                        href='#'
                      >
                        The Role of Exposome Data in Environmental Justice
                      </span>
                    </h3>
                    <div className='text-muted-foreground'>
                      <time dateTime='2023-01-20'>January 20, 2023</time>
                    </div>
                    <p>
                      By empowering communities with data, advocacy groups can
                      challenge and change policies that perpetuate
                      environmental inequalities, advocating for a fairer
                      distribution of environmental risks and offer impactful
                      results.
                    </p>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className='space-y-3'>
              <div className='space-y-2'>
                <div
                  tabIndex='0'
                  className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10'
                >
                  Policy and Regulation
                </div>
                <h3 className='text-lg font-medium'>
                  <Link
                    className='hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                    href='#'
                  >
                    How Policy is Shaped by Environmental Exposome Data
                  </Link>
                </h3>
                <div className='text-muted-foreground'>
                  <time dateTime='2023-01-20'>January 20, 2023</time>
                </div>
                <p>
                  Across the globe, policymakers are increasingly relying on
                  comprehensive environmental exposome data to draft
                  regulations, influence decisions, pave futures that directly
                  benefit public health.
                </p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant='gray'
                    size='sm'
                    className='mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                  >
                    Read more{" "}
                    <span>
                      <ChevronRight className='w-5' />
                    </span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader></AlertDialogHeader>
                  <div className='space-y-2'>
                    <div
                      tabIndex='0'
                      className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10'
                    >
                      Policy and Regulation
                    </div>
                    <h3 className='text-3xl font-medium'>
                      <span
                        className='hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                        href='#'
                      >
                        How Policy is Shaped by Environmental Exposome Data
                      </span>
                    </h3>
                    <div className='text-muted-foreground'>
                      <time dateTime='2023-01-20'>January 20, 2023</time>
                    </div>
                    <p>
                      Across the globe, policymakers are increasingly relying on
                      comprehensive environmental exposome data to draft
                      regulations, influence decisions, pave futures that
                      directly benefit public health.
                    </p>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default News;
