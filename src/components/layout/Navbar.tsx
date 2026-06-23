"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { navGroups, navLinks, site, type Engine } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const accentText = (engine?: Engine) =>
  engine === "build" ? "text-build" : engine === "grow" ? "text-grow" : "text-ink";
const accentBg = (engine?: Engine) =>
  engine === "build"
    ? "bg-build/12 text-build"
    : engine === "grow"
      ? "bg-grow/12 text-grow"
      : "bg-surface-3 text-ink";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-line bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-18">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navGroups.map((group) => {
            const active = pathname.startsWith(group.href);
            const isOpen = openGroup === group.label;
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <Link
                  href={group.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active || isOpen ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {group.label}
                  <ChevronDown className={cn("size-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
                </Link>

                <div
                  className={cn(
                    "absolute left-0 top-full pt-3 transition-all duration-200",
                    isOpen
                      ? "visible translate-y-0 opacity-100"
                      : "pointer-events-none invisible translate-y-2 opacity-0",
                  )}
                >
                  <div className="glass w-80 overflow-hidden rounded-2xl p-2 shadow-2xl shadow-black/40">
                    {group.children.map((child) => {
                      const Icon = child.icon;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-3"
                        >
                          {Icon && (
                            <span className={cn("mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg", accentBg(group.engine))}>
                              <Icon className="size-4.5" />
                            </span>
                          )}
                          <span className="flex flex-col">
                            <span className="text-sm font-medium text-ink">{child.label}</span>
                            {child.desc && <span className="text-xs leading-snug text-faint">{child.desc}</span>}
                          </span>
                        </Link>
                      );
                    })}
                    <Link
                      href={group.href}
                      className={cn(
                        "mt-1 flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-surface-3",
                        accentText(group.engine),
                      )}
                    >
                      Explore {group.label}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                pathname.startsWith(link.href) ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button href="/contact" variant="build" size="sm" className="hidden sm:inline-flex" withArrow>
            Book a Call
          </Button>
          <button
            className="grid size-10 place-items-center rounded-full text-ink lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto pb-8 pt-2">
            {navGroups.map((group) => (
              <div key={group.label} className="border-b border-line py-4">
                <Link
                  href={group.href}
                  className={cn("mb-2 block text-sm font-semibold uppercase tracking-wider", accentText(group.engine))}
                >
                  {group.label}
                </Link>
                <div className="grid gap-1">
                  {group.children.map((child) => {
                    const Icon = child.icon;
                    return (
                      <Link key={child.href} href={child.href} className="flex items-center gap-3 rounded-lg py-2 text-ink">
                        {Icon && <Icon className={cn("size-5", accentText(group.engine))} />}
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-1 border-b border-line py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="py-2 font-medium text-ink">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 pt-5">
              <Button href="/contact" variant="build" withArrow>
                Book a Call
              </Button>
              <Button href={site.whatsapp} external variant="outline">
                <Phone className="size-4" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
