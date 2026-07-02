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

  useEffect(() => {
    const nav    = navRef.current;
    const active = activeLinkRef.current;
    if (!nav || !active) { setPillStyle(null); return; }
    const navRect    = nav.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    setPillStyle({ left: activeRect.left - navRect.left, width: activeRect.width });
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
        style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg,#059669,#10b981,#ca8a04)" }}
      />

      {/* ── Desktop full-width navbar ─────────────────────────── */}
      <div className="fixed top-3 left-4 right-4 z-50 hidden lg:flex justify-center pointer-events-none">
        <header
          className={`navbar-3d rounded-2xl flex items-center pointer-events-auto transition-all duration-300 ${
            scrolled ? "py-1.5 px-4" : "py-2 px-5"
          }`}
        >
          {/* Nav links + toggle all in one centred row */}
          <nav ref={navRef} className="relative flex items-center gap-0.5">
            {/* Sliding active pill */}
            {pillStyle && (
              <span
                className="absolute top-0 bottom-0 rounded-xl bg-primary-emerald/10 border border-primary-emerald/20 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
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
                  className={`relative px-3.5 py-2 rounded-xl text-[11.5px] font-medium transition-colors duration-200 whitespace-nowrap ${
                    active
                      ? "text-primary-emerald font-semibold"
                      : "text-custom-fg/65 hover:text-custom-fg"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Thin divider then toggle — sits right next to Contact */}
            <span className="w-px h-4 bg-custom-border/60 mx-1 flex-shrink-0" />
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-xl hover:bg-custom-fg/8 text-custom-fg/60 hover:text-custom-fg transition-colors duration-200 flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>
        </header>
      </div>

      {/* ── Mobile top bar ──────────────────────────────────────── */}
      <div className="fixed top-3 left-4 right-4 z-50 lg:hidden">
        <div className="navbar-3d rounded-full py-1.5 px-4 flex items-center justify-between pointer-events-auto">
          {/* Minimal brand mark */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-emerald to-accent-gold flex items-center justify-center text-white font-heading font-bold text-[10px] shadow-sm">
              S
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-custom-border text-custom-fg/80 hover:text-custom-fg hover:bg-custom-fg/5 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg border border-custom-border text-custom-fg/80 hover:text-custom-fg hover:bg-custom-fg/5 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="mt-2 ml-auto w-56 p-2 rounded-2xl glass border border-custom-border shadow-2xl pointer-events-auto flex flex-col gap-0.5 anim-slide-down relative">
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
