"use client";
import { Megaphone, Code, Palette, Camera } from "lucide-react";

const expertiseCards = [
  {
    icon: Megaphone,
    title: "Growth",
    subtitle: "Marketing",
  },
  {
    icon: Code,
    title: "Website",
    subtitle: "Development",
  },
  {
    icon: Palette,
    title: "Creative",
    subtitle: "Designing",
  },
  {
    icon: Camera,
    title: "Photography &",
    subtitle: "Videography",
  },
];

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* Tagline */}
        <p className="text-primary font-medium tracking-wide mb-4">
          Audience-Led, Customer Focused.
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">Our<br />
          <span className="text-foreground">Expertise</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          We Help Companies Optimize, Grow, And Transform.
        </p>

        {/* Expertise Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {expertiseCards.map((card, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 card-hover cursor-pointer group"
            >
              <card.icon className="w-12 h-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-foreground font-semibold text-lg">
                {card.title}
              </h3>
              <p className="text-foreground">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
