import { Card } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const termsUpdatedDate = "May 8, 2024";

  return (
    <>
      <Card className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12'>
        <div className='space-y-4'>
          <p
            aria-label='Details on last update of terms of service'
            tabIndex='0'
            href='#'
            className='inline-flex justify-between items-center py-1 px-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
          >
            <span className='text-xs font-semibold bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3'>
              Updated {termsUpdatedDate}
            </span>
            <span className='text-sm font-medium'>Terms of Service</span>
            <CircleCheckBig className='mt-0.5 ml-2 w-5 h-5' />
          </p>
          <h3 className='heading-2'>Our terms of service</h3>
          <p>
            Read our terms below to learn more about your rights and
            responsibilities as a user.
          </p>
          <div className='text-left space-y-3 font-interLight'>
            <p>
              These Terms of Service ("Terms") govern your access to and use of
              any website, app, service, technology, API, widget, platform,
              channel, or any other products or features owned, operated,
              branded, or offered by us, except where we expressly state that
              separate terms (and not these) apply. For the purposes of these
              Terms, “we”, “us”, or "Service" refers to the party with whom you
              are entering into this agreement.
            </p>
            <p>
              This page delineates the terms and conditions governing your
              utilization of our online and/or mobile services, website, and
              software (collectively referred to as the 'Services'), provided on
              or in connection with our platform.
            </p>
            <h4 className='text-2xl'>Conditions of Use</h4>
            <p>
              Your access to or use of this Service constitutes your acceptance
              and agreement to adhere to the following Terms. Should you not
              consent to these Terms, kindly refrain from accessing or utilizing
              our Services.
            </p>
            <p>
              We reserve the right to periodically review and update these
              Terms, and your continued use of the Service following any such
              revisions constitutes acceptance of those changes. It is your
              responsibility to regularly check for updates to these Terms.
            </p>
            <h4 className='text-2xl'>Personal Data</h4>
            <p>
              To effectively deliver our service, it is imperative for us to
              accurately identify you and understand your interests. This
              enables us to tailor our offerings to better meet your needs and
              preferences. Your personal data serves as the foundation for this
              customization process, allowing us to provide a more personalized
              and enriching experience tailored specifically to you. For more
              information, please review our{" "}
              <Link to='/privacy-policy' className='underline'>
                Privacy Policy
              </Link>
              .
            </p>
            <h4 className='text-2xl'>Our Service</h4>
            <p>
              You may use this Service only if you follow these Terms and all
              applicable laws. Using this Service may include downloading
              software to your computer, phone, tablet or other device. You
              agree that we may automatically update that software, and these
              Terms will apply to any updates. When you create your account, you
              must provide us with accurate and complete information.
            </p>
            <p>
              Any use or access to our Service by anyone under the age of 13 is
              not allowed. If you are older than 13, you can use the Service if
              you are over the minimum age of consent in your country. If you
              are 13 to 18, you may only use the Service with the permission of
              your parent or legal guardian. Please be sure your parent or legal
              guardian has reviewed and discussed these Terms with you.
            </p>
            <p>
              If we’ve previously disabled your account for violating these
              Terms, any of our policies or for legal reasons, you will not
              create a new account without our express written permission, which
              is provided at our sole discretion. In using our Service, you
              agree not to scrape, collect, search, copy or otherwise access
              data or content from our Service in unauthorized ways, such as by
              using automated means (without our express prior permission), or
              access or attempt to access data you do not have permission to
              access.
            </p>
            <p>
              You may not use, access, download, or otherwise make available the
              Service (including related software), except as authorized by
              applicable trade restrictions, including but not limited to US, EU
              and UK sanctions and export controls. You agree not to use the
              Service for any purpose prohibited by applicable trade
              restrictions.
            </p>
            <h4 className='text-2xl'>Your license</h4>
            <p>
              Upon your full compliance with these Terms of Service, as well as
              our established policies, we hereby extend to you a limited,
              non-exclusive, non-transferable, non-sublicensable, and revocable
              license. This license grants you the privilege to access and
              utilize the Service strictly within the boundaries delineated by
              these Terms of Service and our policies.
            </p>
            <h4 className='text-2xl'>User Content</h4>
            <p>
              This Service will allow you to post content, including photos,
              videos, comments, links, and other materials. For the purpose of
              these Terms, anything that you post or otherwise make available on
              our Service is referred to as "User Content." You retain all
              rights in, and are solely responsible for, the User Content you
              post to our Service. All User Content must comply with these
              Terms.
            </p>
            <p>
              You will only post User Content that you have the rights to post,
              and you won’t post User Content that infringes the intellectual
              property rights of others (e.g., copyright infringement, trademark
              infringement or counterfeit), or that is otherwise unlawful,
              unless an exception or limitation applies under applicable law. We
              can take action against User Content that violates these Terms or
              our policies or where we are permitted or required by law, such as
              by removing, restricting, or limiting access to, or distribution
              of, the content.
            </p>
            <p>
              We can also suspend or terminate accounts of users who repeatedly
              or seriously infringe third-party intellectual property rights,
              violate the law, these Terms, or our policies, or where permitted
              or required to do so by law. We are a neutral intermediary and we
              do not review all User Content before or after it is published on
              the Service, so we are not responsible or liable to any third
              party for the content or accuracy of any User Content posted by
              you or any other user.
            </p>
            <h4 className='text-2xl'>Retention and Usage of User Content</h4>
            <p>
              After termination or deactivation of your account, or removal of
              User Content from our Service, we reserve the right to retain your
              User Content for a reasonable period to facilitate backup,
              archival, or audit purposes. We, as well as other users, may
              continue to access, store, display, reproduce, modify, create
              derivative works from, perform, and distribute any of your User
              Content that you or others have stored or shared on our Service.
            </p>
            <ul className='list-disc ml-8 mb-4 space-y-3'>
              <li>
                By posting content, you grant us permission to use it for
                service enhancement purposes.
              </li>
              <li>
                Copies of shared content may endure even after your account or
                the content is deleted.
              </li>
            </ul>

            <h4 className='text-2xl'>Security of User Content and Account</h4>

            <p>
              We prioritize the security of our users and are committed to
              safeguarding your User Content and account. Despite our continuous
              efforts to fortify our security measures, it's important to
              acknowledge that absolute protection against unauthorized access
              cannot be guaranteed. We remain vigilant in our efforts to
              mitigate risks and maintain the integrity of our platform.
            </p>

            <p>
              Your cooperation in maintaining the security of your account is
              essential. Please ensure the confidentiality of your password and
              refrain from sharing it with any other individual or entity. Be
              mindful of adopting strong, unique passwords and consider
              utilizing additional security features such as two-factor
              authentication for enhanced protection if and when it's availible.
            </p>

            <p>
              In the event of any suspected unauthorized access to your account
              or any security breach, we urge you to promptly notify us. Your
              timely communication enables us to take swift action to
              investigate and address the situation, thereby minimizing
              potential risks and preserving the security of your account and
              User Content.
            </p>

            <h4 className='text-2xl'>
              Third-Party Links and Content Disclaimer
            </h4>
            <p>
              Our Service may include links to third-party websites,
              advertisements, services, software components, special offers, or
              other events or activities that are not owned or operated by us.
              Please note that we do not endorse or assume any responsibility
              for the content, privacy policies, or practices of any third-party
              websites, services, or offerings.
            </p>

            <p>
              By accessing or utilizing any third-party website, service, or
              content from our Service, you acknowledge and agree that we are
              not liable for any damages, losses, or liabilities incurred as a
              result of your interaction with or reliance on any third-party
              website, service, or content. You proceed at your own risk, and we
              strongly advise reviewing the terms of service and privacy
              policies of any third-party websites or services before engaging
              with them.
            </p>

            <p>
              Additionally, any reference or link to a third-party website,
              service, or content does not imply our endorsement, sponsorship,
              or recommendation. We encourage you to exercise caution and
              discretion when navigating external links or engaging with
              third-party content. By using our Service, you agree to release us
              from any and all liability arising from your use of, interaction
              with, or reliance on any third-party websites, services, or
              content.
            </p>

            <h4 className='text-2xl'>Termination or Suspension of Service</h4>
            <p>
              We reserve the right to terminate or suspend your access to or use
              of our Service in the event of any violation of these Terms of
              Service. Such violations include, but are not limited to, engaging
              in prohibited activities or behavior that undermines the integrity
              of our Service. Termination or suspension may occur at our
              discretion, and we will strive to provide notice of such actions
              unless circumstances require immediate action to protect the
              interests of our users or the Service itself.
            </p>

            <h4 className='text-2xl'>Disclaimer of Warranties</h4>
            <p>
              We strive to provide the best possible service, but please
              understand that your use of our service is at your own risk. The
              service, including all content therein, is provided on an "as is"
              basis without warranty of any kind, whether express or implied. We
              specifically disclaim any and all warranties and conditions of
              merchantability, fitness for a particular purpose, and
              non-infringement, as well as any warranties arising out of course
              of dealing or usage of trade.
            </p>

            <p>
              While we endeavor to maintain a safe and pleasant environment, we
              cannot take responsibility for the content posted or sent by users
              of the service. You understand and agree that you may encounter
              user-generated content that is inaccurate, objectionable,
              inappropriate for children, or otherwise unsuited to your needs.
              We do not guarantee the accuracy, completeness, or currency of the
              service or any materials or content offered through it. We also
              cannot guarantee that the service will be uninterrupted, secure,
              or free of errors, viruses, or other harmful components.
            </p>

            <p>
              We may modify or discontinue the service for various reasons,
              without prior notice. We will not be liable for any such changes,
              or for any suspension or termination of your access to or use of
              the service. To the fullest extent permitted by applicable law, we
              limit our liability for any damages arising out of your use of the
              service or inability to use the service. This includes direct,
              indirect, incidental, consequential, special, and punitive
              damages, even if we have been advised of the possibility of such
              damages.
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TermsOfService;
