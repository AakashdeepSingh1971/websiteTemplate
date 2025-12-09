"use client";
import { ClipboardCheck, Users, MessageCircle } from "lucide-react";

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Pre-board Process",
    description: "Before a project or service engagement begins we ensure a seamless onboarding experience for clients to set the stage for a successful service delivery.",
  },
  {
    icon: Users,
    title: "On Board Process",
    description: "By implementing effective on-board processes, we ensure that clients' needs are met with excellence, and the organization maintains a cohesive and high-performing team.",
  },
  {
    icon: MessageCircle,
    title: "Post Board Process",
    description: "We warmly embrace consistent communication to foster and cherish the client relationship.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-2">what you'll get</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            from our <span className="text-primary">process</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 text-center card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
