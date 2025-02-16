import { Card } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";

const PrivacyPolicy = () => {
  const privatePolicyUpdatedDate = "May 8, 2024";

  return (
    <>
      <Card className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12'>
        <div className='space-y-4'>
          <p
            aria-label='Details on last update of privacy policy'
            tabIndex='0'
            href='#'
            className='inline-flex justify-between items-center py-1 px-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
          >
            <span className='text-xs font-semibold bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3'>
              Updated {privatePolicyUpdatedDate}
            </span>
            <span className='text-sm font-medium'>Privacy Policy</span>
            <CircleCheckBig className='mt-0.5 ml-2 w-5 h-5' />
          </p>
          <h3 className='heading-2'>Protecting your privacy</h3>
          <p>Learn more about how we collect data and your rights as a user.</p>
          <div className='text-left space-y-3 font-interLight'>
            <p>
              By accessing and utilizing our websites, applications, services,
              technologies, APIs, widgets, or any other products or features
              provided by us (collectively referred to as the 'Services'), you
              acknowledge that you willingly disclose certain information.
            </p>
            <p>
              We reserve the right to periodically review and update these
              Terms, and your continued use of the Service following any such
              revisions constitutes acceptance of those changes. It is your
              responsibility to regularly check for updates to these Terms.
            </p>
            <ul className='list-disc ml-8 mb-4 space-y-3'>
              <li>
                Account: Upon registration for our Services, we can gather
                essential details such as your name, email address, date of
                birth, gender, country of residence, as well as your indicated
                interests and preferred language.
              </li>
              <li>
                Content: We can collect information when you save, upload, or
                generate content, including but not limited to photos, videos,
                text, and any other media format. This includes interactions
                with other users, such as sending messages or engaging in
                discussions. Additionally, we may collect data related to how
                you interact with content on our platform, including views,
                likes, shares, and comments.
              </li>
              <li>
                Location: You consent to the collection and use of your exact
                geographical coordinates. This information may be utilized to
                enhance your experience, such as providing location-based
                services or personalized content.
              </li>
              <li>
                Communications: When you engage in any form of communication
                with us, we may collect the content of these communications.
                This includes but is not limited to messages exchanged via
                email, chat, phone calls, or any other means of correspondence.
              </li>
            </ul>
            <h4 className='text-2xl'>Technical Information</h4>
            <p>
              By accessing and utilizing our website, mobile application, or any
              other internet-based service, various forms of internet and
              electronic network activity data are automatically generated and
              recorded. This practice extends to your usage of our Services as
              well.
            </p>
            <ul className='list-disc ml-8 mb-4 space-y-3'>
              <li>
                Device: As part of our service, we gather details regarding the
                device utilized to access our platform. This may encompass the
                device type, operating system, network service provider, device
                settings, and distinctive device identifiers. We ensure the
                confidentiality and security of this information in accordance
                with our Privacy Policy.
              </li>
              <li>
                Logs: When using our Services, we automatically collect log data
                such as your IP address, date, time of access, browser type, and
                device identifiers. This information helps us analyze usage
                patterns, enhance user experience, and ensure security.
              </li>
              <li>
                Cookies and Similar Technologies: In addition to other data
                collection methods, we utilize 'cookies' and similar
                technologies to gather log data. These technologies help enhance
                your experience with our Services. For instance, cookies are
                employed to retain your language preferences and settings,
                eliminating the need for you to reconfigure them each time you
                access our platform.
              </li>
              <li>
                Geolocation: We utilize your IP address to estimate your general
                location, even in instances where you do not explicitly provide
                your exact coordinates. Additionally, please be aware that any
                photos you share may contain metadata disclosing the location at
                which they were captured.
              </li>
              <li>
                User Choices: We respect your preferences and will keep track of
                your settings, including privacy and notification preferences,
                to personalize your experience while ensuring transparency in
                data management.
              </li>
            </ul>
            <h4 className='text-2xl'>Our Partners</h4>
            <p>
              We may also obtain information concerning you and your activities
              beyond the scope of our Services from our affiliated companies,
              advertisers, partners, and other third parties with whom we
              collaborate.
            </p>
            <ul className='list-disc ml-8 mb-4 space-y-3'>
              <li>
                Third-party Platforms: When you use a third-party platform (like
                Facebook or Google) to register or log into our Service, they
                may share certain information with us to help create or access
                your account. This includes basic profile details such as your
                name and email address. By using these platforms to access our
                Service, you agree to our Privacy Policy. Please note that your
                interactions with third-party platforms are governed by their
                terms and privacy policies.
              </li>
              <li>
                Technical Service Partners: At times, we may acquire information
                about you through our technical service partners, which may
                include data obtained from marketing firms. These technical
                service partners assist can us in providing and improving our
                services, such as analytics, advertising, and customer support.
              </li>
              <li>
                Advertisers or other partners: We may receive information from
                online advertisers or third parties to measure, report, or
                enhance the effectiveness of advertisements on our Services.
                This data helps us optimize the ad experience and tailor
                advertisements to better suit your preferences and interests
                while using our Services.
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PrivacyPolicy;
