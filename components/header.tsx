"use client";

import Link from "next/link";
import Image from "next/image";
import { DonateButton } from "@/components/donate-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background shadow-md z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-full">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-24 h-32">
            <Image
              src="/images/logo.png"
              alt="West Hill Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <span className="text-primary font-bold text-2xl">West Hill</span>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/#about" className="text-muted-foreground hover:text-primary">
            About
          </Link>
          <Link href="/#contact" className="text-muted-foreground hover:text-primary">
            Contact
          </Link>
          <Link href="/gallery" className="text-muted-foreground hover:text-primary">
            Gallery
          </Link>
          <div className="ml-4">
            <DonateButton className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition" />
          </div>
        </nav>

        {/* Mobile Hamburger Button - Shown only on mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-50 md:hidden">
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end mb-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex flex-col items-center space-y-8 flex-1">
                <Link 
                  href="/#about" 
                  className="text-2xl text-muted-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/#contact" 
                  className="text-2xl text-muted-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="/gallery" 
                  className="text-2xl text-muted-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <div className="mt-8">
                  <DonateButton className="px-8 py-3 text-lg bg-primary text-white rounded-full hover:bg-primary-dark transition" />
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}