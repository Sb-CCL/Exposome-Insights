import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./logo";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF size={20} />,
    href: "https://www.facebook.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube size={20} />,
    href: "https://www.youtube.com/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
    href: "https://www.instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={20} />,
    href: "https://www.linkedin.com/",
  },
  {
    name: "Tiktok",
    icon: <FaTiktok size={20} />,
    href: "https://www.tiktok.com/en/",
  },
];

const footerLinks = [
  {
    sectionName: "About Us",
    links: ["History", "Meet the Team", "Employee Handbook", "Partnerships"],
  },
  {
    sectionName: "Resources",
    links: [
      "Exposome Data",
      "Tools and Technologies",
      "Learning Platforms",
      "Industry Reports",
    ],
  },
  {
    sectionName: "Legal",
    links: [
      "Help Center",
      <Link
        to='/privacy-policy'
        aria-label='Privacy Policy'
        style={{ textDecoration: "none" }}
      >
        Privacy Policy
      </Link>,
      <Link
        to='/terms-of-service'
        aria-label='Terms of Service'
        style={{ textDecoration: "none" }}
      >
        Terms of Service
      </Link>,
      "Accessibility",
    ],
  },
  {
    sectionName: "Explore",
    links: [
      "Publications",
      "Grants and Funding",
      "Multimedia Groups",
      "Institutions",
    ],
  },
];

export const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <footer
      className='dark:bg-[#1F1F1F] p-4 sm:p-6'
      aria-labelledby='footerHeading'
    >
      <h2 id='footerHeading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-screen-xl'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-[0.6fr,_1fr]'>
          <div>
            <div className='flex justify-center sm:justify-start'>
              <Logo />
            </div>
            <p className='mt-6 max-w-md text-center leading-relaxed sm:max-w-xs md:text-left'>
              Advancing public health with expert data curation through
              comprehensive data stewardship and engagement.
            </p>
            <nav aria-label='Social media links'>
              <ul className='mt-6 flex flex-wrap justify-center gap-6 sm:justify-start md:gap-0'>
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`Visit our ${social.name}`}
                      className='inline-block h-10 px-3 pt-[9.5px] hover:bg-accent hover:text-accent-foreground rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2'>
            {footerLinks.map((section, index) => (
              <div className='text-center sm:text-left' key={index}>
                <p className='text-lg'>{section.sectionName}</p>
                <ul
                  className='mt-8 space-y-4 text-sm'
                  aria-label={`${section.sectionName} links`}
                >
                  {section.links.map((link, linkIndex) =>
                    typeof link === "string" ? (
                      <li key={linkIndex}>
                        <a
                          className='hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50'
                          href='#'
                        >
                          {link}
                        </a>
                      </li>
                    ) : (
                      <li key={linkIndex} className='hover:underline '>
                        {link}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
