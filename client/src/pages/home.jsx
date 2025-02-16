import CenteredFeature from "@/components/marketing/components/centeredFeature";
import FAQ from "@/components/marketing/components/faq";
import Feature from "@/components/marketing/components/feature";
import { HeroSection } from "@/components/marketing/components/hero";
import News from "@/components/marketing/components/news";
import { useTheme } from "next-themes";
import React from "react";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className='min-h-full flex flex-col dark:bg-[#1F1F1F]'>
        <div className='md:justify-start text-center flex-1 dark:bg-[#1F1F1F] flex flex-col items-center justify-center lg:px-30'>
          <HeroSection />
          <News theme={theme} />
          <Feature />
          <FAQ />
          <CenteredFeature theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Home;
