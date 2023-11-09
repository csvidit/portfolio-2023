import Footer from "../Footer/Footer";
import MainGridItem from "../MainGridItem";
import SecondaryButton from "../SecondaryButton";
import TermsSectionHeader from "./TermsSectionHeader";

const Terms = () => {
  return (
    <>
      <MainGridItem width={4} height={4} className="text-justify">
        <TermsSectionHeader>general copyright notice</TermsSectionHeader>
        <p className="font-bold">
          The Vidit Khandelwal Portfolio is a collection of projects, writings,
          and photography by Vidit Khandelwal. It is coprighted intellectual
          property and its contents shall not be copied under any circumstances
          without written approval from a @viditkhandelwal.com email address.
        </p>
        <p>
          The content, design, and code of this website, located at
          https://viditkhandelwal.com (referred to as &ldquo;the
          Website&rdquo;), are protected by copyright laws and international
          treaties. You may not copy, distribute, modify, reproduce, or use any
          portion of the Website, including but not limited to its text, images,
          design, source code, and any other elements, without the prior written
          consent of Vidit Khandelwal. All materials on the Website, including
          but not limited to text, graphics, logos, icons, images, audio clips,
          and software, are the property of Vidit Khandelwal or the respective
          content creators, and are protected by international copyright and
          trademark laws. You may not use the Website or any of its contents for
          any purpose that is not expressly permitted by these terms and
          conditions. Unauthorized use of the Website or its content may give
          rise to a claim for damages and/or be a criminal offense. Any
          trademarks, service marks, or logos displayed on the Website are the
          property of their respective owners and may not be used without their
          prior written consent. You may use the Website for personal,
          non-commercial purposes only. You may download and print a single copy
          of the Website&rsquo;s content for your personal use, provided that
          you keep intact all copyright and other proprietary notices. If you
          wish to use any content from the Website for purposes other than those
          allowed under this copyright notice, please contact Vidit Khandelwal
          to request permission. Vidit Khandelwal reserves the right to change,
          modify, or update these terms at any time without prior notice. By
          using the Website, you agree to be bound by the most current version
          of this copyright notice.
        </p>
        <div className="inline-flex items-center space-x-1">
          <p>
            For questions or inquiries regarding this copyright notice, please
            contact Vidit Khandelwal at
          </p>
          <SecondaryButton
            variant="plain"
            href="mailto:legal@viditkhandelwal.com"
            external
          >
            legal@viditkhandelwal.com
          </SecondaryButton>
        </div>
        <TermsSectionHeader>copyright - projects</TermsSectionHeader>
        <p>
          All projects are copyrighted intellectual property unless explicitly
          specified in their GitHub repository. If any project does not have a
          publicly available GitHub repository, they are also assumed to be
          copyrighted without any license.
        </p>
        <p>
          Projects may be copied, replicated, reproduced, forked, or used in
          accordance with the license specified in their GitHub repository,
          should one exist.
        </p>
      </MainGridItem>
      <Footer />
    </>
  );
};

export default Terms;
