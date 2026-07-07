import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | CYBERNOVR",
  description: "CYBERNOVR Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto bg-white text-zinc-900 antialiased">
      <div className="max-w-3xl text-left space-y-10">

        {/* Header */}
        <div className="border-b border-zinc-200 pb-8">
          <span className="inline-block font-mono text-red-700 text-sm font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 uppercase mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 text-base font-medium">Last updated: May 18, 2025</p>
        </div>

        {/* Intro */}
        <section className="space-y-4 text-sm text-zinc-600 leading-relaxed">
          <p>
            At CYBERNOVR, we take your privacy as seriously as you do. One of our main priorities is the privacy of our website visitors and customers. This Privacy Policy document contains types of information that is collected and recorded by CYBERNOVR and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>
          <p>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect on our website. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>
        </section>

        {/* Consent */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Consent</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Information We Collect</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            When you register for an Account, we may ask for your contact information, including items such as name, company/school name, physical address, email address, and telephone number.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">How We Use Your Information</h2>
          <ul className="list-disc pl-5 text-sm text-zinc-600 leading-relaxed space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website to better serve you</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
        </section>

        {/* Log Files */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Log Files</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            CYBERNOVR follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
          </p>
        </section>

        {/* Data Retention */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">How Long Do We Keep the Information We Collect?</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            We will keep your Personal Data for as long as necessary to fulfill the original purpose of collection, comply with legal obligations, resolve disputes, or enforce our agreements. The retention period is determined based on the amount, type, and sensitivity of your data, the risk of harm from unauthorized use or disclosure, whether we can achieve our goals through other methods, and applicable legal requirements such as statutes of limitations.
          </p>
        </section>

        {/* Advertising Partners */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Advertising Partners Privacy Policies</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            You may consult this list to find the Privacy Policy for each of the advertising partners of CYBERNOVR. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on our website, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Note that CYBERNOVR has no access to or control over these cookies that are used by third-party advertisers.
          </p>
        </section>

        {/* Third Party Privacy Policies */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Third Party Privacy Policies</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            CYBERNOVR&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
          </p>
        </section>

        {/* GDPR */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">GDPR Data Protection Rights</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc list-inside text-sm text-zinc-600 leading-relaxed space-y-2">
            <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
            <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
            <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>
          <p className="text-sm text-zinc-600 leading-relaxed">
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
          </p>
        </section>

        {/* Children's Information */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Children&apos;s Information</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            CYBERNOVR does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">How to Contact Us</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            If you have questions or concerns about our privacy policies and practices, you can reach us through any of the following channels:
          </p>
          <div className="text-sm text-zinc-600 leading-relaxed space-y-1">
            <p><strong>Email:</strong> <a href="mailto:info@cybernovr.com" className="text-red-700 hover:underline">info@cybernovr.com</a></p>
            <p><strong>Tel Number (Nigeria):</strong> <a href="tel:+2348098120000" className="text-red-700 hover:underline">+234-809-812-0000</a></p>
            <p><strong>Mailing Address:</strong></p>
            <p>17 Sunday Adigun Street, Alausa, Ikeja, Lagos, Nigeria</p>
            <p className="pt-2"><strong>ATTN: Data Protection Officer (Privacy Team Lead)</strong></p>
            <p>17 Sunday Adigun Street, Alausa, Ikeja, Lagos, Nigeria</p>
          </div>
        </section>

        {/* Accessibility */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Accessibility</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            If you are unable to access our form, you can request a copy in an alternative format by calling <a href="tel:+2348098120000" className="text-red-700 hover:underline">+234-809-812-0000</a> (Nigeria) or by emailing <a href="mailto:info@cybernovr.com" className="text-red-700 hover:underline">info@cybernovr.com</a>
          </p>
        </section>

        {/* Changes */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Changes to the Policy</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            This Privacy Policy may be revised periodically to reflect changes in our practices, technology, applicable laws, or other factors. When updates are made, we will update the &quot;effective date&quot; at the top of this page. For significant changes, we may also notify you in advance—such as through a prominent notice on our website or by contacting you via the email address you provided.
          </p>
        </section>

        {/* Back link */}
        <div className="pt-6 border-t border-zinc-200">
          <Link href="/" className="text-red-700 hover:text-red-600 font-bold uppercase text-sm tracking-widest font-mono">
            &larr; Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
