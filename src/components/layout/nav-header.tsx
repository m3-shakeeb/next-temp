"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import siteInfo from "@/config/site-info";
import { cn } from "@/lib/utils";
import Container from "../container";
import { Logo } from "./logo";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about-us" },
  { title: "How It works", href: "/how-it-works" },

  { title: "Contact Us", href: "/contact-us" },
  { title: "Dashboard", href: "/dashboard" },
] as const;

export function NavHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300   shadow",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="relative bg-background/80 backdrop-blur-sm">
        <Container className="max-w-screen-xl">
          <nav className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center  group space-x-1">
              <Logo />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight transition-colors group-hover:text-primary uppercase">
                  {siteInfo.name}
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wider">
                  DIGITAL SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        " font-medium transition-colors relative py-1",
                        "before:absolute before:left-0 before:bottom-0",
                        "before:h-0.5 before:rounded-full before:bg-primary",
                        "before:transition-all before:duration-300",
                        isActive
                          ? "text-primary before:w-full"
                          : "hover:text-primary before:w-0 hover:before:w-full"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="w-full h-[100dvh] border-0 bg-background backdrop-blur-lg"
              >
                <nav className="flex flex-col items-center justify-center h-full">
                  <ul className="flex flex-col items-center gap-8">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "text-3xl font-medium transition-colors relative py-2",
                              "before:absolute before:left-0 before:bottom-0",
                              "before:h-0.5 before:rounded-full before:bg-primary",
                              "before:transition-all before:duration-300",
                              isActive
                                ? "text-primary before:w-full"
                                : "hover:text-primary before:w-0 hover:before:w-full"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </Container>
      </div>
    </header>
  );
}
