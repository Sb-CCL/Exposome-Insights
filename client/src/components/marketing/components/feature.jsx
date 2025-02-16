import { Card } from "@/components/ui/card";
import React from "react";
import HealthExposomeChart from "../charts/HealthExposomeChart";

export default function Feature() {
  return (
    <Card className='mx-auto max-w-screen-xl text-center'>
      <section className='w-full py-5 md:py-5 lg:py-5'>
        <div className='px-4 space-y-3 md:px-6 text-left'>
          <div
            tabIndex='0'
            className='inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10 mb-4 md:mb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
          >
            Examine
          </div>
          <div className='grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]'>
            <div className='flex flex-col justify-center gap-8'>
              <div className='grid grid-cols-1 gap-5 space-y-3'>
                <h1 className='text-4xl tracking-tighter text-left sm:text-5xl lg:text-6xl xl:text-5xl'>
                  Providing Comprehensive Data Curator Services for
                  Environmental and Public Health{" "}
                </h1>
                <p className='text-xl font-interBold tracking-tighter text-left'>
                  Data Curators offer expert data collection, analysis, and
                  interpretation services to support environmental health and
                  public health policy, whether it's for government agencies,
                  non-profits, or private sector stakeholders.
                </p>
              </div>
              <div className='grid grid-cols-2 gap-8'>
                <div>
                  <h1 className='text-2xl text-left font-interBold'>
                    Data Collection
                  </h1>
                  <p className='text-left pt-1'>
                    Efficiently collect and organize data to provide valuable
                    insights for research and decision-making.
                  </p>
                </div>
                <div>
                  <h1 className='text-2xl text-left font-interBold'>
                    Data Analysis
                  </h1>
                  <p className='text-left pt-1'>
                    Utilize advanced analytical techniques to uncover patterns
                    and trends in complex datasets.
                  </p>
                </div>
              </div>
            </div>
            <HealthExposomeChart
              aria-label='Pollution Asthma Visualization'
              role='img'
              aria-describedby='pollution-asthma-description'
            />
            <p id='pollution-asthma-description' hidden>
              This combined bar and line graph that represents various pollution
              and asthma incidence rate in relation to a full year, from January
              to December.
            </p>
          </div>
        </div>
      </section>
    </Card>
  );
}
