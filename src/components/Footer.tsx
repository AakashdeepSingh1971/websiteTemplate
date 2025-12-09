"use client";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">KASHIN</span>
            {/* <span className="text-xs text-muted-foreground">A CREATIVE AGENCY</span> */}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 KASHIN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
