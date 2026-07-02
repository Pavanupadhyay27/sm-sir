"use client";

import { useState, useEffect, useRef } from "react";
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

  // Active pill indicator position
  const navRef        = useRef<HTMLElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null);

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

  // Slide the active indicator pill under the active nav link
  useEffect(() => {
    const nav    = navRef.current;
    const active = activeLinkRef.current;
    if (!nav || !active) { setPillStyle(null); return; }
    const navRect    = nav.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    setPillStyle({
      left:  activeRect.left - navRect.left,
      width: activeRect.width,
    });
  }, [pathname]);

  const applyTheme = (t: "dark" | "light") => {
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    localStorage.setItem("theme", t);
  };

  const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* ── Scroll progress bar ────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #059669, #10b981, #ca8a04)",
        }}
      />

      {/* ── Desktop floating pill navbar ─────────────────────── */}
      <div className="fixed top-3 left-4 right-4 z-50 hidden lg:flex justify-center pointer-events-none">
        <header
          className={`navbar-3d rounded-full flex items-center gap-3 pointer-events-auto transition-all duration-300 ${
            scrolled ? "py-1 px-4" : "py-1.5 px-5"
          }`}
        >
          {/* Logo mark */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 mr-2 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-emerald to-accent-gold flex items-center justify-center text-white font-heading font-bold text-xs shadow-md shadow-primary-emerald/20 group-hover:scale-110 transition-transform duration-200">
              S
            </div>
            <span className="font-heading text-xs font-bold tracking-wider text-custom-fg/80 group-hover:text-custom-fg transition-colors hidden xl:block">
              SRD
            </span>
          </Link>

          {/* Divider */}
          <div className="w-px h-4 bg-custom-border" />

          {/* Nav links with sliding pill indicator */}
          <nav ref={navRef} className="relative flex items-center space-x-0.5">
            {/* Sliding active indicator */}
            {pillStyle && (
              <span
                className="absolute top-0 bottom-0 rounded-full bg-primary-emerald/10 border border-primary-emerald/20 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{ left: pillStyle.left, width: pillStyle.width }}
              />
            )}

            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  ref={active ? activeLinkRef : undefined}
                  className={`relative px-3 py-1.5 rounded-full text-[11px] font-medium transition-colors duration-200 ${
                    active
                      ? "text-primary-emerald font-semibold"
                      : "text-custom-fg/65 hover:text-custom-fg"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="w-px h-4 bg-custom-border" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-custom-fg/8 text-custom-fg/60 hover:text-custom-fg transition-all duration-200 hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === "dark"
              ? <Sun className="w-3.5 h-3.5" />
              : <Moon className="w-3.5 h-3.5" />
            }
          </button>
        </header>
      </div>

      {/* ── Mobile top bar ──────────────────────────────────────── */}
      <div className="fixed top-3 left-4 right-4 z-50 lg:hidden">
        <div className="navbar-3d rounded-full py-2 px-4 flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary-emerald to-accent-gold flex items-center justify-center text-white font-heading font-bold text-[10px] shadow-sm group-hover:scale-110 transition-transform duration-200">
              S
            </div>
            <span className="font-heading text-xs font-bold tracking-widest text-custom-fg">SRD.</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-custom-border text-custom-fg/80 hover:text-custom-fg hover:bg-custom-fg/5 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <Sun className="w-3.5 h-3.5" />
                : <Moon className="w-3.5 h-3.5" />
              }
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg border border-custom-border text-custom-fg/80 hover:text-custom-fg hover:bg-custom-fg/5 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Dropdown — animated slide in */}
        {isOpen && (
          <nav className="mt-2 ml-auto w-52 p-2 rounded-2xl glass border border-custom-border shadow-2xl pointer-events-auto flex flex-col gap-0.5 anim-slide-down">
            {/* Gradient accent top */}
            <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-primary-emerald/40 to-transparent" />

            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    active
                      ? "bg-primary-emerald/12 text-primary-emerald font-semibold border border-primary-emerald/20"
                      : "text-custom-fg/75 hover:bg-custom-fg/6 hover:text-custom-fg"
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
