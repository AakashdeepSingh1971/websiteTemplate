"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">
              KASHIN
            </span>
            {/* <span className="text-xs text-muted-foreground hidden sm:block">
              A CREATIVE AGENCY
            </span> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* <a href="#" className="text-foreground hover:text-primary transition-colors">
              KASHIN 2.0 ✦
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Life At KASHIN
            </a> */}
            <a href="#" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
              Services <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Results
            </a>
          </nav>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Say Hii, Don't be shy 👋
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                KASHIN 2.0 ✦
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Life At KASHIN
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Results
              </a>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Say Hii, Don't be shy 👋
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
