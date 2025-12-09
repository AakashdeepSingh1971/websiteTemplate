"use client";
import { 
  Building2, 
  Home, 
  FileText, 
  Heart, 
  Stethoscope, 
  ShoppingCart,
  Hexagon,
  Link
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "SaaS",
    description: "Empowering various industries with cutting-edge SaaS solutions for enhanced efficiency and seamless operations.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Transforming real estate dreams into reality with our expert services and personalized property solutions.",
  },
  {
    icon: FileText,
    title: "Blogs",
    description: "Insightful blog content to inform, engage, and inspire audiences across diverse industries and interests.",
  },
  {
    icon: Heart,
    title: "Donations",
    description: "Drive impactful causes through lead generation, content creation, and compelling donation campaigns.",
  },
  {
    icon: Stethoscope,
    title: "Medical",
    description: "Enhance patient care with performance marketing, CMS development, and captivating graphic design.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Unlock online success with tailored website development and effective performance marketing strategies.",
  },
  {
    icon: Hexagon,
    title: "NFT",
    description: "Explore the limitless potential of NFTs and blockchain with our cutting-edge solutions.",
  },
  {
    icon: Link,
    title: "Blockchain",
    description: "Transform industries with secure, decentralized solutions using our blockchain expertise and content creation.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            industries we <span className="text-primary">cater</span>
          </h2>
          <p className="text-muted-foreground">Let's connect with your industry</p>
        </div>

        {/* Stats */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm mb-2">clients from the industries</p>
          <p className="text-6xl font-bold text-primary">72+</p>
        </div>

        {/* Scrolling Industries */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-card border border-border rounded-xl p-6 card-hover"
              >
                <industry.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2 capitalize">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection;
