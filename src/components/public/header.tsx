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
  const [isOpen,         setIsOpen]         = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled,       setScrolled]       = useState(false);
  const [theme,          setTheme]          = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const isDark = saved ? saved === "dark" : document.documentElement.classList.contains("dark");
    applyTheme(isDark ? "dark" : "light");
  }, []);

  const applyTheme = (t: "dark" | "light") => {
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    localStorage.setItem("theme", t);
  };

  const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-primary-emerald to-accent-gold z-[60] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ── Desktop floating pill navbar ───────────────────────── */}
      <div className="fixed top-3 left-4 right-4 z-50 hidden lg:flex justify-center pointer-events-none">
        <header
          className={`navbar-3d rounded-full flex items-center justify-center space-x-8 pointer-events-auto transition-all duration-300 ${
            scrolled ? "py-1 px-5" : "py-1.5 px-6"
          }`}
        >
          <nav className="flex items-center space-x-1">
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
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-custom-fg/5 text-custom-fg/70 hover:text-custom-fg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </header>
      </div>

      {/* ── Mobile top bar ─────────────────────────────────────── */}
      <div className="fixed top-3 left-4 right-4 z-50 lg:hidden">
        {/* The pill bar: label + theme + hamburger */}
        <div className="navbar-3d rounded-full py-2 px-4 flex items-center justify-between pointer-events-auto">
          <span className="font-heading text-xs font-bold tracking-widest text-custom-fg">SRD.</span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-custom-border text-custom-fg/80 hover:text-custom-fg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg border border-custom-border text-custom-fg/80 hover:text-custom-fg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Dropdown — narrow, right-aligned below the pill */}
        {isOpen && (
          <nav className="mt-2 ml-auto w-48 p-2 rounded-2xl glass border border-custom-border shadow-2xl pointer-events-auto flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    active
                      ? "bg-primary-emerald/15 text-primary-emerald font-semibold"
                      : "text-custom-fg/75 hover:bg-custom-fg/5 hover:text-custom-fg"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </>
  );
}
