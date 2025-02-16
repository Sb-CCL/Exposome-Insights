import { Card } from "@/components/ui/card";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Collapsible } from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

const FAQ = () => {
  return (
    <Card className='w-full mx-auto max-w-screen-xl text-center'>
      <section className='w-full py-5'>
        <div className='container px-5'>
          <div className='mx-auto'>
            <div className='space-y-3'>
              <div
                tabIndex='0'
                className='inline-block rounded-sm px-3 py-1 mb-1 text-sm bg-muted-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
              >
                Enquire
              </div>
              <h2 className='heading-2 font-interExtraBold'>
                Frequently Asked Questions
              </h2>
              <p className='container md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Learn about the ethical considerations, privacy concerns, and
                regulatory frameworks that govern this field.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-left'>
              <div className='space-y-4'>
                <div className='heading-3 flex justify-center'>Curation</div>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    What is exposome and what does it encompass?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className='px-4 py-3 bg-muted-foreground/10'>
                    Exposome is a concept that encompasses all non-genetic
                    environmental exposures an individual can encounter
                    throughout their lifetime, including chemical, physical, and
                    biological factors, as well as lifestyle factors. It aims to
                    understand the complex interplay between these exposures and
                    an individual's genetic makeup in influencing health
                    outcomes.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    What types of data are included in the exposome?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    <ul class='list-disc pl-5 space-y-2'>
                      <li>
                        Environmental monitoring data (air, water, soil quality)
                      </li>
                      <li>
                        Biomonitoring data (chemical exposures measured in
                        biological samples)
                      </li>
                      <li>Geospatial data (location-based exposures)</li>
                      <li>
                        Lifestyle and behavioral data (diet, physical activity,
                        smoking)
                      </li>
                      <li>Occupational exposure data</li>
                      <li>Sensor data (wearables, smart home devices)</li>
                      <li>Omics data (genomics, metabolomics, proteomics)</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    How is public health exposome data collected and curated?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    Exposome data can be collected from various sources,
                    including population-based studies, cohort studies,
                    environmental monitoring programs, and citizen science
                    initiatives. Data curation involves standardizing,
                    integrating, and managing data from diverse sources,
                    ensuring data quality, and organizing it into accessible
                    repositories or databases.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    What are some examples of exposome databases or
                    repositories?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    <ul class='list-disc pl-5 space-y-2'>
                      <li>
                        The Exposome-Explorer Database - From the Barcelona
                        Institute for Global Health, this database contains data
                        on over 160,000 environmental exposures and their
                        biological effects.
                      </li>
                      <li>
                        The Comparative Toxicogenomics Database (CTD) - This
                        database curates interactions between environmental
                        chemicals, genes, phenotypes, diseases, and exposures.
                        It integrates data from literature, gene/protein
                        databases, and chemical databases.
                      </li>
                      <li>
                        The Human Exposome Project - This is a collaborative
                        effort to characterize exposures in humans across
                        different life stages and geographies. It aims to build
                        a data resource linking exposures to molecular
                        measurements.
                      </li>
                      <li>
                        National Health and Nutrition Examination Survey
                        (NHANES) - Released periodically by the CDC, it contains
                        information on environmental exposures like chemicals,
                        nutrients, and pollutants through biomonitoring of the
                        U.S. population.
                      </li>
                      <li>
                        ExposomeXchange - This Data Repository and Coordinating
                        Center, funded by NIEHS, aims to enable sharing and
                        integration of U.S. exposome study data and metadata
                        across different research programs.
                      </li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    What are the challenges in exposome data curation?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    Some key challenges include data heterogeneity (different
                    formats, scales, units), data integration (combining data
                    from diverse sources), data quality assurance and quality
                    control, data privacy and ethical considerations, handling
                    large volumes of complex data, and lack of standardized
                    ontologies and metadata standards.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    How is exposome data used in public health research?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    Exposome data is used to investigate the potential links
                    between environmental exposures and health outcomes, such as
                    the development of chronic diseases, adverse birth outcomes,
                    or neurodevelopmental disorders. It can also inform exposure
                    assessment, risk assessment, and the development of public
                    health policies and interventions.
                  </CollapsibleContent>
                </Collapsible>
              </div>
              <div className='space-y-4'>
                <div className='heading-3 flex justify-center'>Regulation</div>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    How is participant privacy protected in exposome studies?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    Privacy protection measures may include de-identification or
                    anonymization of data, secure data storage and access
                    controls, data use agreements, and institutional review
                    board oversight. Data sharing should adhere to applicable
                    privacy laws and regulations.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    Are there considerations for studies with vulnerable groups?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    Extra precautions may be needed when working with vulnerable
                    groups like indigenous communities or those with limited
                    decision-making capacities. This could include enhanced
                    consent processes, community engagement, and oversight to
                    ensure equitable inclusion and protection.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    How can data sharing be balanced with privacy concerns?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    Strategies such as de-identification, access controls, data
                    use agreements, differentially private data releases, and
                    synthetic data generation are a few ways to enhance privacy.
                    Clear governance and oversight are needed to weigh risks and
                    benefits of data sharing in accordance with privacy
                    protections.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    What data security practices are in exposome data curation?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    Robust data security measures like encryption, access
                    controls, audit trails, and security training are critical
                    for preventing unauthorized access or data breaches that
                    could compromise participant privacy and trust in the
                    research enterprise.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    How is participant privacy protected in exposome studies?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    Privacy protection measures may include de-identification or
                    anonymization of data, secure data storage and access
                    controls, data use agreements, and institutional review
                    board oversight. Data sharing should adhere to applicable
                    privacy laws and regulations.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 bg-muted-foreground/10 hover:bg-muted-foreground/15'>
                    What regulations govern exposome research and data?
                    <ChevronDownIcon className='h-5 w-5 transition-transform group-[data-state=open]:rotate-45' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className=' px-4 py-3 bg-muted-foreground/10'>
                    <ul class='list-disc pl-5 space-y-2'>
                      <li>
                        Health Insurance Portability and Accountability Act
                        (HIPAA) - HIPAA protects the privacy of individuals'
                        medical records and other personal health information
                        provided to health plans, doctors, hospitals, and other
                        health professionals.
                      </li>
                      <li>
                        Institutional Review Board (IRB) Oversight - IRBs review
                        research proposals to ensure ethical standards are met,
                        particularly the rights and welfare of research
                        participants.
                      </li>
                      <li>
                        International Health Regulations (IHR) - Managed by the
                        World Health Organization, IHR are global norms that
                        govern the sharing of health data across borders,
                        particularly in the context of international public
                        health emergencies.
                      </li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default FAQ;
