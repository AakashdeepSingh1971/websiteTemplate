"use client";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Megaphone, 
  Target, 
  Share2, 
  BarChart3, 
  FileText,
  Layout,
  ShoppingCart,
  FileCode,
  Smartphone,
  User,
  Package,
  PenTool,
  BookOpen,
  Monitor,
  Layers,
  Figma,
  Box,
  Camera,
  Heart,
  UtensilsCrossed,
  Video,
  ShoppingBag,
  Film
} from "lucide-react";

const servicesData = [
  {
    category: "Marketing",
    color: "bg-gradient-to-br from-primary/20 to-primary/5",
    link: "#",
    services: [
      { icon: TrendingUp, title: "Organic Marketing" },
      { icon: Megaphone, title: "Advertisement" },
      { icon: Target, title: "Lead Generation" },
      { icon: Share2, title: "Social Media Marketing" },
      { icon: BarChart3, title: "Performance Marketing" },
      { icon: FileText, title: "Content Marketing" },
    ],
  },
  {
    category: "Web Development",
    color: "bg-gradient-to-br from-blue-500/20 to-blue-500/5",
    link: "#",
    services: [
      { icon: Layout, title: "CMS Development" },
      { icon: ShoppingCart, title: "E-Commerce Stores" },
      { icon: FileCode, title: "Landing Pages" },
      { icon: Smartphone, title: "Mobile App Development" },
      { icon: User, title: "Personal Websites" },
      { icon: Package, title: "Custom Product Development" },
    ],
  },
  {
    category: "Graphic Designing",
    color: "bg-gradient-to-br from-purple-500/20 to-purple-500/5",
    link: "#",
    services: [
      { icon: PenTool, title: "Logo Design" },
      { icon: BookOpen, title: "Brand Style Guides" },
      { icon: Monitor, title: "Website Design" },
      { icon: Layers, title: "App Design" },
      { icon: Figma, title: "UX Design" },
      { icon: Box, title: "3D Designing" },
    ],
  },
  {
    category: "Photography & Videography",
    color: "bg-gradient-to-br from-pink-500/20 to-pink-500/5",
    link: "#",
    services: [
      { icon: Camera, title: "Corporate Photography" },
      { icon: Heart, title: "Lifestyle Photography" },
      { icon: UtensilsCrossed, title: "Food Photography" },
      { icon: Video, title: "Shoot Strategy" },
      { icon: ShoppingBag, title: "Product Photography" },
      { icon: Film, title: "Video Editing" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            services we <span className="text-primary">offer</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {servicesData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-3xl font-bold text-foreground">
                  {category.category}
                </h3>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit"
                >
                  Get Your Service Now
                </Button>
              </div>

              {/* Services Grid */}
              <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 rounded-2xl ${category.color}`}>
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center card-hover cursor-pointer group"
                  >
                    <service.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-foreground font-medium text-sm">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
