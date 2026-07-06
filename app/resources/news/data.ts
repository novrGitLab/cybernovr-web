export interface NewsBrief {
  title: string;
  source: string;
  desc: string;
  link: string;
  image: string;
  date: string;
}

export const newsBriefs: NewsBrief[] = [
  {
    title: "NCC Unveils Cybersecurity Blueprint to Fortify Nigeria's Telecom Backbone",
    source: "Nigeria Communications Week",
    desc: "The presentation of the proposed framework by the Chief Executive Officer of Cybernovr, the consultants to the Commission on the project, Dr. Kazeem Durodoye, further provided details on securing the telecom sector.",
    link: "https://www.nigeriacommunicationsweek.com.ng/ncc-unveils-cybersecurity-blueprint-to-fortify-nigerias-telecom-backbone/",
    image: "/assets/news/ncc-summit.jpg",
    date: "2025-09-26"
  },
  {
    title: "Lagos Students Trained in Cybersecurity Skills",
    source: "The Punch Nigeria",
    desc: "The training organised by Cybernovr Limited in partnership with the Rotary Club of Lagos, will provide the students with 10 modules covering cybersecurity basics, identity management, cyber threat awareness.",
    link: "https://punchng.com/lagos-students-trained-in-cybersecurity-skills/",
    image: "/assets/news/lagos-students.jpg",
    date: "2025-07-15"
  },
  {
    title: "NCC Moves to Develop Cybersecurity Regulatory Framework for Telecoms Sector",
    source: "This Day Live",
    desc: "In a lead paper presentation on the overview of the proposed cybersecurity framework for the telecoms sector, the CEO, Cybernovr and Consultant to NCC, Dr. Kazeem Durodoye, highlighted key provisions.",
    link: "https://www.thisdaylive.com/2025/06/05/ncc-moves-to-develop-cybersecurity-regulatory-framework-for-telecoms-sector/",
    image: "/assets/news/ncc-regulatory.jpg",
    date: "2025-06-05"
  },
  {
    title: "NCC Announced the Development of a Comprehensive Cybersecurity Framework",
    source: "The Economic Times",
    desc: "Adding depth to the conversation, Dr. Kazeem Durodoye, CEO of Cybernovr, stressed the need for the framework to account for evolving mobile technologies such as Open RAN.",
    link: "https://theeconomictimes.com.ng/2025/06/05/ncc-unveils-comprehensive-cybersecurity-framework-to-safeguard-nigerias-telecom-sector/",
    image: "/assets/news/ncc-framework.jpg",
    date: "2025-06-05"
  }
];
