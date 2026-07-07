import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | CYBERNOVR",
  description: "CYBERNOVR Cookie Policy — how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto bg-white text-zinc-900 antialiased">
      <div className="max-w-3xl text-left space-y-10">

        {/* Header */}
        <div className="border-b border-zinc-200 pb-8">
          <span className="inline-block font-mono text-red-700 text-sm font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 uppercase mb-4">Cookie Policy</h1>
          <p className="text-zinc-500 text-base font-medium">Last updated: May 18, 2025</p>
        </div>

        {/* Intro */}
        <section className="space-y-4 text-sm text-zinc-600 leading-relaxed">
          <p>
            This Cookie Policy explains how CYBERNOVR (&quot;we&quot;, &quot;us&quot;, and &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </section>

        {/* What Are Cookies */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">What Are Cookies?</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Cookies set by the website owner (in this case, CYBERNOVR) are called &quot;first-party cookies&quot;. Cookies set by parties other than the website owner are called &quot;third-party cookies&quot;. Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
          </p>
        </section>

        {/* Why We Use Cookies */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Why Do We Use Cookies?</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.
          </p>
        </section>

        {/* Types of Cookies */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Types of Cookies We Use</h2>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-tight">Essential Website Cookies</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-tight">Performance and Functionality Cookies</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-tight">Analytics and Customization Cookies</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you in order to enhance your experience.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-tight">Advertising Cookies</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-tight">Social Media Cookies</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              These cookies are used to enable you to share pages and content that you find interesting on our website through third-party social networking and other websites. These cookies may also be used for advertising purposes.
            </p>
          </div>
        </section>

        {/* How to Control Cookies */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">How Can You Control Cookies?</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser&apos;s help menu for more information.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit{' '}
            <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">http://www.aboutads.info/choices/</a>{' '}
            or{' '}
            <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">http://www.youronlinechoices.com</a>.
          </p>
        </section>

        {/* Web Beacons */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Do We Use Web Beacons?</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Like any other website, CYBERNOVR uses &quot;cookies&quot; and web beacons. These web beacons are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Certain sections of our website and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit us, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
          </p>
        </section>

        {/* Updates */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">How Often Will We Update This Cookie Policy?</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            The date at the bottom of this Cookie Policy indicates when it was last updated.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Where Can You Get Further Information?</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            If you have any questions about our use of cookies or other technologies, please email us at info@cybernovr.com or use the contact details provided in our Privacy Policy.
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
