"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/data";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

function subscribeToScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange);
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getScrollState() {
  return window.scrollY > 20;
}

export function Navbar() {
  const isScrolled = useSyncExternalStore(subscribeToScroll, getScrollState, () => false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-surface/85 backdrop-blur-md py-4 border-b border-brand/5 shadow-sm" : "bg-transparent py-6"
    )}>
      <Container className="flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-brand transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button asChild>
             <Link href="#kontakt">Zapisz się</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-brand"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={isMobileMenuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
          </svg>
        </button>
      </Container>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-brand/5 p-6 space-y-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-text-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full" asChild>
            <Link href="#kontakt" onClick={() => setIsMobileMenuOpen(false)}>Zapisz się</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
