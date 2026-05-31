export default function TheTeamPage() {
  const staff = [
    { name: "Dr. Kazeem Durodoye", role: "Chief Executive Officer", pic: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMqDFrj_91KizWueltkqzAMdHTqRSzXaHjs7DF2j45M7SQLEAZz35mEGqUGOv31Ecl3suMy8utNsdKus7Vuoahi2of3-5bvDCfF9ZY61qwRhH88MvPdV3cHaF5l3pFuVR4kf7IuHBalz_nqW6VU0BiIYAMvTJ9Zc2N8Y42TlnCDmjQSLgKzHyIjt3QsybaIiw7zfL1uqh8pfOGPHn2VJ7KXYgi_hnS8lm7x6FrDF9YVu1xx-r5VjBfMg51liDZHjNKahbrE8ETeyBx" },
    { name: "Mr. Ibrahim Oladeji", role: "Chief Information Officer", pic: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa7wAMcnOiSfshk3cn4mUjgd0NEvufuRwe1yyMwMHCb5fncrebsG36oT07QoRMyAl8gJToyLMk7D3j6CQEdo8dDEPcbN3LGgVppXJXpj-OZJ7K5bV-mbVlFt9NO2MrPWI2zv8OMWBf0cHyTxZdFP_mtLB9YNqRjvIOIuDHk2MSfzMg8w-Dc7EDcMozz8vEeHz3g9zPQeCHPP_Tz2XuaLelSnLBA_AIFjs12Dok4hz5Er-4FN2jKqB8jAQU4N2sSR64rg2Gx1dSIJo8" },
    { name: "Fisayomi Adeyemi", role: "Intern Architect", pic: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLW-skyTAkWBpGWbLBDt6KzqGJqHXMzJkNLWUHD4YuIRoC8vIOgiYSK0N8vuF5SRSVoA8O7ixnrMXP391YVMTr8_BITXx37MPV5qXibUAICT1nma9RYGQARRncFylAfFcVK1jwxfjeKrb1dZOTnLHfrapWkJhYytWpy1YTtw1K8ay0i0VNrSRrEZceatNkljHme55XV-ihPmdoZEfgnOMv67hRnscfw7jrjDykxFSlToSHqxjvOLdYBmHhYKKl8KNrYQyEA-yvII34" },
    { name: "Chiamaka Prisca", role: "Intern Engineer", pic: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7glZdZKm_zgFrEfzD6km3nWNdULlXF7YLIMLHvJQ0XAbfUMzrUD-WSPCQLhRP47DDWvvwml_uPeAxrBO6K4qbPmQuA3ifIuGQ66TNpj29fRlAC9PTj5jVWCI2cYGZUpxmLnJp-XL33WsrQwuDv_MLIxcXq3aZkcUTbE69ffpZ-7Es4l6ccuTaw61dZILWMLWzJigmh-g7nw1ddK9ottAe2Y7l6zbJiKbdHJXTL6yMeMGKCDP1003WSKt1qNZClDyAcxmcguujby1" },
    { name: "Abubakar Usman Damilare", role: "Product Manager Intern", pic: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYeGu6kS3xPmKM1ABOA6AOQ6Lc2PuVuAGmMrFIPOVRdRKE55QLLeXEK2Nm9g11XdIAuVKor6OYEEWkf23vGrzmN9pxV33wyxLv8wHl5Q22o62w0rzV9HnFD-kh057h7fhE7R2CYDrnzQajdUsvHR4NaF3cXfavIehOdGriwRwcw2cofOCfzMVahVZCLjdn8lg-CVvaDqgLO1WLDsU82yK1K6w0hvCI6J29Dn-ti33XtDUfQjszsu1Ka-LRsOYNEAuIOATu4hh0NrhK" }
  ];

  return (
    <div className="pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-gutter mb-16">
        <div className="w-2 bg-primary h-32 self-stretch"></div>
        <div className="flex-1">
          <h1 className="text-5xl font-black text-on-background leading-tight mb-4">
            The Brains Behind the Defense Matrix
          </h1>
          <p className="text-on-surface-variant max-w-2xl text-base">
            Our multi-disciplinary team combines elite infrastructure design, product leadership, and cybersecurity intelligence to secure sovereign systems.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {staff.map((member, i) => (
          <div key={i} className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="aspect-square w-full overflow-hidden rounded-md mb-6 bg-surface-container grayscale group-hover:grayscale-0 transition-all duration-500">
              <img alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={member.pic} />
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-1">{member.name}</h3>
            <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">{member.role}</p>
            <div className="flex gap-3 text-on-surface-variant/60">
              <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">share</span>
              <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">alternate_email</span>
            </div>
          </div>
        ))}

        {/* Empty Strategic Placeholder to match design context balance */}
        <div className="border border-dashed border-outline-variant/60 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-surface/20">
          <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">group_add</span>
          <h3 className="text-lg font-bold text-on-surface-variant mb-1">Grow with us</h3>
          <p className="text-xs text-on-surface-variant/80">Currently seeking Intelligence Analysts and Cryptographers.</p>
        </div>
      </div>
    </div>
  );
}