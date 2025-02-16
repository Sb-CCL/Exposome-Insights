import { Card } from "@/components/ui/card";
import React from "react";

export default function CenteredFeature({ theme }) {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1576502202167-791eca35a78d?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Data curation process",
      title: "Curate and Integrate Data Effectively",
      description:
        "We curate and integrate data from various sources, ensuring its relevance and reliability for public health decision-making.",
    },
    {
      src: "https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Analyzing public health data",
      title: "Analyze and Interpret Data Insights",
      description:
        "Our team of experts analyzes and interprets data insights, providing valuable information for evidence-based public health policies.",
    },
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Team collaboration for public health",
      title: "Collaborate for Effective Public Health Strategies",
      description:
        "We collaborate with researchers, epidemiologists, public health officials, environmental agencies, and policy makers to develop effective strategies.",
    },
  ];

  return (
    <Card className='mx-auto max-w-screen-xl text-center'>
      <section className='w-full py-5' aria-label='Data curation process'>
        <div className='px-4 md:px-6'>
          <div className='grid gap-6 grid-cols-1'>
            <div className='flex flex-col justify-center gap-8'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-5'>
                  <div
                    tabIndex='0'
                    className='inline-block rounded-sm px-3 py-1 text-sm bg-muted-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                  >
                    Explain
                  </div>
                  <h2
                    id='main-heading'
                    className='text-3xl font-interExtraBold tracking-tighter sm:text-5xl'
                  >
                    Streamline Data Curation for Public Health Strategies
                  </h2>
                  <p className='md:text-xl lg:text-base xl:text-xl'>
                    Data curation processes integrate vital information into
                    public health strategies, providing actionable insights for
                    researchers, epidemiologists, public health officials,
                    environmental agencies, and policy makers.
                  </p>
                </div>
              </div>
              <div className='mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
                {images.map((image, index) => (
                  <div
                    className='space-y-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 rounded-md'
                    key={index}
                    tabIndex='0'
                    role='article'
                    aria-label={image.title}
                  >
                    <img
                      alt={image.alt}
                      className='mx-auto aspect-video overflow-hidden rounded-sm object-cover object-center sm:w-full lg:order-last'
                      height='310'
                      src={image.src}
                      width='550'
                      style={{
                        filter: "grayscale(100%)",
                        mixBlendMode:
                          theme === "dark" ? "color-dodge" : "multiply",
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                      }}
                    />
                    <h1 className='text-2xl font-bold tracking-tighter'>
                      {image.title}
                    </h1>
                    <p>{image.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
}
