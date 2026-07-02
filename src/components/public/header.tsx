"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home",         href: "/" },
  { name: "About",        href: "/about" },
  { name: "Research Lab", href: "/research-lab" },
  { name: "Publications", href: "/publications" },
  { name: "Patents",      href: "/patents" },
  { name: "Awards",       href: "/awards" },
  { name: "Teaching",     href: "/teaching" },
  { name: "Leadership",   href: "/leadership" },
  { name: "Gallery",      href: "/gallery" },
  { name: "Blog",         href: "/blog" },
  { name: "Contact",      href: "/contact" },
];

export default function Header() {
  const [isOpen,          setIsOpen]          = useState(false);
  const [scrollProgress,  setScrollProgress]  = useState(0);
  const [scrolled,        setScrolled]        = useState(false);
  const [theme,           setTheme]           = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  // Scroll: progress bar + docked shrink state
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme: read from localStorage or existing class on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const isDark = saved ? saved === "dark" : document.documentElement.classList.contains("dark");
    applyTheme(isDark ? "dark" : "light");
  }, []);

  const applyTheme = (t: "dark" | "light") => {
    setTheme(t);
    if (t === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", t);
  };

  const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-primary-emerald to-accent-gold z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating navbar */}
      <div className="fixed top-3 left-4 right-4 z-50 flex flex-col items-center pointer-events-none">
        <header
          className={`navbar-3d rounded-full flex items-center justify-between lg:justify-center lg:space-x-8 pointer-events-auto w-full lg:w-auto transition-all duration-300 ${
            scrolled ? "py-1 px-4 sm:px-5" : "py-1.5 px-4 sm:px-6"
          }`}
        >
          {/* Mobile label */}
          <span className="lg:hidden font-heading text-xs font-bold tracking-widest text-custom-fg">
            SRD.
          </span>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 ${
                    active
                      ? "bg-primary-emerald/10 text-primary-emerald border border-primary-emerald/20 font-semibold"
                      : "text-custom-fg/70 hover:text-custom-fg hover:bg-custom-fg/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Theme toggle — desktop */}
          <div className="hidden lg:flex items-center ml-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-custom-fg/5 text-custom-fg/70 hover:text-custom-fg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <Sun  className="w-3.5 h-3.5" />
                : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-custom-border text-custom-fg/80 hover:text-custom-fg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <Sun  className="w-3.5 h-3.5" />
                : <Moon className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg border border-custom-border text-custom-fg/80 hover:text-custom-fg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Mobile dropdown — compact 2-col grid */}
        {isOpen && (
          <div className="lg:hidden w-full mt-2 pointer-events-auto">
            <nav className="grid grid-cols-2 gap-1 p-3 rounded-2xl glass border border-custom-border shadow-2xl">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 rounded-xl text-[11px] font-medium text-center transition-all ${
                      active
                        ? "bg-primary-emerald/15 text-primary-emerald font-semibold"
                        : "text-custom-fg/70 hover:bg-custom-fg/5 hover:text-custom-fg"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
