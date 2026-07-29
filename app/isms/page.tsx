export const metadata = {
  title: "ISMS Policy | CYBERNOVR",
  description:
    "CYBERNOVR Information Security Management System (ISMS) Policy",
};

export default function IsmsPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto bg-white text-zinc-900 antialiased">
      <div className="max-w-3xl text-left space-y-10">
        <div className="border-b border-zinc-200 pb-8">
          <span className="inline-block font-mono text-red-700 text-[11px] md:text-[15px] font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
            Legal
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase mb-4">
            ISMS Policy
          </h1>
        </div>

        <section className="space-y-4 text-[14px] text-zinc-600 leading-relaxed">
          <p>
            <strong>ISMS (Information Security Management System) POLICY</strong>
          </p>
          <p>
            At CYBERNOVR Limited, we are committed to providing quality,
            comprehensive, and cyber resilience-focused solutions to our
            customers. We continuously improve our ISO 27001:2022 Information
            Security Management system and satisfy applicable statutory,
            regulatory, and legal requirements.
          </p>
        </section>
      </div>
    </div>
  );
}
