"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Let's discuss <span className="text-primary">Your great ideas...</span>
        </h2>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center">
            <span className="text-2xl">💡</span>
          </div>
          <div className="w-20 h-20 bg-card border border-primary rounded-lg flex items-center justify-center">
            <span className="text-3xl">🚀</span>
          </div>
          <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center">
            <span className="text-2xl">✨</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group"
        >
          Let's GOOOOO!
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
