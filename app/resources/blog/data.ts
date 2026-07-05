export interface BlogSection {
  heading?: string;
  body: string;
  image?: { src: string; alt: string; caption?: string };
  video?: { src: string; caption?: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  description: string;
  image: { src: string; alt: string };
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "securing-our-5G",
    title: "Securing Our 5G Infrastructure As A Critical National Information Infrastructure",
    author: "Kazeem Durodoye",
    authorRole: "PhD | FNCS",
    date: "12th June, 2025",
    category: "Critical Infrastructure",
    description:
      "Nigeria\u2019s 5G deployment is driving the need for resilience among industry, academia, and government. This article explores the security challenges and attack vectors facing 5G critical infrastructure.",
    image: { src: "/assets/blog/securing-5g.jpg", alt: "5G Infrastructure Security" },
    sections: [
      {
        body: "Nigeria auctioned the 3.5 gigahertz (GHz) spectrum on the 10th of December 2021, which provided the regulatory platform to deploy the Fifth Generation (5G) mobile technology in September 2022. The launch and ubiquity of use cases of 5G, especially in powering critical services, are driving the need for resilience of 5G among industry, academia, and the government of Nigeria.",
        video: { src: "/assets/blog/NTAinterview.mp4", caption: "Dr. Kazeem Durodoye discusses 5G infrastructure security on NTA" },
      },
      {
        heading: "The Evolution to 5G",
        body: "5G is an evolution from previous generations of mobile communication technologies. This evolution is usually referred to in a generation like first, second, third, fourth, etc. The key factor for the First Generation (1G) was mobility primarily used for analog voice services while the Second Generation (2G) was an improvement through the digitization of phone calls and enabling Short Message Services (SMS) as well as other basic data services. The Third Generation (3G) was launched in 1998 for a better internet experience (mobile and wireless internet connection). Broadband internet and internet-based applications were enabled on 3.5G while the Fourth Generation (4G), released around 2008 delivered high-speed internet and high-capacity multimedia for images and video.",
      },
      {
        heading: "5G Benefits and Critical Use Cases",
        body: "Beyond being a radio access technology, 5G is a new architecture and standard with far greater agility in all domains of human endeavor. Some of the benefits of 5G include improved capacity, latency, agility, reliability, and speeds, making it relevant to communication and infrastructure service providers and most industry verticals. 5G promises several critical use cases, from medical applications to delivering education to students in remote areas. Equally, industrial automation, public safety service, and support for public utilities or self-driving cars are also important applications of 5G.",
      },
      {
        heading: "Security Responsibilities",
        body: "The criticality of these use cases has put responsibilities on telecommunications operators and the government to work together to safeguard the underlying technologies of 5G. This responsibility will ensure that appropriate safeguards are in place to prevent these infrastructures from malicious attacks from state and non-state actors.",
      },
      {
        heading: "5G Attack Vectors and Vulnerabilities",
        body: "Some 5G high-level attack vectors include Denial of Service (DoS), exploiting backdoors, exploiting flaws in operational procedures, and other forms of attacks. Furthermore, 5G has multiple logical networks called network slices, and the increased number of devices connected invariably increases the attack surface and attack frequency, respectively. This means the 5G networks may be exposed to vulnerabilities with more serious consequences on the critical infrastructures it enables than the previous generations of mobile telecommunications.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
