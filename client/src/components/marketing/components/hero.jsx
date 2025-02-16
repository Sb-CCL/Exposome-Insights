import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EnvironmentalHeatmap from "../charts/EnvironmentalHeatmap";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
} from "../../ui/alert-dialog";

export const HeroSection = () => {
  const screenWidth = () => {
    return window.innerWidth <= 400;
  };

  const [isSmallScreen, setIsSmallScreen] = useState(screenWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(screenWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Card className='mx-auto max-w-screen-xl text-center'>
      <section
        className='w-full py-5 md:py-5 lg:py-5'
        aria-labelledby='hero-heading'
      >
        <div className='px-4 md:px-6'>
          <div className='grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]'>
            <div className='space-y-4 text-center lg:text-left'>
              <div
                tabIndex='0'
                className='inline-block rounded-sm text-left px-3 py-1 text-sm bg-muted-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
              >
                Empower
              </div>
              <div className='space-y-6'>
                <h1
                  id='hero-heading'
                  className='heading-1 text-center lg:text-left font-interExtraBold'
                >
                  Empowering{" "}
                  <span className='text-[#BF2242]'>Public Health</span> Through
                  Exposome Data
                </h1>
                <p className='lg:max-w-[600px] text-xl font-interBold tracking-tighter text-center lg:text-left pb-3 md:text-xl'>
                  Discover the impact of environmental factors on public health
                  and drive evidence-based policies. Utilize comprehensive
                  analytics and robust data-driven approaches to uncover key
                  trends and actionable insights.
                </p>
              </div>
              <div className='flex flex-col justify-center lg:justify-start gap-2 lg:min-[400px]:flex-row'>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      // size='lg'
                      size={isSmallScreen ? "default" : "lg"}
                      aria-label='Learn more about public health data'
                    >
                      Public Health Exposome Data Curators
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <div className='space-y-3'>
                        <div
                          tabIndex='0'
                          className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10'
                        >
                          Empower
                        </div>
                        <h3 className='text-3xl font-medium'>
                          What is a Public Health Exposome Data Curator?
                        </h3>
                        <div className='font-interLight'>
                          A Public Health Exposome Data Curator is an individual
                          who is committed to using and leveraging exposome data
                          to enhance public health outcomes.
                        </div>
                        {/* <div className='font-interLight'>
                          They are adept at managing large datasets and are
                          committed to ensuring data integrity for the purposes
                          of research and policymaking.
                        </div> */}
                        <div className='font-interLight'>
                          Their expertise facilitates and helps derive
                          meaningful insights that inform strategic decisions to
                          support impactful policy developments.
                        </div>
                      </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <EnvironmentalHeatmap
              aria-label='Environmental Heatmap Visualization'
              role='img'
              aria-describedby='heatmap-description'
            />
            <p id='heatmap-description' hidden>
              This heatmap represents various environmental factors affecting
              public health in different regions.
            </p>
          </div>
        </div>
      </section>
    </Card>
  );
};
